<template>
    <div>
         <ul>
      <li @click="Home">Home</li>
      <li @click="products">Products</li>
      <li @click="services">Services</li>
      <li @click="contactUs">Contact Us</li>
      <li @click="aboutUs">About Us</li>
    <button @click="logOut" class="logout-btn">Log Out</button>
    </ul>
    </div>
</template>
<script>
export default {
    methods:{
        products(){
            this.$router.push('/Products')
        },
        Home(){
            this.$router.push('/Home')
        },
        logOut(){
            this.$router.push('/')
        },
        services(){
            this.$router.push('/Services')
        },
        contactUs(){
            this.$router.push('/ContactUs')
        },
        aboutUs(){
            this.$router.push('/AboutUs')
        },
    }
}
</script>