
// $(function () {
// $.ajax({
//     method: 'GET',
//     url: 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=1CcWo6WoELzT0POH5FOthCwu2I71FMOW'
// }).done(function() {
    
//     dataType: "jsonp",

//     success: function(data) {
//         if (data.results === " ") {
//             $(`<li>It's Error</li>`).appendTo(".album-list")
//         } else {
//             for (let i = 0; i < 6; i++) {
//                 const select = `list-${data.results[i].artistName}`;

//                 $(`<li class='${select}'><img src="${data.results[i].artworkUrl60}" /><p>${data.results[i]["collectionName"]}</p><p>${data.results[i]["artistName"]}</p></li>`).appendTo(".album-list").hide().slideDown("fast");
//             }
//         }
//     }
//     error: function () {
//         alert("Oh noooo!")
//     }
//     complete: function () {
//         $("#artist-name").val("");

//     }
// })
// });


