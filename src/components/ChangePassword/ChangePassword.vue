<template>
  <div class="ChangePassword">
    <div class="ChangePassword__main">
      <div class="ChangePassword__main__title">Смена пароля</div>
      <div class="ChangePassword__main__code">
        <p>Введите код восстановления</p>
        <div class="ChangePassword__main__code__form">
          <input type="number" @focus="focusCode(0)" @input="enterCode(0)" />
          <p>-</p>
          <input type="number" @focus="focusCode(1)" @input="enterCode(1)" />
          <p>-</p>
          <input type="number" @focus="focusCode(2)" @input="enterCode(2)" />
          <p>-</p>
          <input type="number" @focus="focusCode(3)" @input="enterCode(3)" />
          <p>-</p>
          <input type="number" @focus="focusCode(4)" @input="enterCode(4)" />
          <p>-</p>
          <input type="number" @focus="focusCode(5)" @input="enterCode(5)" />
        </div>
      </div>
      <div class="ChangePassword__main__form" v-if="status">
        <label>Новый пароль</label>
        <!-- <label class="wrong">{{ wrong }}</label> -->
        <div class="ChangePassword__main__form__input">
          <img src="../../assets/images/auth/lock.svg" alt="" />
          <input
            type="password"
            placeholder="Введите ваш новый пароль"
            v-model="pas1"
          />
          <img
            class="ChangePassword__main__form__input__eye"
            @click="eye('eye-pas1')"
            id="eye-pas1"
            src="../../assets/images/auth/close-eye.svg"
            alt=""
          />
        </div>
      </div>
      <div class="ChangePassword__main__form last-form" v-if="status">
        <label>Повторите пароль</label>
        <!-- <label class="wrong">{{ wrong }}</label> -->
        <div class="ChangePassword__main__form__input">
          <img src="../../assets/images/auth/lock.svg" alt="" />
          <input
            type="password"
            placeholder="Введите пароль еще раз"
            v-model="pas2"
          />
          <img
            class="ChangePassword__main__form__input__eye"
            @click="eye('eye-pas2')"
            id="eye-pas2"
            src="../../assets/images/auth/close-eye.svg"
            alt=""
          />
        </div>
      </div>
      <div
        class="SignIn__main__formSign__btn"
        v-if="status"
        @click="updatePassword()"
      >
        Изменить
      </div>
    </div>
  </div>
</template>
<script>
import "./changepassword.scss";

export default {
  name: "ChangePassword",
  data() {
    return {
      code: "",
      status: false,
      pas1: "",
      pas2: "",
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
    focusCode(i) {
      const list = document
        .querySelector(".ChangePassword__main__code__form")
        .querySelectorAll("input");
      list[i].select();
    },
    enterCode(i) {
      const list = document
        .querySelector(".ChangePassword__main__code__form")
        .querySelectorAll("input");
      if (list[i].value.length === 6) {
        const key = `${list[i].value}`;
        for (let k = 0; k < 6; k++) {
          list[k].value = key[k];
        }
      } else {
        if (list[i].value.length > 1) {
          list[i].value = list[i].value[list[i].value.length - 1];
        }
        if (list[i].value.length === 1) {
          if (i < list.length - 1) {
            list[i + 1].focus();
          }
        }
      }

      // let count = 0
      // for (let k = 0; k < 6; k++) {
      //     if (list[k].value.length > 0) {
      //         count += 1
      //     }
      // }
      this.code = "";
      for (let k = 0; k < 6; k++) {
        this.code += `${list[k].value}`;
      }

      if (this.code.length === 6) {
        this.recoverCode();
      }
    },
    recoverCode() {
      if (this.code.length) {
        const requestBody = {
          email: this.$store.state.changePassword.email,
          code: Number(this.code),
        };

        const requestParams = {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "application/json",
          },
        };

        fetch(
          "https://poxey.herokuapp.com/api/v1/accounts/recover/code",
          requestParams
        )
          .then((res) => res.json())
          .then((data) => {
            this.checkServerResponse(data);
          });
      }
    },
    checkServerResponse(response) {
      if (response.status) {
        this.status = true;
      }
    },
    updatePassword() {
      if (this.pas1.length && this.pas1 == this.pas2) {
        const requestBody = {
          email: this.$store.state.changePassword.email,
          password: this.pas1,
        };

        const requestParams = {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "application/json",
          },
        };

        fetch(
          "https://poxey.herokuapp.com/api/v1/accounts/recover/password",
          requestParams
        )
          .then((res) => res.json())
          .then((data) => {
            this.checkServerResponsePas(data);
          });
      }
    },
    checkServerResponsePas(response) {
      if (response.status) {
        this.$store.commit("changePas", 0);
      }
    },
  },
};
</script>
