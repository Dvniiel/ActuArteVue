import { createRouter, createWebHistory } from "vue-router";
import InicioView from "@/views/InicioView.vue"
import ObrasView from "@/views/ObrasView.vue"
import ReservasView from "../views/ReservasView.vue"
import ContactoView from "../views/ContactoView.vue"
import LoginView from "../views/LoginView.vue"
import DetallesView from "../views/DetallesView.vue"
import DashboardView from "../views/DashboardView.vue"
import NotFound from "../components/NotFound.vue"

const routes = [
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
];

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
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/detalles',
            name: 'detalles',
            component: DetallesView
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/obras/:id',
            name: 'Detalles',
            component: () => import('@/views/DetallesView.vue')
        },
        {
            path: '/reservas/:obraId',
            name: 'Reservas',
            component: () => import('@/views/ReservasView.vue')
        }

    ]
})

export default router