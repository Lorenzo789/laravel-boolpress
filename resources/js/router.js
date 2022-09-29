import Vue from "vue"; // Non Indispensabile
import VueRouter from 'vue-router';

Vue.use(VueRouter); // Non Indispensabile

// Imporazione Singole Pagine
import HomePage from './pages/HomePage';
import ShowSinglePost from './pages/ShowSinglePost';
import ContactUsPage from './pages/ContactUsPage';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactUsPage,
        },
        {
            path: '/posts/:id',
            name: 'show',
            component: ShowSinglePost,
        }
    ],
})

export default router;