<template>
  <div>
    <h1>Hello</h1>
    <input type="text" placeholder="Add To Do" v-model="input" @keyup.control="add"/>
    <ol>
      <li v-for="(todo, index) in todos" :key="todo">
        <button @click="del(index)">x</button>{{ todo }} <input type="checkbox" v-model="check">
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      todos: [],
    };
  },
  methods: {
    add() {
      this.todos.push(this.input)
      this.input = "";
    },
    del(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
