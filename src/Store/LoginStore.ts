import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStore = defineStore("login", {
  state: () => ({
    obra: null,
  }),

  actions: {
    async fetchLogin(nombreusuario: string, passwordUsuario: string) {
      try {
        const response = await axios.post(
          "http://alejandroapi.retocsv.es/Usuarios/login",
          {
            nombreUsuario: nombreusuario,
            passwordUsuario: passwordUsuario,
          }
        );
        this.obra = response.data;
      } catch (error) {
        console.error("Error al iniciar sesión: ", error);
      }
    },
  },
});
