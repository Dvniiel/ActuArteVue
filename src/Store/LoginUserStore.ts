// LoginUserStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";
import { useUserStore } from './UserStore';

interface Usuario {
  idUsuario: number;
  nombreUsuario: string;
  passwordUsuario: string;
  isAdmin: boolean;
}

export const useLoginUserStore = defineStore("loginUser", {
  state: () => ({
    usuario: null as Usuario | null,
  }),
  actions: {
    async loginUser(nombreUsuario: string, passwordUsuario: string) {
      try {
        const response = await axios.post(
          "http://ad59716b915d74f619fe1dde0e2ca2c7-864283579.us-east-1.elb.amazonaws.com/Credenciales/login",
          {
            nombreUsuario,
            passwordUsuario,
          }
        );
        this.usuario = response.data;

        // Establece la información del usuario en UserStore
        const userStore = useUserStore();
        userStore.setUser(this.usuario);

        // Redirige al usuario según si es administrador o no
        if (this.usuario.isAdmin) {
          router.push('/dashboard');
        } else {
          router.push('/');
        }
      } catch (error) {
        console.error('Error al iniciar sesión: ', error);
        alert('Credenciales inválidas o error de conexión');
      }
    },

    logoutUser() {
      // Limpia la información del usuario y redirige a la página de inicio de sesión
      this.usuario = null;
      const userStore = useUserStore();
      userStore.clearUser();
      router.push('/login');
    },

    checkLoginStatus() {
      // Verifica si hay datos de sesión guardados (puedes usar localStorage o cookies)
      const userData = localStorage.getItem('userData');
      if (userData) {
        this.usuario = JSON.parse(userData);
        const userStore = useUserStore();
        userStore.setUser(this.usuario);
      }
    },
  },
});