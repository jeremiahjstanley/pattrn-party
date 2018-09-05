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

$('button').on('click', showCode)

function showCode() {
	if (this.id === 'accordion-tabs-code') {
		$('.accordion-tab-codepen').replaceWith(`<p data-height="265" data-theme-id="0" data-slug-hash="WgEOjw" data-default-tab="html,result" data-user="jeremiahstanley" data-pen-title="Accordion Tabs" class="codepen">See the Pen <a href="https://codepen.io/jeremiahstanley/pen/WgEOjw/">Accordion Tabs</a> by Jeremiah Stanley (<a href="https://codepen.io/jeremiahstanley">@jeremiahstanley</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>`)
	} else if (this.id === 'flexible-cards-code') {
		$('.flexible-card-codepen').replaceWith(`<p data-height="265" data-theme-id="0" data-slug-hash="eLERee" data-default-tab="html,result" data-user="jeremiahstanley" data-pen-title="Flexible Cards" class="codepen">See the Pen <a href="https://codepen.io/jeremiahstanley/pen/eLERee/">Flexible Cards</a> by Jeremiah Stanley (<a href="https://codepen.io/jeremiahstanley">@jeremiahstanley</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>`)
	} else if (this.id === 'menu-bar-code') {
		$('.menu-bar-codepen').replaceWith(`<p data-height="265" data-theme-id="0" data-slug-hash="jvLLvv" data-default-tab="css,result" data-user="jeremiahstanley" data-pen-title="jvLLvv" class="codepen">See the Pen <a href="https://codepen.io/jeremiahstanley/pen/jvLLvv/">jvLLvv</a> by Jeremiah Stanley (<a href="https://codepen.io/jeremiahstanley">@jeremiahstanley</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>`)
	}
}