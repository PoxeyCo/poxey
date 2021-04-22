<template>
  <div class="daily-prize">
    <template v-if="!this.isCanTakeReward">
      <p class="daily-prize__title">Награда</p>
      <p class="daily-prize__timer">
        Возвращайся через: <span>{{ TimerPrize() }}</span>
      </p>
    </template>
    <p class="daily-prize__title" v-else>Награда готова</p>
    <div class="daily-prize__sup">
      <img
        v-if="this.isCanTakeReward && this.prize.type === 'stats'"
        src="../../assets/images/dailyPrize/coin.svg"
        alt="Coin"
      />
      <img
        v-if="this.isCanTakeReward && this.prize.type === 'pokemon'"
        src="../../assets/images/dailyPrize/coin.svg"
        alt="Coin"
      />
      <div class="daily-prize__sup-item"  v-if="this.isCanTakeReward && this.prize.type === 'item'">
        <p class="daily-prize__sup-item__title">
          {{ item.title }}
        </p>
        <img src="../../assets/images/inventory/fur-shirt.png" alt="" />
      </div>
      <img
        v-if="!this.isCanTakeReward"
        class="question"
        src="../../assets/images/dailyPrize/prize.svg"
        alt=""
      />
    </div>
    <p
      class="daily-prize__count"
      v-if="this.isCanTakeReward && this.prize.type === 'stats'"
    >
      x{{ this.prize.value.cash }}
    </p>
    <input
      class="daily-prize__btn"
      :disabled="this.isCanTakeReward === false"
      type="submit"
      value="Забрать"
      @click="getPrize"
    />
  </div>
</template>

<script>
import "./dailyPrize.scss";
import cookie from "vue-cookies";

export default {
  name: "DailyPrize",
  data() {
    return {
      timer: null,
      isCanTakeReward: false,
      millisecondsLeft: null,
      prize: {
        type: null,
        value: {},
      },
      pokemon: {},
      item: {},
    };
  },
  methods: {
    TimerPrize() {
      if (timeId) {
        clearInterval(timeId);
      }
      let timeId = setTimeout(() => {
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
    async getPrize() {
      await fetch("https://poxey.herokuapp.com/api/v1/prizes/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const userId = cookie.get("user_id") || this.$store.state.account.id;
          this.$store.dispatch("authorization", userId);
          this.isCanTakeReward = false;
        });
    },
  },
  mounted: async function () {
    const requestPrize = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie.get("access_token")}`,
      },
    };
    await fetch("https://poxey.herokuapp.com/api/v1/prizes/next", requestPrize)
      .then((res) => res.json())
      .then(async (data) => {
        this.isCanTakeReward = data.isCanTakeReward;
        this.millisecondsLeft = data.millisecondsLeft;
        this.prize.value = data.prize.value;
        this.prize.type = data.prize.type;
        this.timer = 86400000 - data.millisecondsLeft;

        if (data.prize.type === "item") {
          await fetch(
            `https://poxey.herokuapp.com/api/v1/items/${data.prize.value.itemId}`
          )
            .then((res) => res.json())
            .then((data) => (this.item = data.item));
        }
      });
  },
};
</script>
