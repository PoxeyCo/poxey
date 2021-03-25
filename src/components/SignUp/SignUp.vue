<template>
  <div class="SignUp">
    <img class="SignUp__logo" src="../../assets/images/auth/logo.png" alt="">
    <div class="SignUp__main">
      <img class="SignUp__main__poke" src="../../assets/images/auth/pokemon3.png" alt="">
      <div class="SignUp__main__formSign">
        <div class="SignUp__main__formSign__title">Регистрация</div>
        <div class="SignUp__main__formSign__form">
          <label>Ваш никнейм</label>
          <div class="SignUp__main__formSign__form__input">
            <img src="../../assets/images/auth/internet.svg" alt="">
            <input type="text" placeholder="Введите ваш никнейм">
          </div>
        </div>
        <div class="SignUp__main__formSign__form">
          <label>E-mail</label>
          <div class="SignUp__main__formSign__form__input">
            <img src="../../assets/images/auth/email.svg" alt="">
            <input type="email" placeholder="Введите вашу почту">
          </div>
        </div>
        <div class="SignUp__main__formSign__form">
          <label>Пароль</label>
          <div class="SignUp__main__formSign__form__input">
            <img src="../../assets/images/auth/lock.svg" alt="">
            <input type="password" placeholder="Введите ваш пароль">
            <img class="SignUp__main__formSign__form__input__eye" src="../../assets/images/auth/close-eye.svg" alt="">
          </div>
        </div>
        <div class="SignUp__main__formSign__form last-form">
          <label>Подтвердите пароль</label>
          <div class="SignUp__main__formSign__form__input">
            <img src="../../assets/images/auth/lock.svg" alt="">
            <input type="password" placeholder="Введите ваш пароль">
            <img class="SignUp__main__formSign__form__input__eye" src="../../assets/images/auth/open-eye.svg" alt="">
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
};
</script>
