<template>
  <div>
    <input
      type="text"
      placeholder="Add To Do"
      v-model="input"
      @keyup.enter="add"
    />
    <ol>
      <li v-for="(todo, index) in todos" :key="todo" :class="lis">
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
      // check: false
    };
  },
  methods: {
    add() {
      if(this.input.trim() !='' ){this.todos.push(this.input)}
      this.input = "";
    },
    del(index) {
      this.todos.splice(index, 1);
    },
    did() {
        return {
        
        }
    },
    
  },
  computed: {
    
  },
};
</script>

<style scoped>
    .lis{
        color: green;
    }
</style>