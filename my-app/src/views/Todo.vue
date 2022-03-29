<template>
  <div>
    <!-- <h3 v-if="checked.length != items.length" class="pa-4">
      Left Todos, {{ items.length - checked.length }} Out Of {{ items.length }}
    </h3>
    <h3 v-if="checked.length == items.length" class="pa-4 h">All Done</h3> -->
    <!-- <h2>checked {{checked}}</h2> -->
    <v-list>
      <v-subheader>List Todo</v-subheader>
      <div class="head">
        <v-text-field
          label="Add Todo"
          :rules="rules"
          hide-details="auto"
          v-model="text"
          @keyup.enter="adder"
          class="inp"
          :color="color"
        ></v-text-field
        ><v-btn class="mx-2 buttn" fab dark color="indigo" @click="adder">
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </div>
      <p class="err">{{ te }}</p>
      <v-list-item v-for="item in items" :key="item.id" class="list">
        <template v-slot:default>
          <v-list-item-action>
            <v-checkbox :input-value="item.check"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{
              item.task
            }}</v-list-item-title> </v-list-item-content
          ><v-icon @click="del(item.id)">mdi-delete</v-icon>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      items: [
        {
          id: 1,
          task: "Eating",
          check: true,
        },
      ],
      text: "",
      color: "",
      te: "",
      heading: "",
      done: "",
    };
  },
  methods: {
    adder() {
      if (this.text.trim().length == 0) {
        (this.color = "red"), (this.te = "Please Enter The Todo");
      } else {
        this.items.push({
          task: this.text,
          id: Math.random().toString(),
          check: false,
        });
        this.text = "";
        (this.color = ""), (this.te = "");
      }
    },
    del(id) {
      let filteredItems = this.items.filter((ele) => {
        return ele.id !== id;
      });
      this.items = filteredItems;
      let filteredChecks = this.checks.filter((ele) => {
        return ele !== id;
      });
      this.checks = filteredChecks;
    },
  },
};
</script>
<style scoped>
.inp {
  margin: 10px;
}
.list {
  width: 300px;
}
.head {
  display: flex;
  align-items: center;
  width: 300px;
}
.buttn {
  width: 40px;
  height: 40px;
  margin-top: 12px;
}
.err {
  margin-left: 10px;
  color: red;
}
.h {
  color: green;
}
</style>
