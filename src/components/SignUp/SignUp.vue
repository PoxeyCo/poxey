<template>
  <div class="SignUp">
    <img class="SignUp__logo" src="../../assets/images/auth/logo.png" alt="">
    <div class="SignUp__main">
      <img class="SignUp__main__poke" src="../../assets/images/auth/pokemon3.png" alt="">
      <div class="SignUp__main__formSign">
        <div class="SignUp__main__formSign__title">Регистрация</div>
        <div 
          class="SignUp__main__formSign__form" id="name" :class="{ wrong: wrong_name }">
          <label>Ваш никнейм</label>
          <label class="wrong">Ваш Никнейм занят</label>
          <div class="SignUp__main__formSign__form__input">
            <img src="../../assets/images/auth/internet.svg" alt="">
            <input type="text" placeholder="Введите ваш никнейм" v-model="name" @change="check_name">
          </div>
        </div>
        <div class="SignUp__main__formSign__form" :class="{ wrong: wrong_email }">
          <label>E-mail</label>
          <label class="wrong">Ваш Никнейм занят</label>
          <div class="SignUp__main__formSign__form__input">
            <img src="../../assets/images/auth/email.svg" alt="">
            <input type="email" placeholder="Введите вашу почту" v-model="email" @change="check_email">
          </div>
        </div>
        <div class="SignUp__main__formSign__form">
          <label>Пароль</label>
          <label class="wrong">Ваш Никнейм занят</label>
          <div class="SignUp__main__formSign__form__input">
            <img src="../../assets/images/auth/lock.svg" alt="">
            <input type="password" placeholder="Введите ваш пароль" v-model="password1">
            <img class="SignUp__main__formSign__form__input__eye" @click="eye('eye-pas1')" id="eye-pas1" src="../../assets/images/auth/close-eye.svg" alt="">
          </div>
        </div>
        <div class="SignUp__main__formSign__form last-form">
          <label>Подтвердите пароль</label>
          <label class="wrong">Ваш Никнейм занят</label>
          <div class="SignUp__main__formSign__form__input">
            <img src="../../assets/images/auth/lock.svg" alt="">
            <input type="password" placeholder="Введите ваш пароль" v-model="password2">
            <img class="SignUp__main__formSign__form__input__eye" @click="eye('eye-pas2')" id="eye-pas2" src="../../assets/images/auth/close-eye.svg" alt="">
          </div>
        </div>
        <div class="SignUp__main__formSign__btn">Зарегистрироваться</div>
        <p class="SignUp__main__formSign__btnSignUp">Уже есть аккаунт? <router-link to="/auth">Войти!</router-link></p>
      </div>
      <img class="SignUp__main__poke" src="../../assets/images/auth/pokemon4.png" alt="">
    </div>
    <div class="SignUp__footer">© 2021 Poxey Team. All rights reserved.</div>
  </div>
</template>
<script>
import './signup.scss'

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      name: '', 
      password1: '',
      password2 : '',
      ready: false,
      wrong_name: false,
      wrong_email: false
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
    },
    check_name () {
      if (this.name.length < 4 || this.name.length > 30 || this.name.length == 0) {
        this.wrong_name = true
      } else {
        this.wrong_name = false
      }
    },
    check_email () {
      const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (emailRegExp.test(String(this.email))) {
        this.wrong_email = false
      } else {
        this.wrong_email = true
      }
    }
  }
};
</script>
