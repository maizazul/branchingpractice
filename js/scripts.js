$(function() {
  var heightfeet = parseInt(prompt("How tall are you in feet?"));

    if (heightfeet >= 4) {
    $("#adultrides").addClass("highlightadult");
  }
    else {
    $("#kiddyrides").addClass("highlightkiddy");
  }
});
