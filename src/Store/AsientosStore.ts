import { defineStore } from 'pinia';
import axios from 'axios';

export const useAsientosStore = defineStore('asientos', {
  state: () => ({
    asientosOcupados: [] as number[], 
  }),

  actions: {
    async fetchAsientosOcupados(idObra: number, sessionId: number) {
      try {
        const response = await axios.get(`http://localhost:8001/Obras/${idObra}/sesion/`);
        this.asientosOcupados = response.data;
      } catch (error) {
        console.error('Error al obtener los asientos ocupados:', error);
      }
    },

    async reservarAsientos(idObra: number, sessionId: number, asientosParaReservar: number[]) {
      try {
        await axios.post(`http://localhost:8001/Obras/${idObra}/sesion${sessionId}/`, asientosParaReservar);
        this.asientosOcupados.push(...asientosParaReservar);
      } catch (error) {
        console.error('Error al reservar los asientos:', error);
      }
    }

  }
});