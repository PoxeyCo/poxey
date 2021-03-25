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
        <p class="SignIn__main__formSign__btnSignUp">Еще не аккаунта? <span>Зарегестрируйся!</span></p>
      </div>
      <!-- <div class="auth__main__formSign" id="SignUp">
        <div class="auth__main__formSign__title">Регистрация</div>
        <div class="auth__main__formSign__form">
          <label>Ваш никнейм</label>
          <div class="auth__main__formSign__form__input">
            <img src="../../assets/images/auth/internet.svg" alt="">
            <input type="text" placeholder="Введите ваш никнейм">
          </div>
        </div>
        <div class="auth__main__formSign__form">
          <label>E-mail</label>
          <div class="auth__main__formSign__form__input">
            <img src="../../assets/images/auth/email.svg" alt="">
            <input type="email" placeholder="Введите вашу почту">
          </div>
        </div>
        <div class="auth__main__formSign__form">
          <label>Пароль</label>
          <div class="auth__main__formSign__form__input">
            <img src="../../assets/images/auth/lock.svg" alt="">
            <input type="password" placeholder="Введите ваш пароль">
            <img class="auth__main__formSign__form__input__eye" src="../../assets/images/auth/close-eye.svg" alt="">
          </div>
        </div>
        <div class="auth__main__formSign__form last-form">
          <label>Подтвердите пароль</label>
          <div class="auth__main__formSign__form__input">
            <img src="../../assets/images/auth/lock.svg" alt="">
            <input type="password" placeholder="Введите ваш пароль">
            <img class="auth__main__formSign__form__input__eye" src="../../assets/images/auth/open-eye.svg" alt="">
          </div>
        </div>
        <div class="auth__main__formSign__btn">Зарегистрироваться</div>
        <p class="auth__main__formSign__btnSignUp">Уже есть аккаунт? <span>Войти!</span></p>
      </div> -->
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
