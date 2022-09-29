import Vue from "vue"; // Non Indispensabile
import VueRouter from 'vue-router';

Vue.use(VueRouter); // Non Indispensabile

// Imporazione Singole Pagine


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            name: '',
            component: '',
        }
    ],
})

export default router;