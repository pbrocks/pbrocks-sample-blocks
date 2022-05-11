/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import {
	BlockControls,
	InspectorControls,
	MediaPlaceholder,
	MediaUpload,
	useBlockProps,
	useInnerBlocksProps
} from "@wordpress/block-editor";

import {
	Button,
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
	Toolbar,
} from "@wordpress/components";

/**
 * External dependencies
 */
import SwiperCore, { A11y, Thumbs, Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([A11y, Thumbs, Autoplay, Pagination, Navigation]);

/*
 * Internal dependencies
 */
import Inspector from "./inspector";
import "./editor.scss";
import "./swiper.scss";

export default function Edit({
	isSelected,
	clientId,
	attributes,
	setAttributes,
}) {
	const {
		align,
		autoplay,
		autoplayDelay,
		images,
		loop,
		navigation,
		pagination,
		slidesPerView,
		spaceBetween,
		speed,
	} = attributes;

	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps, {});


	const [swiper, setSwiper] = useState(null);
	const [options, setOptions] = useState({});
	// const [options, setOptions] = useState({});

	useEffect(() => {
		let options = {};
		options.navigation = navigation;
		options.pagination = pagination;
		options.slidesPerView = slidesPerView;
		options.speed = speed;
		options.spaceBetween = spaceBetween;
		options.loop = loop;

		setOptions(options);
	}, [
		autoplay,
		images,
		loop,
		navigation,
		pagination,
		slidesPerView,
		spaceBetween,
		speed,
	]);

	const onImageSelect = (images) => {
		let updatedImages = [];

		images.map((image) => {
			updatedImages = [
				...updatedImages, {
					url: image.url,
					alt: image.alt,
					id: image.id,
					key: image.id
				},
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

	const ImageAlignControl = () => {
		return (
			<SelectControl
				label="Alignment"
				value={align}
				options={[
					{ label: 'Centered', value: 'center' },
					{ label: 'Wide width', value: 'wide' },
					{ label: 'Full width', value: 'full' },
				]}
				onChange={(align) => setAttributes({ align })}
			/>
		);
	};

	return [
		isSelected && (
			<>
				<InspectorControls>
					<PanelBody>

						<ImageAlignControl />

						<ToggleControl
							label={__('Autoplay', 'pbrocks-sample-blocks')}
							checked={autoplay}
							onChange={() => setAttributes({ autoplay: !autoplay })}
						/>

						{autoplay && (
							<RangeControl
								label={__('Autoplay Delay', 'pbrocks-sample-blocks')}
								value={autoplayDelay}
								min={1}
								max={5000}
								onChange={(autoplayDelay) => setAttributes({ autoplayDelay })}
							/>
						)}

					</PanelBody>
				</InspectorControls>

				<Inspector attributes={attributes} setAttributes={setAttributes} />
			</>
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
			{!autoplay && <Swiper
				{...options}
				className="slides-startup"
				spaceBetween={20}
				onSwiper={setSwiper}
				onClick={() => onSwiperClick()}
			>
				{images.map((image) => (
					<SwiperSlide
						key={image.id}
					>
						<img src={image.url} alt={image.alt} />
					</SwiperSlide>
				))}
			</Swiper>}

			{autoplay && <Swiper
				{...options}
				className="slides-startup"
				spaceBetween={20}
				pagination={{
					clickable: true
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				navigation={true}
				onSwiper={setSwiper}
				onClick={() => onSwiperClick()}
			>
				{images.map((image) => (
					<SwiperSlide
						key={image.id}
					>
						<img src={image.url} alt={image.alt} />
					</SwiperSlide>
				))}
			</Swiper>}
			{console.log('options from')}
			{console.table(options)}
		</div>,
	];
}
