<template>
    <div class="signup-section">
        <h1>SignUp</h1>
        <input type="text" placeholder="Enter Name"><br>
        <input type="text" placeholder="Enter Email"><br>
        <input type="password" placeholder="Enter Password"><br>
        <input type="password" placeholder="Confirm Password"><br>
        <button @click="Home">Submit</button>
        <p><b>Description : </b>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quos, reprehenderit labor, distinctio harum.</p>
    </div>
</template>
<script>
export default {
    methods:{
        Home(){
            this.$router.push('/Home')
        }
    }
}
</script>
<style scoped>
.signup-section{
    border: 1px solid red;
    width: 320px;
    height: 500px;
    text-align: center;
    margin-left: 37%;
}
input{
    padding: 8px;
    margin: 20px;
    border:none;
    border-bottom: 1px solid red;
}
button{
    background: rgb(232, 28, 255);
    color: rgb(255, 231, 231);
    border-radius: 12px;
    border: none;
    width: 90px;
    height: 20px;
    cursor: pointer;

}
</style>