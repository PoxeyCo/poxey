<template>
  <div class="pokemonOfDay">
    <img
      class="crown"
      src="../../assets/images/pokemonOfDay/crown.svg"
      alt="Crown"
    />
    <p class="pokemonOfDay-title">Покемон дня:</p>
    <div class="pokemonOfDay-block">
      <img
        src="../../assets/images/pokemonOfDay/pokemon.png"
        alt="pokemonOfDay"
      />
    </div>
    <div class="pokemonOfDay-statistic">
      <p class="pokemonOfDay-statistic__text category">
        <span class="black">Категория:</span> Shellfish
      </p>
      <p class="pokemonOfDay-statistic__text height">
        <span class="black">Рост:</span> 1.6м
      </p>
      <p class="pokemonOfDay-statistic__text weight">
        <span class="black">Вес:</span> 85.6кг
      </p>
      <p class="pokemonOfDay-statistic__text ability">
        <span class="black">Способности:</span> ливень, ... .
      </p>
    </div>
  </div>
</template>

<script>
import "./pokemonOfDay.scss";

export default {
  name: "PokemonOfDay",
};
</script>
