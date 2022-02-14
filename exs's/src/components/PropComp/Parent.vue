<template>
  <div>
    <h1>Dealing With Props</h1>
    <table>
      <tr>
        <th>Sr. No.</th>
        <th>Name</th>
        <th>Experience</th>
        <th>Technology</th>
        <th>Position</th>
      </tr>
      <Child
        v-for="item in names"
        :key="item"
        :name="item.name"
        :tech="item.tech"
        :id="item.id"
        :exp="item.exp"
        :post="item.post"
      />
    </table>
  </div>
</template>
<script>
import Child from "./Child.vue";
export default {
  data() {
    return {
      names: [
        {
          id: 1,
          name: "Saqeb Khan",
          exp: "1 Year",
          tech: "ReactJs, React-Native, React-Redux",
          post: "Software Engineer",
        },
        {
          id: 2,
          name: "Tohit Khan",
          exp: "8 Months",
          tech: "Flutter",
          post: "Trainee Engineer",
        },
        {
          id: 3,
          name: "John Doe",
          exp: "5 Year",
          tech: "AngularJs",
          post: "Senior Software Engineer",
        },
        {
          id: 4,
          name: "Merry Jane",
          exp: "12 Year",
          tech: "Python",
          post: "Software Architect",
        },
        {
          id: 5,
          name: "Joe Sixpack.",
          exp: "1 Year",
          tech: "PHP",
          post: "Full Stack Developer",
        },
        {
          id: 6,
          name: "Everyman",
          exp: "1 Year",
          tech: "NodeJs",
          post: "Senior Engineer",
        },
      ],
    };
  },
  components: {
    Child,
  },
};
</script>
