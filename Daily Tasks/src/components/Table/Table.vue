<template>
    <div>
        <input type="number" v-model="num">
        <ul v-if="num">
            <li v-for="item in 10" :key="item" >{{num}} x {{item}} = {{num*item}}</li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                num:null
            }
        }
    }
</script>
