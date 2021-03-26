<template>
  <div class="main-wrapper">
    <div class="content">
      <Traveling />
      <Live />
    </div>
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
import Traveling from "@/components/Traveling/Traveling";
import Live from "@/components/Live/Live";

export default {
  name: "Home",
  components: {
    DailyPrize,
    PokemonOfDay,
    Traveling,
    Live
  },
};
</script>
