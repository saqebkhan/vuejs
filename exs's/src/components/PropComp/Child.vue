<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ name }}</td>
    <td>{{ exp }}</td>
    <td>{{ tech }}</td>
    <td>{{ post }}</td>
  </tr>
</template>

<script>
export default {
  props: ["name", "tech", "id", "exp", "post"],
};
</script>
<style>
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
h1 {
  color: #ff9100;
  font-size: 54px;
  font-family: "Arial Narrow Bold";
  line-height: 58px;
  padding: 20px;
  text-align: center;
}
</style>
