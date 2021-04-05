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
      <p class="traveling-wrapper__title">Выбери 3-x покемонов:</p>
      <div class="traveling-wrapper__slider">
        <img
          class="arrow-left"
          data-side="left"
          src="../../assets/images/traveling/arrow.svg"
          alt="Arrow-left"
        />
        <div class="traveling-wrapper__slider-tape">
          <div class="slider-lenta">
            <div
              class="traveling-wrapper__slider-tape__item"
              @click="selectPokemon"
            >
              <img
                src="../../assets/images/traveling/Herdier.png"
                @click="selectPokemon"
                alt=""
              />
              <p class="check-text">Выбран</p>
            </div>
            <div class="traveling-wrapper__slider-tape__item">
              <img
                src="../../assets/images/traveling/Gengar.png"
                @click="selectPokemon"
                alt=""
              />
              <p class="check-text">Выбран</p>
            </div>
            <div class="traveling-wrapper__slider-tape__item">
              <img
                src="../../assets/images/traveling/Herdier.png"
                @click="selectPokemon"
                alt=""
              />
              <p class="check-text">Выбран</p>
            </div>
            <div class="traveling-wrapper__slider-tape__item">
              <img
                src="../../assets/images/traveling/Gengar.png"
                @click="selectPokemon"
                alt=""
              />
              <p class="check-text">Выбран</p>
            </div>
            <div class="traveling-wrapper__slider-tape__item">
              <img
                src="../../assets/images/traveling/Herdier.png"
                @click="selectPokemon"
                alt=""
              />
              <p class="check-text">Выбран</p>
            </div>
            <div class="traveling-wrapper__slider-tape__item">
              <img
                src="../../assets/images/traveling/Gengar.png"
                @click="selectPokemon"
                alt=""
              />
              <p class="check-text">Выбран</p>
            </div>
            <div class="traveling-wrapper__slider-tape__item">
              <img
                src="../../assets/images/traveling/Gengar.png"
                @click="selectPokemon"
                alt=""
              />
              <p class="check-text">Выбран</p>
            </div>
            <div class="traveling-wrapper__slider-tape__item">
              <img
                src="../../assets/images/traveling/Herdier.png"
                @click="selectPokemon"
                alt=""
              />
              <p class="check-text">Выбран</p>
            </div>
            <div class="traveling-wrapper__slider-tape__item">
              <img
                src="../../assets/images/traveling/Gengar.png"
                @click="selectPokemon"
                alt=""
              />
              <p class="check-text">Выбран</p>
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
  methods: {
    selectPokemon(event) {
      const target = event.target.closest(
        ".traveling-wrapper__slider-tape__item"
      );
      target.classList.add("check");
    },
  },
  mounted() {
    slider()
  },
};
</script>
