import { useBlockProps } from '@wordpress/block-editor'

import './swiper-frontend'

/**
 * External dependencies
 */
export default function save({ attributes }) {
	const {
		images,
		autoHeight,
		slidesPerView,
		spaceBetween,
		speed,
		grabCursor,
		loop,
		navigation,
		pagination,
		bulletClickable,
		autoplay,
		autoplayDelay,
		thumbs,
		thumbsPerView,
		thumbSpaceBetween,
	} = attributes;

	if (!images.length) {
		return <div />;
	}
	const blockPropsSave = useBlockProps.save();

	return (
		<div {...blockPropsSave}>
			<div
				class="swiper-container"
				data-auto-height={autoHeight}
				data-slides-per-view={slidesPerView}
				data-space-between={spaceBetween}
				data-speed={speed}
				data-grab-cursor={grabCursor}
				data-loop={loop}
				data-autoplay={autoplay}
				data-autoplay-delay={autoplayDelay}
				data-thumbs={thumbs}
				data-thumbs-per-view={thumbsPerView}
				data-thumb-space={thumbSpaceBetween}
				data-navigation={navigation}
				data-pagination={pagination}
				data-bullet-clickable={bulletClickable}
			>
				<div class="swiper-wrapper">
					{images.map((image) => (
						<div class="swiper-slide">
							<img src={image.url} alt={image.alt} />
						</div>
					))}
				</div>
				{pagination && <div class="swiper-pagination"></div>}
				{navigation && (
					<>
						<div class="swiper-button-prev"></div>
						<div class="swiper-button-next"></div>
					</>
				)}
			</div>
		</div>
	);
}
