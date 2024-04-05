import { defineStore } from "pinia";
import axios from "axios";

export const useInicioStore = defineStore("inicio", {
  state: () => ({
    obras: [],
  }),

  actions: {
    async fetchObras() {
      try {
        const response = await axios.get(
          "http://ad59716b915d74f619fe1dde0e2ca2c7-864283579.us-east-1.elb.amazonaws.com/Obras"
        );
        this.obras = response.data.slice(13, 16);
      } catch (error) {
        console.error("Error al obtener las obras: ", error);
      }
    },
  },
});
