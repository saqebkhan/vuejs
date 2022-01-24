<template>
  <div class="hello">
    <!------------------ToDo---------------------->
    <input
      type="text"
      placeholder="Add To Do"
      v-model="AddTodo"
      @keyup.enter="Add"
    />
    <ul v-for="(todo, index) in todos" :key="todo">
      <li>{{ todo }} <button @click="del(index)">x</button></li>
    </ul>
    <hr>
    <!-------------------/ToDo------------------->
    <!-----------------Filter------------------->
    <input type="text" placeholder="Search" v-model="find">
    <!-- <button @click="filtered()">Search</button> -->
    <p v-for="item in filtered" :key="item">{{item}}</p>
    <hr>
    <!----------------/Filter------------------>
    <!--------------Counter---------------->
    <p>{{count}}</p><button @click="count++">+</button>
    <button @click="count<1?0:count--">-</button>
    <hr>
    <!--------------/Counter------------------->
    <!---------------Counter Computed------------------>
    <p>{{count}}</p>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <hr>
    <!---------------/Counter Computed------------------>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count:0,
      AddTodo: "",
      find:'',
      todos: ["khao", "piyo"],
      items: ['aan', 'baan', 'shaan']
    };
  },
  methods: {
    Add() {
      this.todos.push(this.AddTodo);
      this.AddTodo = "";
    },
    del(index) {
      this.todos.splice(index, 1);
    },
    add(){
      return this.count++
    },
    sub (){
     return this.count>1?this.count-- : 0 
    }
    
  },
  computed : {
    filtered : function (){
     return this.items.filter((item)=> {
        return item.includes(this.find)
        })
    },
    
  }
};
</script>
