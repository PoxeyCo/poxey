<template>
  <div class="auth">
    <component :is="component"></component>
  </div>
</template>
<script>
import "./auth.scss";

import SignIn from "@/components/SignIn/SignIn";
import SignUp from "@/components/SignUp/SignUp";

export default {
  name: "Auth",
  components: {
    SignIn,
    SignUp,
  },
  computed: {
    component() {
      return this.$route.meta.component;
    }
  }
};
</script>
