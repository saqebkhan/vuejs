<template>
  <div>
    <Header />
    <h1>Home</h1>
    <p>Your Email is {{it.email}}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum
      maiores accusantium praesentium repellendus quis quidem sit sint officiis
      nemo ipsam distinctio deleniti asperiores provident dolores molestiae,
      perferendis rem expedita blanditiis soluta! Laboriosam, repellat? Rerum ab
      nemo soluta ad sint quia molestiae temporibus architecto voluptate
      voluptatem labore nulla earum neque reiciendis laudantium, corporis
      assumenda! Voluptatum incidunt numquam vitae officiis unde repellendus
      quidem, dolorem, et laudantium nostrum nemo in distinctio nulla, doloribus
      ut assumenda deserunt tenetur earum reiciendis at eos expedita harum?
      Voluptatibus aperiam officiis quibusdam sit. Sed temporibus, ut distinctio
      iure officia eos quaerat rerum ratione. Iste ad officia doloremque!
    </p>
  </div>
</template>
<script>
import Header from './Header.vue'
export default {
    data(){
        return {
            it:{
                email:'',
                pass:''
            }
        }
    },
    components:{
        Header
    },
    methods:{
        products(){
            this.$router.push('/Products')
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
    },
    // computed:{
        created(){
            if(this.$route.params && this.$route.params.email){
                console.log(this.$route.params.email)
                this.it.email = this.$route.params.email
               
            } 
        }
    // }
}
</script>

<style>
ul{
    /* display: inline-block; */
    text-decoration: none;
    background: greenyellow;
    height: 40px;
    text-align: center;
    color: navy;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
li{
    cursor: pointer;
    display: inline;
    margin: 20px;
    font-size: large;
    width: 100px;
}
li:hover{
    background: orange;
    color: blueviolet;
}
.logout-btn{
    float: right;
    border: none;
    width: 80px;
    height:30px;
    margin-top: 4px;
    margin-right: 4px;

    background: rgb(141, 0, 141);
    color: rgb(255, 234, 234);
    border-radius: 5px;
    font-family:'Times New Roman', Times, serif;
    font-size: large;
    cursor: pointer;
}
</style>