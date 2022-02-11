<template>
  <div>
    <h1>Toggle Class</h1>
    <h2 :class="classObj">Hello World</h2>
    <button @click="error = !error">Error</button>
    <button @click="warning = !warning">Warning</button>
  
    <h2>Cart</h2>
    <h3>{{ count }}</h3>
    <p :class="cart">cart can't be negetive</p>
    <button @click="count++">+</button>
    <button @click="count<1?0:count--">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      warning: false,
      count: 1,
    };
  },
  computed: {
    classObj() {
      return {
        red: this.error,
        yellow: this.warning,
      };
    },
    cart() {
      return {
        negetive: this.count > 0,
      };
    },
  },
};
</script>

<style scoped>
.red {
  background-color: red;
}
.yellow {
  background-color: yellow;
}
.negetive {
  display: none;
}

</style>
