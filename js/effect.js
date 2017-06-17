TweenMax.from("#self", 1, {
    opacity: 0,
    rotation: 360,
    scale: 0,
    left: -1040,
    ease: Back.easeOut
});
TweenMax.to("#self", 1, {
    borderRadius: "50%",
    delay: 0.9
});
TweenMax.from("#self-text", 1, {
    opacity: 0,
    delay: 1.2
});

$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});
