import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/block-editor';

export default function Edit(props) {
	const CONTEXT_TEMPLATE = [['pbrocks-sample-blocks/uses-context', {}]];
	const {
		attributes: { contextId },
		setAttributes,
	} = props;
	return (
		<div>
			<TextControl
				label={__('Context Info Input:')}
				value={contextId}
				onChange={(val) =>
					setAttributes({ contextId: (val) })
				}
			/>
			<InnerBlocks template={CONTEXT_TEMPLATE} templateLock="all" />
		</div>
	);
}
