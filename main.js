function generateBalls() {
  for (var i = 0; i < Math.floor(window.innerWidth / 20); i++) {
    $(".gooey-animations").append(`
        <div class="ball"></div>`);
    var colors = ["#28323B", "#FFA036"];
    $(".ball")
      .eq(i)
      .css({
        bottom: "0px",
        left: Math.random() * window.innerHeight - 100,
        "animation-delay": Math.random() * 5 + "s",
        transform: "translateY(" + Math.random() * 10 + "px)",
        "background-color": colors[i % 2],
      });
  }
}

generateBalls();

window.addEventListener("resize", function (e) {
  $(".gooey-animations .ball").remove();
  generateBalls();
});
