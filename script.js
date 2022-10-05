let i = 0;

$("#submit").on("click", function () {
let input = $("input").val(); //cats

  fetchGif(input);
});

$.get(
  `https://api.giphy.com/v1/gifs/trending?api_key=IgCSbT6mSzd2MrSgNDyIZVXFXoVjuAE0`,
  function (gifs) {
    $(".gifs").append(`<iframe src="${gifs.data[0].embed_url}">`);
    $(".gifs").append(`<iframe src="${gifs.data[1].embed_url}">`);
    $(".gifs").append(`<iframe src="${gifs.data[2].embed_url}">`);
  }
);



fetchGif = function (input) {
  $.get(
    `https://api.giphy.com/v1/gifs/search?api_key=IgCSbT6mSzd2MrSgNDyIZVXFXoVjuAE0&q=${input}`,
    function (gifs) {
      // console.log(gifs.data[0].embed_url)

      $(".gifs").append(`<iframe src="${gifs.data[i].embed_url}">`);
      i++
      $(".gifs").append(`<iframe src="${gifs.data[i].embed_url}">`);
      i++;
      $(".gifs").append(`<iframe src="${gifs.data[i].embed_url}">`)
      i++
    }
    
  );
  
};


$(".gifs").onscroll(function () {
  fetchGif(input);
});