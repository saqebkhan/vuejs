<template>
  <div :class="darkMode ? 'dark' : 'light'">
    <button @click="switchMode">{{ theme }}</button>
    <input type="text" placeholder="Search..." v-model="searchInput" />
    <ul>
      <li v-for="(item, index) in filter" :key="index">{{ item }}</li>
    </ul>
    <h1>Whole Time</h1>
    <button @click="start">Start</button>
    <h2>{{ mins }} : {{ secs }}</h2>
    <!-- <button @click="stopWatch = true">Stop Watch</button> -->
    <button @click="myFunction">New Function</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "Aurangabad",
        "Beed",
        "Nanded",
        "Usmanabad",
        "Parbhani",
        "Partur",
        "Selu",
        "Jalna",
        "Ambad",
        "Purna",
        "Manwat Road",
      ],
      searchInput: "",
      darkMode: false,
      theme: "Dark Mode",
      mins: 0,
      secs: 0,
      stopWatch: false,
      clicked: 0,
    };
  },
  watch: {
    darkMode(val) {
      if (val) {
        this.theme = "Light Mode";
      } else if (!val) {
        this.theme = "Dark Mode";
      }
    },
  },
  computed: {
    filter() {
      let filteredArr = this.items.filter((item) => {
        return item.includes(this.searchInput);
      });
      return filteredArr;
    },
  },
  methods: {
    switchMode() {
      this.darkMode = !this.darkMode;
      this.$emit("change-theme", this.darkMode);
    },
    start() {
      this.clicked += 1;
      if (this.clicked % 2 !== 0) {
        console.log(this.clicked, "clicked");
        this.stopWatch = false;
        for (let i = 0; i < 6; i++) {
          setTimeout(() => {
            if (!this.stopWatch) {
              console.log(this.stopWatch, "stopWatch");
              this.secs = i;
              if (i === 5) {
                this.mins += 1;
                this.clicked -= 1;
                this.start();
              }
            }
          }, 1000 * i);
          // }
        }
      } else {
        this.stopWatch = true;
      }
      console.log(this.stopWatch, "in function");
    },
    myFunction() {
      this.clicked += 1;
      if (this.clicked % 2 === 0) {
        this.stopWatch = true;
      } else {
        this.stopWatch = false;
        for (let i = 0; i < 6; i++) {
          setTimeout(() => {
            if (!this.stopWatch) {
              this.sec = i;
              if (i === 5) {
                this.min += 1;
                this.clicked -= 1;
                this.myFunction();
              }
            }
          }, 1000 * i);
        }
      }
    },
  },
};
</script>

<style scoped>
.dark {
  background: black;
  color: white;
}
.light {
  background: white;
}
</style>
