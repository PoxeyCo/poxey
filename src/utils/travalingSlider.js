module.exports = function slider() {
  window.onload = () => {
    const arrowLeft = document.querySelector(".arrow-left"),
      arrowRight = document.querySelector(".arrow-right");
    const sliderLenta = document.querySelector(".slider-lenta");
    const sliderWrapper = document.querySelector(
      ".traveling-wrapper__slider-tape"
    ).offsetWidth;
    let count = 0;

    // console.log("Ширина области просмотра = " + sliderWrapper);
    // console.log("Ширина ленты = " + sliderLenta.clientWidth);

    const changeSlide = (event) => {
      const arrow = event.target.dataset.side;
      sliderLenta.style.transition = ".5s all";
      if (arrow === "right") {
        if (sliderWrapper * (count + 1) < sliderLenta.clientWidth) {
          count++;
          sliderLenta.style.transform = `translateX(${
            -sliderWrapper * count
          }px)`;
        }
      } else if (arrow === "left") {
        if (sliderWrapper * count > 0) {
          count--;
          sliderLenta.style.transform = `translateX(${-sliderWrapper * count}px)`;
        }
      }
    };

    arrowLeft.addEventListener("click", changeSlide);
    arrowRight.addEventListener("click", changeSlide);
  };
};
