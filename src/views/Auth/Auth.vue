<template>
  <div class="auth">
    <img class="auth__logo" src="../../assets/images/auth/logo.png" alt="">
    <div class="auth__main">
      <img class="auth__main__poke" src="../../assets/images/auth/pokemon1.png" alt="">
      <div class="auth__main__formSignIn">
        <div class="auth__main__formSignIn__title">Авторизация</div>
        <div class="auth__main__formSignIn__form">
          <label>Ваш никнейм</label>
          <div class="auth__main__formSignIn__form__input">
            <img src="../../assets/images/auth/internet.svg" alt="">
            <input type="text" placeholder="Введите ваш никнейм">
          </div>
        </div>
        <div class="auth__main__formSignIn__form last-form">
          <label>Ваш пароль</label>
          <div class="auth__main__formSignIn__form__input">
            <img src="../../assets/images/auth/lock.svg" alt="">
            <input type="password" placeholder="Введите ваш пароль">
            <img class="auth__main__formSignIn__form__input__eye" src="../../assets/images/auth/close-eye.svg" alt="">
          </div>
        </div>
        <div class="auth__main__formSignIn__forgetPas">Забыли пароль!</div>
        <div class="auth__main__formSignIn__btn">ВОЙТИ</div>
        <p class="auth__main__formSignIn__btnSignUp">Еще не аккаунта? <span>Зарегестрируйся!</span></p>
      </div>
      <img class="auth__main__poke" src="../../assets/images/auth/pokemon2.png" alt="">
    </div>
    <div class="auth__footer">© 2021 Poxey Team. All rights reserved.</div>
  </div>
</template>
<script>
import './auth.scss'

export default {
  name: 'Auth',
};
</script>
