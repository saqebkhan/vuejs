<template>
<div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <TodoList />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from './todoList/TodoList.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    TodoList
  }
}
</script>

<style>

</style>
