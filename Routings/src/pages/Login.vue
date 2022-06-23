<template>
  <div class="login-section">
    <h1>Login</h1>
    <input type="email" placeholder="Enter Email" v-model="email" /><br />
    <input type="password" placeholder="Enter Password" v-model="pass" /><br />
    <button @click="LogIn">LogIn</button><br /><br />
    <a href="">Don't Have Accout?</a><br /><br />
    <button @click="signUp">Sign Up</button>
  </div>
</template>

<script>
// import Home from './Home.vue'
export default {
  // components:{
  //     Home
  // },
  data() {
    return {
      email: '',
      pass: '',
    };
  },
  methods: {
    LogIn() {
      this.$router.push({
        // path: '/Home',
        name: 'Home',
        // component:Home,
        params: { email: this.email, pass: this.pass },
      });
    },
    signUp() {
      this.$router.push('SignUp');
    },
  },
};
</script>
<style scoped>
.login-section {
  border: 1px solid red;
  width: 280px;
  height: 400px;
  text-align: center;
  margin-left: 37%;
}
input {
  padding: 8px;
  margin: 20px;
  border: none;
  border-bottom: 1px solid red;
}
button {
  background: rgb(232, 28, 255);
  color: rgb(255, 231, 231);
  border-radius: 12px;
  border: none;
  width: 90px;
  height: 20px;
  cursor: pointer;
}
</style>
