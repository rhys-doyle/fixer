var clicks = 0;

$(".menuToggle").click(function() {
  if (clicks == 0) {
    $(".topMenu").slideToggle();
    $(".leftHeader").animate({ opacity: "0" });
    clicks = clicks + 1;
  } else {
    $(".topMenu").slideToggle();
    $(".leftHeader").animate({ opacity: "1" });
    clicks = 0;
  }
});
