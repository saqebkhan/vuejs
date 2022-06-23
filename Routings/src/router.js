import { createRouter, createWebHistory } from 'vue-router';

// import CoachDetail from './pages/coaches/CoachDetail.vue';
// import CoachesList from './pages/coaches/CoachesList.vue';
// import CoachRegistation from './pages/coaches/CoachRegistration.vue';
// import ContactCoach from './pages/requests/ContactCoach.vue';
// import RequestsReceived from './pages/requests/RequestsReceived.vue';
// import NotFound from './pages/NotFound.vue';
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import SignUp from './pages/SignUp.vue'
import Products from './pages/Products.vue'
import Services from './pages/Services.vue'
import ContactUs from './pages/ContactUs.vue'
import AboutUs from './pages/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Login, name:'login' },
    { path: '/Home', component: Home, name:'Home' },
    { path: '/SignUp', component: SignUp },
    { path: '/Products', component: Products },
    { path: '/Services', component: Services },
    { path: '/ContactUs', component: ContactUs },
    { path: '/AboutUs', component: AboutUs },
    // { path: '/coaches', component: CoachesList },
    // { path: '/register', component: CoachRegistation },
    // { path: '/requests', component: RequestsReceived },
    // { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
