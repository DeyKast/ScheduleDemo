function isMobile() {
  return window.innerWidth < 1024;
}

if (!isMobile()) {
  document.addEventListener("mousemove", function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var scaleFactorMouse = 0.05;

    var rightShapes = document.querySelectorAll(".parallaxCircle");

    rightShapes.forEach(function (shape) {
      var translateX = mouseX * scaleFactorMouse;
      var translateY = mouseY * scaleFactorMouse;
      shape.style.transform =
        "translate(" + translateX + "px, " + translateY + "px)";
    });
  });
} else {
  document.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    const scaleFactorScroll = -0.5;
    const phoneScaleFactorScroll = 0.25;

    const rightShapes = document.querySelectorAll(".parallaxCircle");
    const phoneBox = document.querySelector(".phoneSwiper");

    const scaleValue =
      1 - (scrollY * phoneScaleFactorScroll) / window.innerHeight;
    if (scaleValue < 0) scaleValue = 0;

    const scaleTransform = "scale(" + scaleValue + ")";
    phoneBox.style.transform = scaleTransform;

    rightShapes.forEach(function (shape) {
      const scrollTransform =
        "translateY(" + scrollY * scaleFactorScroll + "px)";
      shape.style.transform = scrollTransform;
    });
  });
}
