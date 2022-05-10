(function ($) {
	function setActiveTab($el) {
		const tabId = $el.attr('data-tab-id');
		$el.siblings().removeClass(
			'single__tab--active'
		);
		$el.addClass(
			'single__tab--active'
		);
		$el.parent()
			.siblings('.wp-block-pbrocks-sample-blocks-single-tab')
			.each(function () {
				const $tab = $(this);
				if ($tab.attr('data-tab-id') === tabId) {
					$tab.css('display', 'block');
				} else {
					$tab.css('display', 'none');
				}
			});
	}

	$('.single__tab').click(
		function () {
			const $el = $(this);
			setActiveTab($el);
		}
	);

	$('.wp-block-pbrocks-sample-blocks-single-tab').each(
		function () {
			const $firstTab = $(this)
				.children()
				.first();
			if ($firstTab) {
				setActiveTab($firstTab);
			}
		}
	);
	$('.wp-block-pbrocks-sample-blocks-single-tab').first().css('display', 'block');
})(jQuery); // eslint-disable-line no-undef

