<template>
<!------------------MADE IN VUETIFY------------------------->
  <div>
    <v-text-field
      :label="label"
      :rules="rules"
      hide-details="auto"
      v-model="inp"
    ></v-text-field>
    <v-btn @click="add" elevation="2">Add</v-btn>
    <v-list v-for="item in items" :key="item.id" flat>
      <v-list-item>
        {{ item.data }}
        <v-btn icon @click="del(item.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn icon @click="edit(item.id)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inp: "",
      editTask: null,
      label: "Add Todo",
      items: [
        {
          id: 1,
          data: "x",
        },
        {
          id: 2,
          data: "y",
        },
        {
          id: 3,
          data: "z",
        },
      ],
    };
  },
  methods: {
    add() {
      this.label = "Add Todo";
      if (this.editTask == null) {
        this.items.push({
          id: this.items.length + 1,
          data: this.inp,
        });

        this.inp = "";
      } else {
        this.items[this.editTask - 1].data = this.inp;
        this.editTask = null;
        this.inp = "";
      }
    },
    del(id) {
      let filteredItems = this.items.filter((ele) => {
        return ele.id !== id;
      });
      this.items = filteredItems;
    },
    edit(item) {
      this.label = "Edit";
      this.items.filter((ele) => {
        if (ele.id == item) {
          this.inp = ele.data;
        }
      });
      this.editTask = item;
    },
  },
};
</script>
