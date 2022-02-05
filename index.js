function moveHeaderBackgroundSmoothly() {
  document.getElementById("header").style.backgroundPosition = `0px ${
    window.scrollY * 0.4
  }px`;
}
