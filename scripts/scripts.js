$('li').on('click', selectTab);

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