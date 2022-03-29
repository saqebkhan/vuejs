<template>
  <div>
    <div class="sign-up-form">
      <h1>Register Now</h1>
      <div v-if="get == false">
        <input
          type="email"
          placeholder="Enter Email ID"
          v-model="email"
          class="inp-bx"
        />
        <p style="color: red">{{ incorrecrEmail }}</p>
        <button @click="getOtp" class="btns" :disabled="!email">
          Get OTP
        </button>
      </div>
      <div v-if="get">
        <div v-if="valid == false">
          <input
            type="number"
            placeholder="Enter OTP"
            v-model="enteredOtp"
            class="inp-bx"
          />
          <p style="color: red">{{ incorrect }}</p>
          <button @click="verify" class="btns">Verify</button>
        </div>
      </div>
    </div>
    <div v-if="valid == true">
      <h1>You Are Sccessfully Logged In</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      enteredOtp: "",
      valid: false,
      otp: "",
      get: false,
      incorrect: "",
      incorrecrEmail: "",
    };
  },
  methods: {
    getOtp() {
      if(this.email.includes('@')){
        this.otp = prompt(Math.floor(100000 + Math.random() * 900000));
        this.get = true;
      }
        else{this.incorrecrEmail = "Please Enter the Valid Email Id"}
      
    },
    verify() {
      if (this.otp == this.enteredOtp) {
        this.valid = true;
      } else {
        this.incorrect = "Incorrect";
      }
    },
  },
};
</script>
<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
.btns {
  color: #fff;
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  font-size: 15px;
  margin: 10px 0;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: rgb(86, 86, 255);
}
.sign-up-form {
  width: 300px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
  background: #fff;
  padding: 20px;
  margin: 8% auto 0;
  text-align: center;
}
.inp-bx {
  border-radius: 20px;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #999;
  outline: none;
}
.sign-up-form h1 {
  color: rgb(44, 44, 117);
  margin-bottom: 30px;
  text-align: center;
}
</style>
