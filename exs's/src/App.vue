<template>
  <div>
    <Parent />
    <!-- <RegistrationForm /> -->
  </div>
</template>

<script>
import Parent from "./components/PropComp/Parent.vue";
// import RegistrationForm from './components/Registration Form/RegistrationForm.vue'
export default {
  name: "App",
  components: {
    Parent,
    // RegistrationForm
  },
};
</script>
