$('.main-body-accordion-li').on('click', selectTab);

function selectTab(event) {
	event.preventDefault()
	$('li').each(function() {
		$(this).removeClass('active-tab-li')
	});
	$(this).addClass('active-tab-li')
	selectContent(this.id)
};

function selectContent(id) {
	$('.main-body-accordion-tab').each(function() {
		$(this).removeClass('active-tab-content')
		if($(this)[0].id === id) {
			$(this).addClass('active-tab-content')
		}
	});
};

$('.menu-bar-close-button').on('click', toggleDropdown)

function toggleDropdown() {
	$('.menu-bar-input').toggleClass('hide');
	$('.menu-bar-navigation-links').toggleClass('hide');
}