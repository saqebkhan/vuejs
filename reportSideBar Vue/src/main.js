import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import {createApp} from 'vue';
import App from './App.vue';

const app = createApp(App)
app.mount("#app");
