$(function() {
	const category = $('.category');
	const loader = $('.newsLoader');

	function getData(data) {
		if (data.results === ' ') {
			$(`<li>${'There is no results'}</li>`).appendTo('.stories');
		} else {
			$('.stories').empty();
			for (let i = 0; i < 12; i++) {
				const abstract = data.results[i].abstract;
				const shortUrl = data.results[i].short_url;
				const image = data.results[i].multimedia[4];

				$(
					`<li class="search-result" style="background-image: url(${image.url})"><a href="${shortUrl}"><figcaption>"${abstract}"</figcaption></li>`
				).appendTo('.stories');
			}
		}
	}

	function noData() {
		$(`<li class='search-result'><p>${'There was an error'}</p></li>`).appendTo(
			'.stories'
		);
	}

	function doneData() {
		loader.hide();
	}

	category.change(function(event) {
		event.preventDefault();
		const div = $('.top-header');
		const logo = $('.logo');
		const name = $('.category').val();
		const url = `https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=1CcWo6WoELzT0POH5FOthCwu2I71FMOW`;

		div.animate({ height: '5rem' }, 1000, function() {
			$(this).css('height', '3.5rem');
		});
		logo.animate({ height: '4.5rem' }, 1000, function() {
			$(this).css('height', '2rem');
		});

		$.ajax({
			method: 'GET',
			url: url,
			dataType: 'json',
			success: getData,
			error: noData,
			complete: doneData
		});
		loader.hide();
	});
});