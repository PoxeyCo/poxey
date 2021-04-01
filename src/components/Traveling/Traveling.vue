<template>
  <div class="traveling">
    <div class="traveling__header">
      <h1>Отправиться в приключение</h1>
    </div>
    <div class="traveling__st">
      <div class="traveling__st-chance">
        <p>Шанс успеха: 45%</p>
      </div>
      <div class="traveling__st-level">
        <p>Уровень: 2ур</p>
      </div>
    </div>
    <div class="traveling-wrapper">
      <p class="traveling-wrapper__title">Выбери своих покемонов:</p>
      <div class="traveling-wrapper__slider">
        <img
          class="arrow-left"
          data-side="left"
          src="../../assets/images/traveling/arrow.svg"
          alt="Arrow-left"
        />
        <div class="traveling-wrapper__slider-tape">
          <div class="slider-lenta">
            <div class="traveling-wrapper__slider-tape__item">
              <img src="../../assets/images/traveling/Herdier.png" alt="" />
            </div>
            <div class="traveling-wrapper__slider-tape__item check">
              <img src="../../assets/images/traveling/Gengar.png" alt="" />
              <p class="check-text">Выбран</p>
            </div>
            <div class="traveling-wrapper__slider-tape__item">
              <img src="../../assets/images/traveling/Herdier.png" alt="" />
            </div>
          </div>
        </div>
        <img
          class="arrow-right"
          data-side="right"
          src="../../assets/images/traveling/arrow.svg"
          alt="Arrow-right"
        />
      </div>
    </div>
    <div class="traveling-footer">
      <button type="submit">В путь</button>
    </div>
  </div>
</template>

<script>
import "./traveling.scss";
import slider from "@/utils/travalingSlider";

export default {
  name: "Traveling",
  mounted() {
    slider()
  }
};
</script>
