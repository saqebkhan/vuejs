<template>
<div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <TodoList />
  <!-- <Filter /> -->
  <!-- <MethodsCounter /> -->
  <!-- <Table /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from './todoList/TodoList.vue'
// import Filter from './components/Filter/Filter.vue'
// import MethodsCounter from './components/Counters/MethodsCounter.vue'
// import Table from './components/Table/Table.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    TodoList
    // Filter
    // MethodsCounter
    // Table
  }
}
</script>

<style>

</style>
