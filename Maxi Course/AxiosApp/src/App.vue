<template>
  <div>
    <div class="alert" v-if="er">
      <span class="closebtn" onclick="this.parentElement.style.display='none';"
        >&times;</span
      >
      <strong>Danger!</strong> Indicates a dangerous or potentially negative
      action.
    </div>
    <input type="text" placeholder="Add" v-model="newitem" />
    <p>{{ er }}</p>
    <button @click="adder">Add</button>
    <ol>
      <li v-for="(item, index) in items" :key="index">
        {{ item }} <button @click="newSet(index)">X</button>
      </li>
    </ol>
    <!-- <p>{{ name }}</p> -->
    <input
      type="text"
      v-on:input="setName"
      @keyup.enter="changeName"
      :value="cheez"
    />
    <p>{{ change }}</p>
    <button @click="reset">Reset</button>
    <input type="text" placeholder="Search" v-model="search" />
    <p v-if="loading">Loading...</p>
    <div v-if="!loading">
      <div class="grid-container">
        <!-- <div v-if="!loading"> -->
        <div v-for="it in sorted" :value="it.id" :key="it.id">
          <div class="grid-item">
            <h4>{{ it.id }}</h4>
            <h4>{{ it.title }}</h4>
            <img :src="it.image" alt="" />
            <h4>${{ it.price }}</h4>
            <h5>Rating {{ it.rating.rate }} Review ({{ it.rating.count }})</h5>
            <!-- <button @click="add(it.id)">+</button>
          <p>{{ count }}</p>
          <button @click="reduce(it.id)">-</button> -->
            <p>{{ it.description }}</p>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["1", "2"],
      newitem: "",
      er: "",
      cheez: "",
      change: "",
      saman: "",
      loading: false,
      title: "",
      search: "",
    };
  },
  methods: {
    adder() {
      if (this.newitem.length < 1) {
        this.er = "Please Add";
      }
      if (this.items.includes(this.newitem)) {
        this.er = "Already Existed";
      } else if (this.newitem.length > 1) {
        this.items.push(this.newitem);
        this.newitem = "";
        this.er = "";
      }
    },
    changeName() {
      this.change = this.cheez;
    },
    setName(e) {
      this.cheez = e.target.value;
    },
    reset() {
      this.change = "";
      this.cheez = "";
    },
    newSet() {
      let filteredArr = this.items.filter((ele, index) => {
        ele[index] !== ele;
      });
      return filteredArr;
    },
    // add(id) {
    //   if (id) this.count++;
    // },
    // reduce(id) {
    //   if (id) this.count--;
    // },
  },
  computed: {
    sorted() {
      let filtered = this.title.filter((ele) => {
        return ele.title.toLowerCase().includes(this.search);
      });
      return filtered;
    },
  },

  created: async function () {
    this.loading = true;
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    this.title = data;
    this.loading = false;
  },
};
</script>

<style scoped>
img {
  width: 150px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196f3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  /* font-size: 30px; */
  height: 600px;
  width: 350px;
  text-align: center;
}
</style>
