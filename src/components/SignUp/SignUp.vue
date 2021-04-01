<template>
  <div class="SignUp">
    <img class="SignUp__logo" src="../../assets/images/auth/logo.png" alt="" />
    <div class="SignUp__main">
      <img
        class="SignUp__main__poke"
        src="../../assets/images/auth/pokemon3.png"
        alt=""
      />
      <div class="SignUp__main__formSign">
        <div class="SignUp__main__formSign__title">Регистрация</div>
        <div
          class="SignUp__main__formSign__form"
          id="name"
          :class="{ wrong: errors.username.show || wrong_name }"
        >
          <label>Ваш никнейм</label>
          <label class="wrong" v-if="wrong_name"
            >Мин. длина 4, макс. - 15</label
          >
          <label class="wrong" v-if="errors.username.show">{{
            errors.username.message
          }}</label>
          <div class="SignUp__main__formSign__form__input">
            <img src="../../assets/images/auth/internet.svg" alt="" />
            <input
              type="text"
              placeholder="Введите ваш никнейм"
              v-model="username"
              @change="check_name"
              @keyup.enter="registration"
            />
          </div>
        </div>
        <div
          class="SignUp__main__formSign__form"
          :class="{ wrong: errors.email.show || wrong_email }"
        >
          <label>E-mail</label>
          <label class="wrong" v-if="wrong_email">Неккоректный Email</label>
          <label class="wrong" v-if="errors.email.show">{{
            errors.email.message
          }}</label>
          <div class="SignUp__main__formSign__form__input">
            <img src="../../assets/images/auth/email.svg" alt="" />
            <input
              type="email"
              placeholder="Введите вашу почту"
              v-model="email"
              @change="check_email"
              @keyup.enter="registration"
            />
          </div>
        </div>
        <div
          class="SignUp__main__formSign__form"
          :class="{ wrong: errors.password.show || wrong_password }"
        >
          <label>Пароль</label>
          <label class="wrong" v-if="wrong_password"
            >Пароли не совпадают!</label
          >
          <label class="wrong" v-if="errors.password.show">{{
            errors.password.message
          }}</label>
          <div class="SignUp__main__formSign__form__input">
            <img src="../../assets/images/auth/lock.svg" alt="" />
            <input
              type="password"
              placeholder="Введите ваш пароль"
              v-model="password1"
              @keyup.enter="registration"
            />
            <img
              class="SignUp__main__formSign__form__input__eye"
              @click="eye('eye-pas1')"
              id="eye-pas1"
              src="../../assets/images/auth/close-eye.svg"
              alt=""
            />
          </div>
        </div>
        <div class="SignUp__main__formSign__form last-form">
          <label>Подтвердите пароль</label>
          <div class="SignUp__main__formSign__form__input">
            <img src="../../assets/images/auth/lock.svg" alt="" />
            <input
              type="password"
              placeholder="Введите ваш пароль"
              v-model="password2"
              @input="checkPassword"
              @keyup.enter="registration"
            />
            <img
              class="SignUp__main__formSign__form__input__eye"
              @click="eye('eye-pas2')"
              id="eye-pas2"
              src="../../assets/images/auth/close-eye.svg"
              alt=""
            />
          </div>
        </div>
        <div class="SignUp__main__formSign__btn" @click="registration">
          Зарегистрироваться
        </div>
        <p class="SignUp__main__formSign__btnSignUp">
          Уже есть аккаунт? <router-link to="/auth">Войти!</router-link>
        </p>
      </div>
      <img
        class="SignUp__main__poke"
        src="../../assets/images/auth/pokemon4.png"
        alt=""
      />
    </div>
    <div class="SignUp__footer">© 2021 Poxey Team. All rights reserved.</div>
  </div>
</template>
<script>
import "./signup.scss";

export default {
  name: "SignUp",
  data: function () {
    return {
      email: "",
      username: "",
      password1: "",
      password2: "",
      ready: false,
      wrong_name: false,
      wrong_email: false,
      wrong_password: false,
      errors: {
        username: {
          show: false,
          message: "",
        },
        email: {
          show: false,
          message: "",
        },
        password: {
          show: false,
          message: "",
        },
      },
    };
  },
  methods: {
    eye(id) {
      let eye = document.querySelector(`#${id}`);
      let input = eye.parentElement.querySelector("input");
      if (eye.src.includes("close-eye")) {
        input.type = "text";
        eye.src = require("@/assets/images/auth/open-eye.svg");
      } else {
        input.type = "password";
        eye.src = require("@/assets/images/auth/close-eye.svg");
      }
    },
    check_name() {
      this.wrong_name =
        this.username.length < 4 ||
        this.username.length > 15 ||
        this.username.length === 0;
    },
    check_email() {
      const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.wrong_email = !emailRegExp.test(String(this.email));
    },
    async checkServerResponse(response) {
      const errors = {
        1: "Неккоректный Email",
        2: "Неккоректный Username",
        3: "Неккоректный пароль",
        4: "Email занят",
        5: "Username занят",
      };
      if (!response.status) {
        for (let key of response["errors"]) {
          key = Number(key);
          if (key === 5 || key === 2) {
            this.errors.username.show = true;
            this.errors.username.message = errors[key];
          }
          if (key === 4 || key === 1) {
            this.errors.email.show = true;
            this.errors.email.message = errors[key];
          }
          if (key === 3) {
            this.errors.password.show = true;
            this.errors.password.message = errors[key];
          }
        }
      } else {
        const requestCharacters = {
          method: "POST",
          headers: {
            Authorization: `Bearer ${response.tokens.access}`,
          },
        };

        await fetch(
          "http://poxey.herokuapp.com/api/v1/characters/",
          requestCharacters
        );

        this.$store.dispatch("signIn", response);
        this.$router.push("/");
      }
    },
    registration() {
      const requestBody = {
        email: this.email,
        username: this.username,
        password: this.password1,
      };

      const requestParams = {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(
        "http://poxey.herokuapp.com/api/v1/accounts/register",
        requestParams
      )
        .then((res) => res.json())
        .then((data) => {
          this.checkServerResponse(data);
        });
    },
    checkPassword() {
      this.wrong_password = this.password1 !== this.password2;
    },
  },
};
</script>
