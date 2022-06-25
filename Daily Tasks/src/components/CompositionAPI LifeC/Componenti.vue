<template>
    <div>
        <h1>{{data}}</h1>
        <h1>{{meta}}</h1>
        <h1>{{mounted}}</h1>
        <h1>{{update}}</h1>
        <button @click.prevent="data='ch'">ch</button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        var data = ref('');
        var meta = ref('');
        var mounted = ref('');
        var update = ref('');
        return {
            data,
            meta,
            mounted,
            update
            }
    },
    beforeMount(){
        this.meta = 'before mount';
        return this.meta
    },
    mounted(){
        this.mounted = 'mounted';
        return this.mounted
    },
    onUpdate(){
        this.update = 'upda';
        return this.update
    },
    // update(){
    //     console.log('update')
    // }
}
</script>
