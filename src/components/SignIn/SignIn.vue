<template>
  <div class="SignIn">
    <img class="SignIn__logo" src="../../assets/images/auth/logo.png" alt="">
    <div class="SignIn__main">
      <img class="SignIn__main__poke" src="../../assets/images/auth/pokemon1.png" alt="">
      <div class="SignIn__main__formSign">
        <div class="SignIn__main__formSign__title">Авторизация</div>
        <div class="SignIn__main__formSign__form">
          <label>Ваш никнейм</label>
          <div class="SignIn__main__formSign__form__input">
            <img src="../../assets/images/auth/internet.svg" alt="">
            <input type="text" placeholder="Введите ваш никнейм">
          </div>
        </div>
        <div class="SignIn__main__formSign__form last-form">
          <label>Ваш пароль</label>
          <div class="SignIn__main__formSign__form__input">
            <img src="../../assets/images/auth/lock.svg" alt="">
            <input type="password" placeholder="Введите ваш пароль">
            <img class="SignIn__main__formSign__form__input__eye" src="../../assets/images/auth/close-eye.svg" alt="">
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
};
</script>
