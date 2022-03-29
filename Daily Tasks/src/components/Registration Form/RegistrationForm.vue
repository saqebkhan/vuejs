<template>
  <div>
    <div class="container">
      <div class="title">Registration</div>
      <div class="content">
        <form action="#">
          <div class="user-details">
            <div class="input-box">
              <span class="details">Full Name</span>
              <input type="text" placeholder="Enter your name" v-model="name" />
            </div>
            <div class="input-box">
              <span class="details">Username</span>
              <input
                type="text"
                placeholder="Enter your username"
                v-model="username"
              />
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input
                type="text"
                placeholder="Enter your email"
                v-model="email"
              />
            </div>
            <div class="input-box">
              <span class="details">Phone Number</span>
              <input
                type="number"
                placeholder="Enter your number"
                v-model="phone"
              />
            </div>
            <div class="input-box">
              <span class="details">Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                v-model="password"
              />
            </div>
            <div class="input-box">
              <span class="details">Confirm Password</span>
              <input
                type="password"
                placeholder="Confirm your password"
                v-model="cPassword"
              />
            </div>
            <div v-if="!image" class="input-box">
              <span class="details">Select an image</span>
              <input type="file" @change="onFileChange" />
            </div>
            <div v-else>
              <img :src="image" class="selected-image" />
            </div>
            <div class="input-box">
              <label for="">designation</label>
              <select v-model="designation">
                <option disabled value="">--Select--</option>
                <option value="Trainee Engineer">Trainee Enginner</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Project Manager">Project Manager</option>
              </select>
            </div>
          </div>

          <div class="gender-details">
            <input
              type="radio"
              name="gender"
              id="dot-1"
              value="Male"
              v-model="gender"
            />
            <input
              type="radio"
              name="gender"
              id="dot-2"
              value="Female"
              v-model="gender"
            />
            <input
              type="radio"
              name="gender"
              id="dot-3"
              value="Prefer Not To Say"
              v-model="gender"
            />
            <span class="gender-title">Gender</span>
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              v-model="tnc"
            />
            <label class="form-check-label" for="flexSwitchCheckChecked"
              >Agree TNC</label
            >
          </div>
          <div class="button" v-show="tnc==true">
            <button class="bt" @click="check">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      cPassword: "",
      designation: "",
      gender: "",
      tnc: false,
      image: "",
    };
  },
  methods: {
    check() {
      console.log({
        name: this.name,
        username: this.username,
        email: this.email,
        phone: this.phone,
        password: this.password,
        confirmedPassword: this.cPassword,
        designation: this.designation,
        gender: this.gender,
        terms: this.tnc,
        file: this.image,
      });
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 700px;
  width: 100%;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}
.container .title {
  font-size: 25px;
  font-weight: 500;
  position: relative;
}
.container .title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
.content form .user-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}
form .user-details .input-box {
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}
form .input-box span.details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}
.user-details .input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}
select {
  height: 45px;
  width: 100%;
  outline: none;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
}
.user-details .input-box input:focus,
.user-details .input-box input:valid {
  border-color: #9b59b6;
}
form .gender-details .gender-title {
  font-size: 20px;
  font-weight: 500;
}
form .category {
  display: flex;
  width: 80%;
  margin: 14px 0;
  justify-content: space-between;
}
form .category label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
form .category label .dot {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #d9d9d9;
  border: 5px solid transparent;
}
#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three {
  background: #9b59b6;
  border-color: #d9d9d9;
}
form input[type="radio"] {
  display: none;
}
form .button {
  height: 45px;
  margin: 35px 0;
}
form .button .bt {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  /* cursor: pointer; */
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
.selected-image {
  width: 400px;
  height: 200px;
  margin: auto;
}
</style>
