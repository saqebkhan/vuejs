<template>
    <div>
        <input type="text" placeholder="Add To Do" v-model="input" @keyup.enter="add">
        <ol>
            <li v-for="(todo, index) in todos" :key="todo"><button @click="del(index)">x</button>{{todo}}</li>
        </ol>
        <input type="number" v-model="num">
        <ul v-if="num">
            <li v-for="item in 10" :key="item" >{{num}} x {{item}} = {{num*item}}</li>
        </ul>
  </div>
</template>

<script>
export default {
    data (){
        return {
        input:"",
        todos: [],
        num:  ''
        }
    },
    methods : {
        add (){
            this.todos.push(this.input);
            this.input = ''       
        },
        del (index){
            this.todos.splice(index, 1)
        }
    }
}
</script>