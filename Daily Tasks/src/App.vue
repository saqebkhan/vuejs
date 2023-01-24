<template>
  <div>
    <!-- <input type="text" placeholder="Search" name="" id="" v-model="searchInp" />
    <div>
      <h1 v-for="element in postsNames" :key="element.id">
        {{ element }}
      </h1>
      <div v-for="item in filteredPosts" :key="item.id" class="card">
        <h2>{{ item.title }}</h2>
        <p>{{ item.body }}</p>
      </div>
    </div>
    <button v-for="number in 10" :key="number">{{ number }}</button> -->
    <div>
      <form
        @submit.prevent="addMember"
        style="display: inline-block; margin: 20px; float: left"
      >
        <h2>Add member</h2>
        <input
          type="text"
          name=""
          id=""
          placeholder="Name"
          v-model="name"
          style="margin: 12px"
        />
        <input
          type="number"
          placeholder="Vasuli"
          v-model="vasuli"
          style="margin: 12px"
        />
        <button>Add</button>
      </form>
      <form action="" style="display: inline-block" @submit.prevent="addKharch">
        <h2>Daily Kharch</h2>
        <input
          type="number"
          placeholder="Day"
          v-model="day"
          style="margin: 12px"
        />
        <input
          type="number"
          placeholder="Kharch"
          v-model="kharch"
          style="margin: 12px"
        />
        <input
          type="number"
          placeholder="Total Members"
          v-model="totalMembers"
          style="margin: 12px"
        />
        <button>Save</button>
      </form>
    </div>
    <div>
      <table style="margin-top: 12rem">
        <tr>
          <th>Name</th>
          <th>Vasuli</th>
          <th>Balance / due</th>
          <th v-for="item in days" :key="item">{{ item }}</th>
        </tr>
        <tr v-for="item in members" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.vasuli }}</td>
          <td>{{ Math.round(item.vasuli - kharchPerPerson) }}</td>
          <td>{{ item.day1 }}</td>
          <td>{{ item.day2 }}</td>
          <td>{{ item.day3 }}</td>
          <td>{{ item.day4 }}</td>
          <td>{{ item.day5 }}</td>
          <td>{{ item.day6 }}</td>
          <td>{{ item.day7 }}</td>
          <td>{{ item.day8 }}</td>
          <td>{{ item.day9 }}</td>
          <td>{{ item.day10 }}</td>
        </tr>
      </table>
      <h2>Total Vasuli</h2>
      <h3>{{ totalVasuli }}</h3>
      <h2>Total Kharch</h2>
      <h3>{{ totalKharch }}</h3>
      <h2>Balance / Due</h2>
      <h3>{{ totalVasuli - totalKharch }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      members: [],
      vasuli: 0,
      totalMembers: 0,
      kharch: 0,
      day: 0,
      days: [],
      kharchPerPerson: 0,
      totalVasuli: 0,
      totalKharch: 0,
      // posts: [],
      // postsNames: [],
      // searchInp: "",
      // perPage: 10,
      // page: 1,
    };
  },
  methods: {
    addKharch() {
      let equalAmount = this.kharch / this.totalMembers;
      this.totalKharch += this.kharch;
      this.kharchPerPerson += equalAmount;
      console.log(this.kharchPerPerson, "kharch");
      console.log(equalAmount, "eq");
      let newKey = "day" + this.day;
      this.members.forEach((ele) => {
        ele[newKey] = Number(equalAmount.toFixed(2));
      });
      this.days.push(this.day);
      // this.totalVasuli = 0;
      console.log(this.members, "mems");
      this.day = "";
      this.kharch = "";
      this.totalMembers = "";
    },
    addMember() {
      this.members.push({
        name: this.name,
        vasuli: this.vasuli,
      });
      this.totalVasuli += this.vasuli;
      this.name = "";
      this.vasuli = "";
      console.log(this.totalVasuli, "totalVasuli");
    },
    // myData() {
    //   fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res) => {
    //       if (res) {
    //         return res.json();
    //       }
    //     })
    //     .then((data) => {
    //       this.posts = data;
    //     });
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => {
    //       if (res) {
    //         return res.json();
    //       }
    //     })
    //     .then((data) => {
    //       data.map((element) =>
    //         this.posts.forEach((ele) => {
    //           ele.name = element.name;
    //         })
    //       );
    //     });
    //   console.log(this.posts);
    // },
    // next() {
    //   this.page++;
    // },
    // pre() {
    //   this.page--;
    // },
  },
  computed: {
    // filteredPosts() {
    //   let data = this.posts.filter((item) => {
    //     return item.title.toLowerCase().includes(this.searchInp.toLowerCase());
    //   });
    //   return data;
    // },
    // lastPage() {
    //   let lastPage = Math.ceil(this.posts.length / this.perPage);
    //   return lastPage;
    // },
  },
  // created() {
  //   this.myData();
  // },
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px gray;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid green;
}
th,
td {
  text-align: left;
  padding: 15px;
}
tr:nth-child(even) {
  background-color: rgb(203, 255, 194);
  color: rgb(0, 0, 0);
}
th {
  background: blue;
  color: white;
}
tr:nth-child(odd):hover {
  background-color: rgba(251, 255, 0, 0.699);
}
tr:nth-child(even):hover {
  background-color: rgb(92, 255, 71);
}
div {
  background-color: rgb(255, 252, 226);
}
h2 {
  color: #ff9100;
  font-size: 54px;
  font-family: "Arial Narrow Bold";
  line-height: 58px;
  padding: 20px;
  text-align: center;
}
</style>


