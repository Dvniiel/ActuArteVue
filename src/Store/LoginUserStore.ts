// LoginUserStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

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

        // Si no es admin, redirigir a la pantalla principal
        if (!this.usuario.isAdmin) {
          router.push("/");
        } else {
          // Si es admin, por alguna razón se logueó aquí, redirigir al dashboard
          router.push("/dashboard");
        }
      } catch (error) {
        console.error("Error al iniciar sesión: ", error);
        alert("Credenciales inválidas o error de conexión");
      }
    },
  },
});