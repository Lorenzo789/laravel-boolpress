import Vue from "vue"; // Non Indispensabile
import VueRouter from 'vue-router';

Vue.use(VueRouter); // Non Indispensabile

// Imporazione Singole Pagine
import HomePage from './pages/HomePage';
import ContactUsPage from './pages/ContactUsPage';
import ShowSinglePost from './pages/ShowSinglePost';
import ShowSingleTag from './pages/ShowSingleTag';
import SearchInPostsPage from './pages/SearchInPostsPage';
import PageNotFound from './pages/errors/PageNotFound';

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
        // inserire la rotta custom qui perche altrimenti lui pensa che search sia un id se è dichiarato dopo la show
        {
            path: '/posts/search',
            name: 'SearchedPost',
            component: SearchInPostsPage,
        },
        {
            path: '/posts/:id',
            name: 'posts-show',
            component: ShowSinglePost,
        },
        {
            path: '/tags/:id',
            name: 'tag-show',
            component: ShowSingleTag,
        },
        {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound,
        },
    ],
})

export default router;