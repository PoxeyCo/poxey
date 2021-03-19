<template>
  <div class="main">
    <aside class="aside">
      <router-link to="/" class="logo">
        <img src="../../assets/images/MainLayout/logo.svg" alt="Logo">
      </router-link>
      <nav class="nav">
        <ul class="nav-links">
          <li class="nav-links__item">
            <router-link to="#">Главная</router-link>
          </li>
          <li class="nav-links__item">
            <router-link to="#">Панель</router-link>
          </li>
          <li class="nav-links__item">
            <router-link to="#">Арена</router-link>
          </li>
          <li class="nav-links__item">
            <router-link to="#">Покедекс</router-link>
          </li>
        </ul>
      </nav>
      <div class="aside-footer">
        <p>© 2021 Poxey Team. All rights reserved.</p>
      </div>
    </aside>
    <div class="wrapper">
      <component :is="component"> </component>
    </div>
  </div>
</template>

<script>
import "./mainLayout.scss";

import Home from "@/views/Home/Home";

export default {
  name: "MainLayout",
  computed: {
    component() {
      return this.$route.meta.view || "Main";
    },
  },
  components: {
    Home,
  },
};
</script>
