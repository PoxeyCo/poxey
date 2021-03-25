<template>
  <div class="main-wrapper">
    <aside class="aside-home">
      <DailyPrize />
      <PokemonOfDay />
    </aside>
  </div>
</template>

<script>
import "./home.scss";

import DailyPrize from "@/components/DailyPrize/DailyPrize";
import PokemonOfDay from "@/components/PokemonOfDay/PokemonOfDay";

export default {
  name: "Home",
  components: {
    DailyPrize,
    PokemonOfDay,
  },
};
</script>
