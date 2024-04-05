import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

interface Usuario {
  idUsuario: number;
  nombreUsuario: string;
  passwordUsuario: string;
  isAdmin: boolean;
}
let usuario: Usuario;
export const useLoginStore = defineStore("login", {
  state: () => ({
    obra: null,
  }),

  actions: {
    async fetchLogin(nombreusuario: string, passwordUsuario: string) {
      try {
        const response = await axios.post(
          "http://ad59716b915d74f619fe1dde0e2ca2c7-864283579.us-east-1.elb.amazonaws.com/Credenciales/login",
          {
            nombreUsuario: nombreusuario,
            passwordUsuario: passwordUsuario,
          }
        );
        usuario = response.data;
        if (usuario.isAdmin === false) {
          router.push("/register");
        } else {
          router.push("/dashboard");
        }
      } catch (error) {
        console.error("Error al iniciar sesión: ", error);
      }
    }, // This is the missing closing "}"
  },
});
