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
          "http://alejandroapi.retocsv.es/Obras"
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
        "http://alejandroapi.retocsv.es/Obras/aclamadas"
      );
      this.obras = response.data;
    },

    async fetchObrasRecientes() {
      const response = await axios.get(
        "http://alejandroapi.retocsv.es/Obras/recientes"
      );
      this.obras = response.data;
    },

    async fetchUltimasSesiones() {
      const response = await axios.get(
        "http://alejandroapi.retocsv.es/Obras/ultimasSesiones"
      );
      this.obras = response.data;
    },
  },
});
