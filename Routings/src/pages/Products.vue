<template>
    <div>
        <Header />
        <h1>Products</h1>
        <div class="main" v-for="item in items" :key="item.img">
            <img :src="item.img" alt="" style="margin-top:40px">
            <h3>{{item.heading}}</h3>
            <p>{{item.description}}</p>
        </div>
    </div>
</template>
<script>
import Header from './Header.vue' 
export default {
    data(){
        return{
            items:[
                {
                    img:"https://pickupbiz.com/products/Zeeshan/whychooseus/service-6.svg",
                heading:"Software Development",
                description:"We have strong experience in Web Application development and have skillful professional with creative minds"
            },
                {
                    img:"https://pickupbiz.com/products/Zeeshan/whychooseus/service-5.svg",
                heading:"Mobile App Development",
                description:"We have sound experience in mobile App Development, our professional having exposure on both Android and IOS"
            },
                {
                    img:"https://pickupbiz.com/products/Zeeshan/whychooseus/service-4.svg",
                heading:"UI / UX Designing",
                description:"Our amazing designers with creative skills on Human-First approach to product and services of app designing"
            },
                {
                    img:"https://pickupbiz.com/products/Zeeshan/whychooseus/service-3.svg",
                heading:"Digital Marketing",
                description:"We are expert in promotion of products and Services, we have impactful exposure in digital marketing experience"
            },
                {
                    img:"https://pickupbiz.com/products/Zeeshan/whychooseus/service-2.svg",
                heading:"Cloud Services",
                description:"Our experts on Cloud services and DevOps Solutions implementations with Cloud Migration experiences"
            },
                {
                    img:"https://pickupbiz.com/products/Zeeshan/whychooseus/service-1.svg",
                heading:"Maintenance",
                description:"Our skillful people available to provide support 24X7 to steady state projects and products with high availability"
            }
            ]
        }
    },
    components:{
        Header
    }
}
</script>
<style scoped>
.main{
    border: 1px solid grey;
    width: 400px;
    height: 400px;
    text-align: center;
    display: inline-block;
    margin: 12px;
}
</style>