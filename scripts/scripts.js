$('li').on('click', selectTab);

function selectTab(event) {
	event.preventDefault()
	let tab = $(this).children('a').name;
	console.log(tab)
}