(function ($) {
	function setActiveTab($el) {
		const tabId = $el.attr('data-tab-id');
		$el.siblings().removeClass(
			'single__tab--active'
		);
		$el.classList.add(
			'single__tab--active'
		);
		$el.parent()
			.siblings('.wp-block-pbrocks-sample-blocks-single-tab')
			.each(function () {
				const $tab = document.querySelector(this);
				if ($tab.attr('data-tab-id') === tabId) {
					$tab.css('display', 'block');
				} else {
					$tab.css('display', 'none');
				}
			});
	}

	document.querySelector('.single__tab').click(
		function () {
			const $el = document.querySelector(this);
			setActiveTab($el);
		}
	);

	document.querySelector('.single__tabs').each(
		function () {
			const $firstTab = document.querySelector(this)
				.children()
				.first();
			if ($firstTab) {
				setActiveTab($firstTab);
			}
		}
	);
})(jQuery); 
