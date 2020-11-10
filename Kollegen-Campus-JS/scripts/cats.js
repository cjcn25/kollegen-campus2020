$.get("https://api.thecatapi.com/v1/images/search", function(data) {
    let url = data[0].url;
    $("img").attr("src", url);
});