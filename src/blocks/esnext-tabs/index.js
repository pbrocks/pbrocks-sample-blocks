// import './tabs';
import { registerBlockType, createBlock } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

import { withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { Button } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

import {
	InnerBlocks,
	RichText,
	useBlockProps
} from '@wordpress/block-editor';

const ALLOWED_BLOCKS = ['pbrocks-sample-blocks/single-tab'];
const DEFAULT_ATTRIBUTES = {
	tabs: {
		type: 'array',
		default: [],
	},
	activeTab: {
		type: 'string',
		default: '',
	},
};

import './single-tab';
import './editor.scss';
import './style.scss';
import metadata from './block.json';

const TabsEdit = ({
	clientId,
	attributes,
	setAttributes,
	setActiveTab,
	insertBlock,
}) => {
	const { tabs, activeTab } = attributes;

	useEffect(() => {
		if (tabs.length && !activeTab) {
			setActiveTab(tabs[0].uid);
		}
	}, []);

	const blockProps = useBlockProps();

	return (

		<div {...blockProps}>
			<div className='tabs__group'>
				{tabs.map(({ title, uid }, i) => {
					let tabClass = 'single__tab';
					if (uid === activeTab) {
						' single__tab--active';
					}

					return (
						<div
							className={tabClass}
							key={uid}
							onClick={() => setActiveTab(uid)}
							onKeyDown={() => setActiveTab(uid)}
							role="tab"
							tabIndex="0"
						>
							<RichText
								tagName="div"
								value={title}
								onChange={(value) => {
									const newTabs = [...tabs];
									newTabs[i].title = value;
									setAttributes({ tabs: newTabs });
								}}
							/>
						</div>
					);
				})}
				<Button
					icon="plus"
					label="Add Tab"
					onClick={() => {
						const position = tabs.length;
						const tab = createBlock(
							'pbrocks-sample-blocks/single-tab'
						);
						insertBlock(tab, position, clientId);
						setAttributes({
							tabs: [
								...tabs,
								{
									uid: tab.clientId,
									title: `Editable Label ${position + 1}`,
								},
							],
						});
						setActiveTab(tab.clientId);
					}}
				/>
			</div>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				renderAppender={false}
			/>
		</div>
	);
};

const TabsSave = ({ attributes }) => {
	const { tabs } = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className='tabs__group'>
				{tabs.map(({ title, uid }) => {
					return (
						<div
							key={uid}
							data-tab-id={uid}
							className='single__tab'
						>
							{title}
						</div>
					);
				})}
			</div>
			<InnerBlocks.Content />
		</div>
	);
};

registerBlockType(metadata, {
	attributes: DEFAULT_ATTRIBUTES,
	edit: compose(
		withDispatch((dispatch, ownProps, { select }) => {
			const { getBlock } = select('core/block-editor');
			const { updateBlockAttributes, insertBlock } = dispatch(
				'core/block-editor'
			);
			const block = getBlock(ownProps.clientId);

			return {
				insertBlock,
				setActiveTab(activeTab) {
					updateBlockAttributes(
						ownProps.clientId, {
						activeTab
					}
					);
					block.innerBlocks.forEach((innerBlock) => {
						updateBlockAttributes(
							innerBlock.clientId, {
							activeTab,
						});
					});
				},
			};
		})
	)(TabsEdit),
	save: TabsSave,
});
