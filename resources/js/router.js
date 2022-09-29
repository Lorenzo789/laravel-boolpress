import Vue from "vue"; // Non Indispensabile
import VueRouter from 'vue-router';

Vue.use(VueRouter); // Non Indispensabile

// Imporazione Singole Pagine
import HomePage from './pages/HomePage';
import ContactUsPage from './pages/ContactUsPage';
import ShowSinglePost from './pages/ShowSinglePost';

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
            name: 'posts-show',
            component: ShowSinglePost,
        }
    ],
})

export default router;