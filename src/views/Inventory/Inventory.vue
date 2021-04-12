<template>
  <div class="inventory">
    <div class="inventory__equipmentItems">
      <div class="inventory__equipmentItems__item">
        <div class="inventory__equipmentItems__item__block">
          <img src="../../assets/images/inventory/plus.svg" alt="" />
        </div>
        <p>Шлем</p>
      </div>
      <div class="inventory__equipmentItems__item">
        <div class="inventory__equipmentItems__item__block">
          <img src="../../assets/images/inventory/plus.svg" alt="" />
        </div>
        <p>Грудь</p>
      </div>
      <div class="inventory__equipmentItems__item">
        <div class="inventory__equipmentItems__item__block">
          <img src="../../assets/images/inventory/plus.svg" alt="" />
        </div>
        <p>Ботинки</p>
      </div>
      <div class="inventory__equipmentItems__item">
        <div class="inventory__equipmentItems__item__block">
          <img src="../../assets/images/inventory/plus.svg" alt="" />
        </div>
        <p>Оружие</p>
      </div>
    </div>
    <div class="inventory__listOfMatters">
      <div class="inventory__listOfMatters__header">
        <div class="inventory__listOfMatters__header-tub">
          <div
            class="inventory__listOfMatters__header__name"
            :class="{ active: currentTub === 'inventory' }"
            @click="selectTub('inventory')"
          >
            Инвентарь
          </div>
          <div
            class="inventory__listOfMatters__header__name"
            :class="{ active: currentTub === 'pokemons' }"
            @click="selectTub('pokemons')"
          >
            Покемоны
          </div>
        </div>
        <div v-if="currentTub === 'inventory'" class="inventory__listOfMatters__header__search">
          <input
            type="text"
            v-model="filterItem"
            placeholder="Поиск предмета..."
          />
          <img src="../../assets/images/inventory/search.svg" alt="" />
        </div>
        <div v-if="currentTub === 'pokemons'" class="inventory__listOfMatters__header__search">
          <input
            type="text"
            v-model="filterPokemons"
            placeholder="Поиск покемона..."
          />
          <img src="../../assets/images/inventory/search.svg" alt="" />
        </div>
      </div>
      <div class="inventory__listOfMatters__main">
        <div
          class="inventory__listOfMatters__main__wrap"
          v-if="currentTub === 'inventory'"
        >
          <div
            class="inventory__listOfMatters__main__wrap__matter"
            v-for="item in searchInventory"
            :key="item._id"
          >
            <div class="inventory__listOfMatters__main__wrap__matter__name">
              <p>{{ item.title }}</p>
              <img src="../../assets/images/inventory/cork-hat.png" alt="" />
            </div>
            <div class="inventory__listOfMatters__main__wrap__matter__power">
              <p>
                Броня: <span>{{ item.power }}</span>
              </p>
            </div>
          </div>
        </div>
        <div
          class="inventory__listOfMatters__main__wrap"
          v-if="currentTub === 'pokemons'"
        >
          <div
            class="inventory__listOfMatters__main__wrap__matter pokemon"
            v-for="pokemon in searchPokemons"
            :key="pokemon._id"
          >
            <div class="inventory__listOfMatters__main__wrap__matter__name">
              <div class="inventory__listOfMatters__main__wrap__matter__name-block">
                <p>{{ pokemon.name }}</p> 
                <div class="health-block">
                  <img class="name-image" src="../../assets/images/inventory/heart.svg" alt="health">
                  <p class="health-text">{{ pokemon.stats.hp }}</p>
                </div>
              </div>
              <img class="pokemon-images" :src="`${ pokemon.sprite }`" alt="" />
            </div>
            <div class="inventory__listOfMatters__main__wrap__matter__power">
              <p>
                Сила: <span>{{ pokemon.power }}</span>
              </p>
              <p>
                Атака: <span>{{ pokemon.stats.attack }}</span>
              </p>
              <p>
                Скорость: <span>{{ pokemon.stats.speed }}</span>
              </p>
              <p>
                Защита: <span>{{ pokemon.stats.defense }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./inventory.scss";

export default {
  name: "Inventory",
  data() {
    return {
      items: [],
      pokemons: [],
      filterItem: null,
      filterPokemons: null,
      currentTub: "inventory",
    };
  },
  computed: {
    searchInventory() {
      if (this.filterItem)
        return this.items.filter(
          (item) =>
            item.title.toLowerCase().indexOf(this.filterItem.toLowerCase(), 0) >
            -1
        );
      else return this.items;
    },
    searchPokemons() {
      if(this.filterPokemons) {
        return this.pokemons.filter(
          (pokemon) => 
          pokemon.name.toLowerCase().indexOf(this.filterPokemons.toLowerCase(), 0) > -1);
      } else return this.pokemons;
    }
  },
  methods: {
    selectTub(tub) {
      this.currentTub = tub;
    },
  },
  async mounted() {
    await fetch(
      `https://poxey.herokuapp.com/api/v1/items/character?id=${this.$store.state.character.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          data.items.forEach((item) => this.items.push(item));
        }
      });

      await fetch(`http://poxey.herokuapp.com/api/v1/pokemons/character?id=${this.$store.state.character.id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.status) {
            data.pokemons.forEach(pokemon => this.pokemons.push(pokemon))
          }
        })
  },
};
</script>
