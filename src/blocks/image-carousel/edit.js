/*
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	BlockControls,
	MediaPlaceholder,
	MediaUpload,
	useBlockProps,
	useInnerBlocksProps
} from "@wordpress/block-editor";
import { Toolbar, Button } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";

/*
 * External dependencies
 */
import SwiperCore, { A11y, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.scss";
import "./swiper.scss";

SwiperCore.use([A11y, Thumbs]);

/*
 * Internal dependencies
 */
import Inspector from "./inspector";
import "./editor.scss";

export default function Edit({
	isSelected,
	clientId,
	attributes,
	setAttributes,
}) {
	const {
		autoplay,
		images,
		autoHeight,
		slidesPerView,
		spaceBetween,
		speed,
		vertical,
		loop,
	} = attributes;

	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps, {});


	const [swiper, setSwiper] = useState(null);
	const [options, setOptions] = useState({});

	useEffect(() => {
		let options = {};

		options.autoHeight = autoHeight;
		options.slidesPerView = slidesPerView;
		options.speed = speed;
		options.spaceBetween = spaceBetween;
		options.loop = loop;

		setOptions(options);
	}, [autoHeight, slidesPerView, spaceBetween, speed, vertical, loop]);

	const onImageSelect = (images) => {
		let updatedImages = [];

		images.map((image) => {
			updatedImages = [
				...updatedImages,
				{ url: image.url, alt: image.alt, id: image.id },
			];
		});

		setAttributes({ images: updatedImages });
	};

	const onSwiperClick = () => {
		wp.data.dispatch("core/block-editor").selectBlock(clientId);
	};

	if (images.length === 0) {
		return (
			<MediaPlaceholder
				labels={{
					title: __('Images', 'pbrocks-sample-blocks'),
					instructions: __(
						'Drag images, upload new ones or select files from your library.', 'pbrocks-sample-blocks'
					),
				}}
				onSelect={(images) => onImageSelect(images)}
				accept="image/*"
				allowedTypes={["image"]}
				multiple
				value={images}
			/>
		);
	}

	return [
		isSelected && (
			<Inspector attributes={attributes} setAttributes={setAttributes} />
		),
		<BlockControls>
			<Toolbar>
				<MediaUpload
					onSelect={(images) => onImageSelect(images)}
					allowedTypes={["image"]}
					multiple
					gallery
					value={images.map((img) => img.id)}
					render={({ open }) => (
						<Button
							className="components-toolbar__control"
							label={__('Edit gallery', 'pbrocks-sample-blocks')}
							icon="edit"
							onClick={open}
						/>
					)}
				/>
			</Toolbar>
		</BlockControls>,

		<div {...innerBlocksProps}>
			<Swiper
				{...options}
				onSwiper={setSwiper}
				onClick={() => onSwiperClick()}
				onSlideChange={() => console.log("slide change")}
			>
				{images.map((image) => (
					<SwiperSlide>
						<img src={image.url} alt={image.alt} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>,
	];
}
