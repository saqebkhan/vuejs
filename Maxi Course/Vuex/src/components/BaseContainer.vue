<template>
  <section>
    <h2>{{ title }}</h2>
    <input type="number" name="" id="" v-model="value" />
    <slot></slot>
    <h3>{{ add }}</h3>
    <button @click="addOne">Add 1</button>
  </section>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      value: null,
    };
  },
  computed: {
    add() {
      return this.$store.state.count;
    },
  },
  methods: {
    addOne() {
      this.$store.commit('adder', this.value);
    },
  },
};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

h2 {
  text-align: center;
}
</style>
