$("button").click(function() {
    let farenheit = Number($("input").val());
    let celsius = (farenheit - 32) * 5 / 9;
    $("#result").text("The Celsius is: " + celsius);
});