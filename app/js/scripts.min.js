	fetch('https://gist.githubusercontent.com/Kirit0s/53a9820793c1cdf22a9bfb1b71dbc84d/raw/14c5ee2ff6f9fef5e5dbd19b93c28ec45be32791/db')
	.then(response => response.json())
	.then(data => {
		data.forEach((element, i) => {
			let blockToAdd = `<div class="films__item">
				<div class="films__date">
					<span>${element.dateStart}</span>
				</div>
				<div class="films__image">
					<div class="films__duration">
						<span>${element.durationMin} мин.</span>
					</div>
					<div class="films__ageLimit">
						<span>${element.ageLimit}</span>
					</div>
					<img src="${element.image}" alt="">
				</div>
				<div class="films__sbscribe">
					<div class="films__button">
						<span>подписаться</span>
					</div>
				</div>
			</div>`;
			
			if(i != 5) {
				console.log(i);
				document.querySelector('.films').innerHTML += blockToAdd;
			}
		})
	})

