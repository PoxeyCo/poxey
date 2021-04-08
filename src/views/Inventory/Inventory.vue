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
        <div class="inventory__listOfMatters__header__search">
          <input
            type="text"
            v-model="filterItem"
            placeholder="Поиск предмета..."
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
            v-for="item in search"
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
          <p style="font-weight: bold; font-size: 25px">Тут будут покемоны</p>
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
      filterItem: null,
      currentTub: "inventory",
    };
  },
  computed: {
    search() {
      if (this.filterItem)
        return this.items.filter(
          (item) =>
            item.title.toLowerCase().indexOf(this.filterItem.toLowerCase(), 0) >
            -1
        );
      else return this.items;
    },
  },
  methods: {
    selectTub(tub) {
      if (tub === "inventory") this.currentTub = "inventory";
      else this.currentTub = "pokemons";
    },
  },
  async mounted() {
    await fetch(
      `https://poxey.herokuapp.com/api/v1/items/character?id=${this.$store.state.character.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          data.items.forEach((item) => this.items.push(item));
        }
      });
  },
};
</script>
