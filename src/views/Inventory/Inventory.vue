<template>
  <div class="inventory">
      <div class="inventory__equipmentItems">
          <div class="inventory__equipmentItems__item">
              <div class="inventory__equipmentItems__item__block"><img src="../../assets/images/inventory/plus.svg" alt=""></div>
              <p>Шлем</p>
          </div>
          <div class="inventory__equipmentItems__item">
              <div class="inventory__equipmentItems__item__block"><img src="../../assets/images/inventory/plus.svg" alt=""></div>
              <p>Грудь</p>
          </div>
          <div class="inventory__equipmentItems__item">
              <div class="inventory__equipmentItems__item__block"><img src="../../assets/images/inventory/plus.svg" alt=""></div>
              <p>Ботинки</p>
          </div>
          <div class="inventory__equipmentItems__item">
              <div class="inventory__equipmentItems__item__block"><img src="../../assets/images/inventory/plus.svg" alt=""></div>
              <p>Оружие</p>
          </div>
      </div>
      <div class="inventory__listOfMatters">
          <div class="inventory__listOfMatters__header">
              <div class="inventory__listOfMatters__header__name">Инвентарь</div>
              <div class="inventory__listOfMatters__header__search">
                  <input type="text" placeholder="Поиск предмета...">
                  <img src="../../assets/images/inventory/search.svg" alt="">
              </div>
          </div>
          <div class="inventory__listOfMatters__main">
              <div class="inventory__listOfMatters__main__matter">
                  <div class="inventory__listOfMatters__main__matter__name">
                      <p>Потертая шлапа</p>
                      <img src="../../assets/images/inventory/cork-hat.png" alt="">
                  </div>
                  <div class="inventory__listOfMatters__main__matter__power">
                      <p>Броня: <span>10</span></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import "./inventory.scss";


export default {
  name: "Inventory"
//   components: {

//   },
};
</script>