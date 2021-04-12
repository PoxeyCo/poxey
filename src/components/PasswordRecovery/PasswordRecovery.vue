<template>
  <div class="PasswordRecovery">
    <div class="PasswordRecovery__main">
      <div class="PasswordRecovery__main__title">Восстановление</div>
      <div class="PasswordRecovery__main__form">
        <label>Ваш E-mail</label>
        <label class="wrong">{{ wrong }}</label>
        <div class="PasswordRecovery__main__form__input">
          <img src="../../assets/images/auth/email.svg" alt="" />
          <input type="email" placeholder="Введите вашу почту" />
        </div>
      </div>
      <div class="PasswordRecovery__main__btn">Получить код</div>
      <p class="PasswordRecovery__main__btnSignIn">
        Я вспомнил пароль!
        <router-link to="/auth">Войти!</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import "./passwordrecovery.scss";

export default {
  name: "PasswordRecovery",
};
</script>
