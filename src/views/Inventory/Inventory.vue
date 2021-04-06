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
        <div class="inventory__listOfMatters__header__name">Инвентарь</div>
        <div class="inventory__listOfMatters__header__search">
          <input type="text" v-model="filterItem" placeholder="Поиск предмета..." />
          <img src="../../assets/images/inventory/search.svg" alt="" />
        </div>
      </div>
      <div class="inventory__listOfMatters__main">
        <div class="inventory__listOfMatters__main__wrap">
          <div class="inventory__listOfMatters__main__wrap__matter" v-for="item in search" :key="item._id">
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
    };
  },
  computed: {
      search() {
        if(this.filterItem) return this.items.filter(item => item.title.toLowerCase().indexOf(this.filterItem.toLowerCase(), 0) > -1);
        else return this.items;
      }
  },
  mounted: function () {
    this.$store.state.character.items.forEach(async (item) => {
      await fetch(`https://poxey.herokuapp.com/api/v1/items/${item}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status) this.items.push(data.item);
        });
    });
  },
};
</script>
