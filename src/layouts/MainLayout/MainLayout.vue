<template>
  <div class="main">
    <aside class="aside">
      <router-link to="/" class="logo">
        <img src="../../assets/images/MainLayout/logo.svg" alt="Logo" />
      </router-link>
      <nav class="nav">
        <ul class="nav-links">
          <li class="nav-links__item">
            <router-link to="/" class="active">Главная</router-link>
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
      <header class="header">
        <div class="header-level">
          <p class="header-level__num from">5ур.</p>
          <div class="header-level__bar">
            <span class="progress"></span>
          </div>
          <p class="header-level__num to">6ур.</p>
        </div>
        <div class="header-user">
          <div class="header-user__avatar">
            <img src="../../assets/images/header/avatar.png" alt="Your photo" />
          </div>
          <div class="header-user__block">
            <p class="header-user__block-nickname">TankistPro</p>
            <p class="header-user__block-balance">
              Баланс: <span class="gold">7500</span>
            </p>
          </div>
          <div
            class="arrow"
            :class="{ open: openUserDropDown }"
            @click="openUserDropDown = !openUserDropDown"
          >
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4949 0.465522C17.175 0.167358 16.7422 0 16.2911 0C15.84 0 15.4072 0.167358 15.0873 0.465522L8.95731 6.13261L2.91269 0.465522C2.59276 0.167358 2.15999 0 1.70888 0C1.25778 0 0.825007 0.167358 0.505082 0.465522C0.345039 0.614344 0.218008 0.791402 0.13132 0.986483C0.0446312 1.18156 0 1.39081 0 1.60214C0 1.81348 0.0446312 2.02272 0.13132 2.2178C0.218008 2.41288 0.345039 2.58994 0.505082 2.73876L7.74497 9.52646C7.90371 9.67651 8.09256 9.79561 8.30064 9.87688C8.50872 9.95816 8.7319 10 8.95731 10C9.18272 10 9.40591 9.95816 9.61398 9.87688C9.82206 9.79561 10.0109 9.67651 10.1697 9.52646L17.4949 2.73876C17.655 2.58994 17.782 2.41288 17.8687 2.2178C17.9554 2.02272 18 1.81348 18 1.60214C18 1.39081 17.9554 1.18156 17.8687 0.986483C17.782 0.791402 17.655 0.614344 17.4949 0.465522Z"
                fill="#2A767E"
              />
            </svg>
          </div>
          <div class="user__dropDown" :class="{ openMenu: openUserDropDown }">
            <ul>
              <li class="user__dropDown-item"><a href="#">Профиль</a></li>
              <li class="user__dropDown-item"><a href="#">Инвентарь</a></li>
              <li class="user__dropDown-item exit"><a href="#">Выйти</a></li>
            </ul>
          </div>
        </div>
      </header>
      <component :is="component"></component>
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
  data() {
    return {
      openUserDropDown: false,
    };
  },
  mounted() {
    const navLinks = document.querySelectorAll(".nav-links__item a");
    const clearActive = (current) => {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      current.classList.add("active");
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        clearActive(link);
      });
    });
  },
};
</script>
