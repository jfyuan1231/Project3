$(function() {
	const category = $(".category");
	const loader = $(".newsLoader");

	category.change(function() {
		const name = $(".category").val();
		$.ajax({
			method: "GET",
			url: `https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=1CcWo6WoELzT0POH5FOthCwu2I71FMOW`
		})
			.done(function(data) {
				if (data.results === " ") {
					$(`<li>There is no results</li>`).appendTo(".stories");
				} else {
					$(".stories").empty();
					for (let i = 0; i < 12; i++) {
						const abstract = data.results[i].abstract;
						const shortUrl = data.results[i].short_url;
						const image = data.results[i].multimedia[4];

						$(
							`<li class="search-result" style="background-image: url(${image.url})"><a href="${shortUrl}"><figcaption>"${abstract}"</figcaption></li>`
						).appendTo(".stories");
					}
				}
			})
			.fail(function() {
				$(
					`<li class='search-result'><p>${"There was an error"}</p></li>`
				).appendTo(".stories");
			})
			.always(function() {
				loader.hide();
			});
	});
});
