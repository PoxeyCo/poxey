<template>
  <div class="traveling">
    <div class="traveling-loader" v-if="!isLoaded">
      <div class="lds-dual-ring"></div>
    </div>
    <div class="traveling-block" v-else>
      <div class="traveling__header">
        <h1 v-if="!isAdventure && isSuccessful.length === 0">
          Отправиться в приключение
        </h1>
        <h1 v-if="isAdventure">Приключение началось</h1>
        <h1 v-if="isSuccessful.length">Приключение закончилось</h1>
      </div>
      <div class="traveling__st">
        <div class="traveling__st-chance">
          <p>
            Шанс успеха:
            {{
              Math.ceil(
                ($store.state.character.power / this.levelPower) * 100,
                1
              )
            }}%
          </p>
        </div>
        <div class="traveling__st-level">
          <p>Уровень: {{ $store.state.character.lastLevelCompleted + 1 }}</p>
        </div>
      </div>
      <div
        class="traveling-wrapper"
        v-if="!isAdventure && !isSuccessful.length"
      >
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
                  @click="selectPokemon($event, pokemon._id)"
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
      <div
        class="traveling-wrapper start-adv"
        v-if="isAdventure && !isSuccessful.length"
      >
        <div class="start-adv__content">
          <img src="../../assets/images/traveling/loader-static.png" alt="" />
          <span>{{ Timer() }}</span>
        </div>
      </div>
      <div class="traveling-wrapper end-adv" v-if="isSuccessful.length">
        <p class="end-adv__res">
          Результат:
          <span
            :class="{
              green: isSuccessful === 'Успешно',
              red: isSuccessful === 'Провалено',
            }"
          >
            {{ this.isSuccessful }}
          </span>
        </p>
        <div class="items-adv" v-if="isSuccessful === 'Успешно'">
          <template v-if="droppedItems.length !== 0">
            <p class="end-adv__text">Выпавшие предметы:</p>
            <div
              class="items-adv__wrapper"
              :class="{
                scroll: droppedItems.length >= 3,
                one: droppedItems.length === 1,
              }"
            >
              <div
                class="items-adv__wrapper-item"
                v-for="(item, index) in droppedItems"
                :key="index"
              >
                <p class="items-adv__wrapper-item__title">{{ item.title }}</p>
                <p>Тут будет картинка</p>
                <p class="items-adv__wrapper-item__stat">
                  Сила: {{ item.power }}
                </p>
              </div>
            </div>
          </template>
          <p v-else>Увы, ничего не выпало</p>
        </div>
      </div>
      <div class="traveling-footer" v-if="!isAdventure && !isSuccessful.length">
        <div class="traveling-footer__count">
          <p>Выбрано покемонов: {{ selectedPokemonsId.length }}</p>
        </div>
        <button
          type="submit"
          @click="startAdventure"
          :disabled="selectedPokemonsId.length === 0"
        >
          В путь
        </button>
      </div>
      <div class="traveling-footer" v-if="isSuccessful.length">
        <button type="submit" @click="completeAdventure">Завершить</button>
      </div>
    </div>
  </div>
</template>

<script>
import "./traveling.scss";
import cookie from "vue-cookies";

import slider from "@/utils/travalingSlider";

export default {
  name: "Traveling",
  data() {
    return {
      isLoaded: false,
      isSuccessful: "",
      levelId: 0,
      levelPower: 0,
      pokemons: [],
      droppedItems: [],
      selectedPokemonsId: [],
      isAdventure: false,
      adventures: {},
      timer: null,
    };
  },
  methods: {
    Timer() {
      if (timeId) {
        clearInterval(timeId);
      }
      this.timer = new Date(this.adventures.endTime) - Date.now();
      let timeId = setInterval(() => {
        this.timer -= 1000;
      }, 1000);
      if (this.timer >= 0) {
        let hours = (
          "0" + String(Math.trunc(this.timer / 1000 / 60 / 60))
        ).slice(-2);
        let minutes = (
          "0" + String(Math.trunc((this.timer / 1000 / 60) % 60))
        ).slice(-2);
        let second = (
          "0" + String(Math.trunc(((this.timer / 1000) % 60) % 60))
        ).slice(-2);
        return `${hours}:${minutes}:${second}`;
      }
      return "00:00:00";
    },
    getDroppedItems() {
      this.adventures.droppedItems.forEach((item) => {
        fetch(`https://poxey.herokuapp.com/api/v1/items/${item}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.droppedItems.push(data.item);
          });
      });
    },
    selectPokemon(event, id) {
      if (
        this.selectedPokemonsId.filter((selectedId) => selectedId === id)
          .length === 0
      ) {
        if (this.selectedPokemonsId.length <= 2) {
          const target = event.target.closest(
            ".traveling-wrapper__slider-tape__item"
          );
          target.classList.add("check");
          this.selectedPokemonsId.push(id);
        }
      }
    },

    async startAdventure() {
      const requestBody = {
        levelId: this.levelId,
      };
      const requestParams = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
        },
        body: JSON.stringify(requestBody),
      };

      await fetch(
        "https://poxey.herokuapp.com/api/v1/adventures",
        requestParams
      )
        .then((res) => res.json())
        .then((data) => {
          this.isAdventure = true;
          this.adventures = data.adventure;
        });
    },

    async completeAdventure() {
      await fetch(
        `https://poxey.herokuapp.com/api/v1/adventures/${this.adventures._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.status) {
            this.isAdventure = false;
            this.isSuccessful = "";
            const userId =
              cookie.get("user_id") || this.$store.state.account.id;
            this.$store.dispatch("authorization", userId);
          }
        });
    },
  },
  async mounted() {
    await fetch(
      `https://poxey.herokuapp.com/api/v1/pokemons/character?id=${this.$store.state.character.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          data.pokemons.forEach((item) => {
            this.pokemons.push(item);
          });
        }
      });

    await fetch(
      `https://poxey.herokuapp.com/api/v1/levels/${this.$store.state.account.level}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          this.levelId = data.level._id;
          this.levelPower = data.level.power;
        }
      });

    await fetch("https://poxey.herokuapp.com/api/v1/adventures", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.status && data.adventure != null) {
          if (!data.adventure.isCompleted) {
            this.isAdventure = true;
          } else {
            this.isAdventure = false;
            this.isSuccessful = data.adventure.isSuccesful
              ? "Успешно"
              : "Провалено";
          }
          this.adventures = data.adventure;
          this.getDroppedItems();
        }
        this.isLoaded = true;
      });

    if (
      this.pokemons.length > 1 &&
      this.isSuccessful.length === 0 &&
      !this.isAdventure
    )
      slider();
  },
};
</script>
