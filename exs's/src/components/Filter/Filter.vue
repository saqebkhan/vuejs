<template>
  <div>
    <input type="text" placeholder="Search" v-model="find" />
    <p v-for="item in filtered" :key="item">{{ item }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ["mat", "cat", "bat", "rat"],
      find: "",
    };
  },
  computed: {
    filtered: function () {
      return this.items.filter((item) => {
        return item.includes(this.find);
      });
    },
  },
};
</script>
