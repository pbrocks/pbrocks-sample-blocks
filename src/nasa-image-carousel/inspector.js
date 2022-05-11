import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	SelectControl,
} from "@wordpress/components";

export default function Inspector({ attributes, setAttributes }) {
	const {
		slidesPerView,
		spaceBetween,
		speed,
		loop,
		navigation,
		pagination,
		bulletClickable,
	} = attributes;

	return (
		<InspectorControls key="controls">
			<PanelBody>
				<ToggleControl
					label={__('Loop', 'pbrocks-sample-blocks')}
					checked={loop}
					onChange={() => setAttributes({ loop: !loop })}
				/>

				<p style={{ textAlign: "right" }}>
					<em>*</em> (Currently only on frontend)
				</p>

				<ToggleControl
					label={__('Navigation *', 'pbrocks-sample-blocks')}
					checked={navigation}
					onChange={() => setAttributes({ navigation: !navigation })}
				/>

				<ToggleControl
					label={__('Pagination *', 'pbrocks-sample-blocks')}
					checked={pagination}
					onChange={() => setAttributes({ pagination: !pagination })}
				/>

				{pagination && (
					<ToggleControl
						label={__('Bullet Clickable *', 'pbrocks-sample-blocks')}
						checked={bulletClickable}
						onChange={() =>
							setAttributes({ bulletClickable: !bulletClickable })
						}
					/>
				)}

				<RangeControl
					label={__('Slider Per View', 'pbrocks-sample-blocks')}
					value={slidesPerView}
					min={1}
					max={10}
					onChange={(slidesPerView) => setAttributes({ slidesPerView })}
				/>

				<RangeControl
					label={__('Space Between Images', 'pbrocks-sample-blocks')}
					value={spaceBetween}
					min={1}
					max={100}
					onChange={(spaceBetween) => setAttributes({ spaceBetween })}
				/>

				<RangeControl
					label={__('Speed', 'pbrocks-sample-blocks')}
					value={speed}
					min={1}
					max={1000}
					onChange={(speed) => setAttributes({ speed })}
				/>
			</PanelBody>
		</InspectorControls>
	);
}
