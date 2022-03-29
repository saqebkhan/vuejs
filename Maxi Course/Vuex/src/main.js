import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    adder(state, payload) {
      state.count = state.count + payload;
    },
  },
});
app.use(store);

app.mount('#app');
