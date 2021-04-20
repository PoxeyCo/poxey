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
        v-if="this.isCanTakeReward"
        src="../../assets/images/dailyPrize/coin.svg"
        alt="Coin"
      />
      <img
        v-else
        class="question"
        src="../../assets/images/dailyPrize/prize.svg"
        alt=""
      />
    </div>
    <p class="daily-prize__count" v-if="this.isCanTakeReward">
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
  async mounted() {
    const requestPrize = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie.get("access_token")}`,
      },
    };
    await fetch("https://poxey.herokuapp.com/api/v1/prizes/next", requestPrize)
      .then((res) => res.json())
      .then((data) => {
        this.isCanTakeReward = data.isCanTakeReward;
        this.millisecondsLeft = data.millisecondsLeft;
        this.prize.value = data.prize.value;
        this.prize.type = data.prize.type;
        this.timer = 86400000 - data.millisecondsLeft;
      });
  },
};
</script>
