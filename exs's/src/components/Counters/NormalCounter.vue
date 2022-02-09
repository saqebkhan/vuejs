<template>
    <div>
        <p>{{count}}</p><button @click="count++">+</button>
    <button @click="count<1?0:count--">-</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            count:0
        }
    }
}
</script>