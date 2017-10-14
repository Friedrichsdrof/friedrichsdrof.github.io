$(window).scroll(function() {
  if ($(window).scrollTop() > 1000) {
    $("img#asa").animate({bottom: '100px'}, 1600);
  }
});

$('#rechts').on("click", function() {
  $("#fullscreen").toggleClass("yes");
});

$('#fullscreen').on("click", function() {
  $("#fullscreen").toggleClass("yes");
});
