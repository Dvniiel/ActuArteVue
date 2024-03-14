import { defineStore } from 'pinia';
import axios from 'axios';

export const useAsientosStore = defineStore('asientos', {
  state: () => ({
    asientosOcupados: {} as Record<string, number[]>,
  }),

  actions: {
    async reservarAsientos(id: number, sesionId: number, asientos: number[]) {
      try {
        await axios.post(`http://localhost:8001/Obras/${id}/Sesion/${sesionId}`, asientos);
        await this.cargarAsientos(id, sesionId);
      } catch (error) {
        console.error('Error al reservar asientos:', error);
      }
    },

    async cargarAsientos(id: number, sesionId: number) {
      try {
        const response = await axios.get(`http://localhost:8001/Obras/${id}/Session`, { params: { sessionId: sesionId } });
        this.asientosOcupados[`${id}_${sesionId}`] = response.data;
      } catch (error) {
        console.error('Error al cargar asientos:', error);
      }
    }

  },

  getters: {
    getAsientosOcupados: (state) => (id: number, sesionId: number) => {
      return state.asientosOcupados[`${id}_${sesionId}`] || [];
    }
  }
});