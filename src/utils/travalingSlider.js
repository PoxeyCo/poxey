module.exports = function slider() {
  const arrowLeft = document.querySelector(".arrow-left"),
    arrowRight = document.querySelector(".arrow-right");
  const sliderLenta = document.querySelector(".slider-lenta");
  const sliderWrapper = document.querySelector(
    ".traveling-wrapper__slider-tape"
  ).offsetWidth;
  const sliderLength = document.querySelectorAll(
    ".traveling-wrapper__slider-tape__item"
  ).length;
  let count = 0;
  console.log("Slider activated");
  const hideArrow = () => {
    if (count + 1 == sliderLength) {
      arrowRight.style.opacity = "0";
      arrowRight.style.pointerEvents = "none";
    } else {
      arrowRight.style.opacity = "1";
      arrowRight.style.pointerEvents = "initial";
    }

    if (count === 0) {
      arrowLeft.style.opacity = "0";
      arrowLeft.style.pointerEvents = "none";
    } else {
      arrowLeft.style.opacity = "1";
      arrowLeft.style.pointerEvents = "initial";
    }
  };
  // console.log("Ширина области просмотра = " + sliderWrapper);
  // console.log("Ширина ленты = " + sliderLenta.clientWidth);
  hideArrow();
  const changeSlide = (event) => {
    const arrow = event.target.dataset.side;
    sliderLenta.style.transition = ".5s all";
    if (arrow === "right") {
      if (sliderWrapper * (count + 1) < sliderLenta.clientWidth) {
        count++;
        sliderLenta.style.transform = `translateX(${-sliderWrapper * count}px)`;
        hideArrow();
      }
    } else if (arrow === "left") {
      if (sliderWrapper * count > 0) {
        count--;
        sliderLenta.style.transform = `translateX(${-sliderWrapper * count}px)`;
        hideArrow();
      }
    }
  };

  arrowLeft.addEventListener("click", changeSlide);
  arrowRight.addEventListener("click", changeSlide);
};
