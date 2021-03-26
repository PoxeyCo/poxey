<template>
  <div class="daily-prize">
    <p class="daily-prize__title">Твой приз</p>
    <p class="daily-prize__timer">Возвращайся через: 23:59:59</p>
    <div class="daily-prize__sup">
      <img src="../../assets/images/dailyPrize/coin.svg" alt="Coin" />
    </div>
    <p class="daily-prize__count">x100</p>
    <input class="daily-prize__btn" type="submit" value="Забрать" />
  </div>
</template>

<script>
import "./dailyPrize.scss";
export default {
  name: "DailyPrize",
};
</script>
