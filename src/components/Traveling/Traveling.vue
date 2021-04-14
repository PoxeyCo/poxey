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
              v-for="pokemon in pokemons" 
              :key="pokemon._id" 
              class="traveling-wrapper__slider-tape__item"
            >
              <img
                :src="`${pokemon.sprite}`"
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
      <div class="traveling-footer__count">
        <p>Выбрано покемонов: {{ selectedPokemons.length }}</p>
      </div>
      <button type="submit" :disabled="selectedPokemons.length === 0">
        В путь
      </button>
    </div>
  </div>
</template>

<script>
import "./traveling.scss";
import slider from "@/utils/travalingSlider";

export default {
  name: "Traveling",
  data() {
    return {
      pokemons: [],
      selectedPokemons: [],
    };
  },
  methods: {
    selectPokemon(event) {
      if (this.selectedPokemons.length <= 2) {
        const target = event.target.closest(
          ".traveling-wrapper__slider-tape__item"
        );
        target.classList.add("check");
        this.selectedPokemons.push("pokemon");
      }
    },
  },
  async mounted() {
    await fetch(
      `https://poxey.herokuapp.com/api/v1/pokemons/character?id=${this.$store.state.character.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          data.pokemons.forEach((item) => {
            this.pokemons.push(item);
            slider();
          })
        }
      });
  },
};
</script>
