<template>
  <div class="SignIn">
    <img class="SignIn__logo" src="../../assets/images/auth/logo.png" alt="">
    <div class="SignIn__main">
      <img class="SignIn__main__poke" src="../../assets/images/auth/pokemon1.png" alt="">
      <div class="SignIn__main__formSign">
        <div class="SignIn__main__formSign__title">Авторизация</div>
        <div class="SignIn__main__formSign__form" :class="{ wrong: wrong_name }" id="name">
          <label>Ваш никнейм</label>
          <label class="wrong">Ваш Никнейм занят</label>
          <div class="SignIn__main__formSign__form__input">
            <img src="../../assets/images/auth/internet.svg" alt="">
            <input type="text" placeholder="Введите ваш никнейм или почту" v-model="name">
          </div>
        </div>
        <div class="SignIn__main__formSign__form last-form" :class="{ wrong: wrong_password }" id="password">
          <label>Ваш пароль</label>
          <label class="wrong">Ваш Никнейм занят</label>
          <div class="SignIn__main__formSign__form__input">
            <img src="../../assets/images/auth/lock.svg" alt="">
            <input type="password" placeholder="Введите ваш пароль" v-model="password">
            <img class="SignIn__main__formSign__form__input__eye" @click="eye('eye-pas1')" id="eye-pas1" src="../../assets/images/auth/close-eye.svg" alt="">
          </div>
        </div>
        <div class="SignIn__main__formSign__forgetPas">Забыли пароль!</div>
        <div class="SignIn__main__formSign__btn">ВОЙТИ</div>
        <p class="SignIn__main__formSign__btnSignUp">Еще не аккаунта? 
          <router-link to="/registration">Зарегестрируйся!</router-link>
        </p>
      </div>
      <img class="SignIn__main__poke" src="../../assets/images/auth/pokemon2.png" alt="">
    </div>
    <div class="SignIn__footer">© 2021 Poxey Team. All rights reserved.</div>
  </div>
</template>
<script>
import './signin.scss'

export default {
  name: 'SignIn',
  data () {
    return {
      wrong_name: false,
      wrong_password: false,
      name: '',
      password: ''
    }
  },
  methods: {
    eye (id) {
      let eye = document.querySelector(`#${id}`)
      let input = eye.parentElement.querySelector('input')
      if (eye.src.includes('close-eye')) {
        input.type = 'text'
        eye.src = '/img/open-eye.a01796a4.svg'
      } else {
        input.type = 'password'
        eye.src = 'img/close-eye.1101bd03.svg'
      }
    }
  }
};
</script>
