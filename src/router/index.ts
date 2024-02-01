import { createRouter, createWebHistory } from "vue-router";
import InicioView from "../views/InicioView.vue"
import ObrasView from "../views/ObrasView.vue"
import ReservasView from "../views/ReservasView.vue"
import ContactoView from "../views/ContactoView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name:'inicio',
            component: InicioView
        },
        {
            path: '/obras',
            name: 'obras',
            component: ObrasView
        },
        {
            path: '/reservas',
            name: 'reservas',
            component: ReservasView
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: ContactoView
        },

    ]
})

export default router