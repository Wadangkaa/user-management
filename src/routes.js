import User from './components/User.vue'
import AddUser from './components/AddUser.vue'

import { createRouter, createWebHistory } from "vue-router";

const routes =[
    {
        name: 'home',
        path: '/',
        component: User
    },
    {
        name: 'addUser',
        path: '/addUser',
        component: AddUser
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;