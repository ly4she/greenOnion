$(function() {

	fetch('https://gist.githubusercontent.com/Kirit0s/53a9820793c1cdf22a9bfb1b71dbc84d/raw/14c5ee2ff6f9fef5e5dbd19b93c28ec45be32791/db')
	.then(response => response.json())
	.then(data => {
		data.forEach(element => {
			// const image = document.createElement('img'),
			// 			filmBlock = document.createElement('div'),
			// 			dateBlock = document.createElement('div'),
			// 			filmTitleBlock = document.createElement('div'),
			// 			sbscrBtn = document.createElement('div'),
			// 			ageLimitBlock = document.createElement('div'),
			// 			durationBlock = document.createElement('div'),
			// 			imageBlock = document.createElement('div');
			const filmBlockToAdd = $('.films__itemTemplate').clone().css('display', 'block').attr('class', 'films__item');
			filmBlockToAdd[0].childNodes[1].innerHTML = element.dateStart;
			filmBlockToAdd[0].childNodes[3].childNodes[1].innerHTML = element.durationMin + 'мин.';
			filmBlockToAdd[0].childNodes[3].childNodes[3].innerHTML = element.ageLimit;
			filmBlockToAdd[0].childNodes[3].childNodes[5].src = element.image;
			console.log(filmBlockToAdd[0].childNodes);
			$('.films').append(filmBlockToAdd);
		})
	})

});