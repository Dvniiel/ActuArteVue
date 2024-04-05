import { defineStore } from "pinia";
import axios from "axios";

interface Obra {
  idObra: number;
  nombreObra: string;
  imagen: string;
}

export const useObrasStore = defineStore("obras", {
  state: () => ({
    obras: [] as Obra[],
    searchQuery: "",
  }),

  getters: {
    obrasFiltradas: (state) => {
      if (!state.searchQuery) return state.obras;
      return state.obras.filter((obra) =>
        obra.nombreObra.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },

  actions: {
    async fetchObras() {
      try {
        const response = await axios.get(
          "http://ad59716b915d74f619fe1dde0e2ca2c7-864283579.us-east-1.elb.amazonaws.com/Obras"
        );
        this.obras = response.data;
      } catch (error) {
        console.error("Hubo un error al obtener las obras: ", error);
      }
    },

    setSearchQuery(query: string) {
      this.searchQuery = query;
    },

    async fetchObrasAclamadas() {
      const response = await axios.get(
        "http://ad59716b915d74f619fe1dde0e2ca2c7-864283579.us-east-1.elb.amazonaws.com/Obras/aclamadas"
      );
      this.obras = response.data;
    },

    async fetchObrasRecientes() {
      const response = await axios.get(
        "http://ad59716b915d74f619fe1dde0e2ca2c7-864283579.us-east-1.elb.amazonaws.com/Obras/recientes"
      );
      this.obras = response.data;
    },

    async fetchUltimasSesiones() {
      const response = await axios.get(
        "http://ad59716b915d74f619fe1dde0e2ca2c7-864283579.us-east-1.elb.amazonaws.com/Obras/ultimasSesiones"
      );
      this.obras = response.data;
    },
  },
});
