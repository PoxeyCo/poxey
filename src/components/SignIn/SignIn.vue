<template>
  <div class="SignIn">
    <img class="SignIn__logo" src="../../assets/images/auth/logo.png" alt="" />
    <div class="SignIn__main">
      <img
        class="SignIn__main__poke"
        src="../../assets/images/auth/pokemon1.png"
        alt=""
      />
      <div class="SignIn__main__formSign">
        <div class="SignIn__main__formSign__title">Авторизация</div>
        <div
          class="SignIn__main__formSign__form"
          :class="{ wrong: wrong_login }"
          id="name"
        >
          <label>Ваш никнейм</label>
          <label class="wrong">{{ wrong }}</label>
          <div class="SignIn__main__formSign__form__input">
            <img src="../../assets/images/auth/internet.svg" alt="" />
            <input
              type="text"
              placeholder="Введите ваш никнейм или почту"
              v-model="login"
            />
          </div>
        </div>
        <div
          class="SignIn__main__formSign__form last-form"
          :class="{ wrong: wrong_password }"
          id="password"
        >
          <label>Ваш пароль</label>
          <label class="wrong">{{ wrong }}</label>
          <div class="SignIn__main__formSign__form__input">
            <img src="../../assets/images/auth/lock.svg" alt="" />
            <input
              type="password"
              placeholder="Введите ваш пароль"
              v-model="password"
            />
            <img
              class="SignIn__main__formSign__form__input__eye"
              @click="eye('eye-pas1')"
              id="eye-pas1"
              src="../../assets/images/auth/close-eye.svg"
              alt=""
            />
          </div>
        </div>
        <div class="SignIn__main__formSign__forgetPas">Забыли пароль!</div>
        <div class="SignIn__main__formSign__btn" @click="authorization">
          ВОЙТИ
        </div>
        <p class="SignIn__main__formSign__btnSignUp">
          Еще не аккаунта?
          <router-link to="/registration">Зарегестрируйся!</router-link>
        </p>
      </div>
      <img
        class="SignIn__main__poke"
        src="../../assets/images/auth/pokemon2.png"
        alt=""
      />
    </div>
    <div class="SignIn__footer">© 2021 Poxey Team. All rights reserved.</div>
  </div>
</template>
<script>
import "./signin.scss";

export default {
  name: "SignIn",
  data() {
    return {
      wrong_login: false,
      wrong_password: false,
      wrong: '',
      login: '',
      password: ''
    }
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
    authorization() {
      if (this.login.length && this.password.length) {
        const requestBody = {
          login: this.login,
          password: this.password,
        };

        const requestParams = {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "application/json",
          },
        };

      fetch(
        "http://poxey.herokuapp.com/api/v1/accounts/signin",
        requestParams
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          this.checkServerResponse(data);
        });
      }
    },
    checkServerResponse(response) {
      const errors = {
        1: "Ошибка с login",
        2: "Ошибка с password",
        3: "Аккаунта не существует",
        4: "Неправильный пароль"
      };
      if (!response.status) {
        response["errors"].forEach((key) => {
          key = Number(key);
          if (key === 1) {
            this.wrong_login = true
            this.wrong_password = false
            this.wrong = errors['1']
          }
          if (key === 3) {
            this.wrong_login = true
            this.wrong_password = false
            this.wrong = errors['3']
          }
          if (key === 2) {
            this.wrong_password = true
            this.wrong_login = false
            this.wrong = errors['2']
          }
          if (key === 4) {
            this.wrong_password = true
            this.wrong_login = false
            this.wrong = errors['4']
          }
        });
      } else {
        this.$store.dispatch("signIn", response);
        this.$router.push("/");
      }
    }
  }
};
</script>
