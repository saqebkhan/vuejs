<template>
  <SlotEg>
    <div :class="darkMode === true ? 'dark' : 'light'">
      <label for="">Add Todo</label>
      <input type="text" placeholder="Enter task" v-model="input" />
      <button @click="addTodo(index)">Add</button>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item }} <button @click="deletetodo(index)">X</button
          ><button @click="editTodo(index)">edit</button>
        </li>
      </ul>
    </div>
  </SlotEg>
  <filter-nsort @change-theme="changeTheme"></filter-nsort>
</template>

<script>
import FilterNsort from "./FilterNsort.vue";
import SlotEg from "./SlotEg.vue";
export default {
  components: {
    SlotEg,
    FilterNsort,
  },
  data() {
    return {
      input: "",
      items: ["sa"],
      isEditing: false,
      editItem: null,
      darkMode: false,
    };
  },
  methods: {
    changeTheme(val) {
      val ? (this.darkMode = true) : (this.darkMode = false);
    },
    addTodo() {
      if (!this.isEditing) {
        this.items.push(this.input);
        this.input = "";
        // console.log("added");
      } else {
        this.items[this.editItem] = this.input;
        this.isEditing = false;
        this.input = "";
      }
    },
    deletetodo(index) {
      this.items.splice(index, 1);
    },
    editTodo(index) {
      this.isEditing = true;
      this.input = this.items[index];
      this.editItem = index;
    },
  },
};
</script>

<style scoped>
.light {
  background: white;
}
.dark {
  background: black;
  color: white;
}
</style>
