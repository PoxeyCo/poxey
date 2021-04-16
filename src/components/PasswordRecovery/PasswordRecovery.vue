<template>
  <div class="PasswordRecovery">
      <div class="PasswordRecovery__main">
            <div class="PasswordRecovery__main__title">Восстановление</div>
            <div
              class="PasswordRecovery__main__form"
            >
                <label>Ваш E-mail</label>
                <label class="wrong" :class="{ ok: wrong }">{{ wrong }}</label>
                <div class="PasswordRecovery__main__form__input">
                    <img src="../../assets/images/auth/email.svg" alt="" />
                    <input
                    v-model="email"
                    type="email"
                    placeholder="Введите вашу почту"
                    />
                </div>
            </div>
            <div class="PasswordRecovery__main__btn" @click="recovery()">Получить код</div>
            <p class="PasswordRecovery__main__btnSignIn">
                Я вспомнил пароль!
                <a @click="$store.commit('changePas', 0)">Войти!</a>
            </p>
      </div>
  </div>
</template>
<script>
import "./passwordrecovery.scss";

export default {
  name: "PasswordRecovery",
  data() {
    return {
      email: '',
      wrong: '',
    }
  },
  methods: {
    recovery() {
      if (this.email.length) {
        const requestBody = {
          email: this.email
        };

        const requestParams = {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "application/json",
          },
        };

        fetch(
          "https://poxey.herokuapp.com/api/v1/accounts/recover",
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
      if (response.status) {
        this.$store.commit('changePas', 2)
        this.$store.commit('changePasSaveEmail', this.email)
      } else {
        
        if (response.errors[0] == 2) {
          this.wrong = 'Пользователя с такой почтой не существует'
          console.log(this.wrong)
        } else if (response.errors[0] == 1) {
          this.wrong = 'Неверная почта'
          console.log(this.wrong)
        }
      }
    }
  }
};
</script>
