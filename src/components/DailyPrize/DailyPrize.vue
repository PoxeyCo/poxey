<template>
  <div class="daily-prize">
    <p
      class="daily-prize__title"
      v-if="!$store.state.dailyPrize.isCanTakeReward"
    >
      Награда
    </p>
    <p class="daily-prize__title" v-else>Награда готова</p>
    <p class="daily-prize__timer">
      Возвращайся через: <span>{{ TimerPrize() }}</span>
    </p>
    <div class="daily-prize__sup">
      <img
        v-if="$store.state.dailyPrize.isCanTakeReward"
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
    <p
      class="daily-prize__count"
      v-if="$store.state.dailyPrize.isCanTakeReward"
    >
      x{{ $store.state.dailyPrize.prize.value.cash }}
    </p>
    <input
      class="daily-prize__btn"
      :disabled="$store.state.dailyPrize.isCanTakeReward === false"
      type="submit"
      value="Получить"
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
      if (this.timer > 0) {
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
      await fetch("http://poxey.herokuapp.com/api/v1/prizes/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          // const userId = cookie.get("user_id") || this.$store.state.account.id;
          // this.$store.dispatch("authorization", userId);
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

    await fetch("http://poxey.herokuapp.com/api/v1/prizes/next", requestPrize)
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
