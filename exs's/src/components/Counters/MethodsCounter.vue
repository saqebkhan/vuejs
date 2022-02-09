<template>
    <div>
        <p>{{count}}</p>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            count:0
        }
    },
    methods:{
        sub(){
            return this.count>1?this.count-- : 0
        },
        add(){
            return this.count++
        }
    }
}
</script>