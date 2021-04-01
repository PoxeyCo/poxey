module.exports = function slider() {
    const arrowLeft = document.querySelector(".arrow-left"),
        arrowRight = document.querySelector(".arrow-right");
    const sliderLenta = document.querySelector(".slider-lenta");
    const sliderItemWidth = document.querySelector(".traveling-wrapper__slider-tape__item");
    let offset = 1;

    const changeSlide = (event) => {
        const arrow = event.target.dataset.side;
        sliderLenta.style.transition = '.5s all';
        if (arrow === "left") {
            sliderLenta.style.transform = `translateX(${ sliderItemWidth.clientWidth * offset}px)`;
            offset++;
        }else if (arrow === "right"){
            sliderLenta.style.transform = `translateX(${ sliderItemWidth.clientWidth * -offset}px)`;
            offset--;
        }
        console.log(offset)
    }

    arrowLeft.addEventListener("click", changeSlide)
    arrowRight.addEventListener("click", changeSlide)
}