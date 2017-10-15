$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $("img.goldicon").animate({left: '0px'}, 1600);
  }
});

$('#rechts').on("click", function() {
  $("#fullscreen").toggleClass("yes");
});

$('#fullscreen').on("click", function() {
  $("#fullscreen").toggleClass("yes");
});
