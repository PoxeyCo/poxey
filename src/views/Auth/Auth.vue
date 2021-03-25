<template>
  <div class="auth">
    <!-- <SignIn /> -->
    <SignUp />
  </div>
</template>
<script>
import './auth.scss'

// import SignIn from '@/components/SignIn/SignIn'
import SignUp from '@/components/SignUp/SignUp'

export default {
  name: 'Auth',
  components: {
    // SignIn,
    SignUp
  }
};
</script>
