import { defineStore } from 'pinia';
import axios from 'axios';

interface Obra {
  idObra: number;
  nombreObra: string;
  autorObra: string;
  directorObra: string;
  valoracionObra: number;
  duracionObra: number;
}

export const useDetallesStore = defineStore('detalles', {
  state: () => ({
    obra: null as Obra | null,
  }),

  actions: {
    async fetchObra(idObra: string) {
      try {
        const response = await axios.get(`http://ad59716b915d74f619fe1dde0e2ca2c7-864283579.us-east-1.elb.amazonaws.com/Obras/${idObra}`);
        this.obra = response.data;
      } catch (error) {
        console.error("Error al obtener los detalles de la obra:", error);
      }
    },
  },
});