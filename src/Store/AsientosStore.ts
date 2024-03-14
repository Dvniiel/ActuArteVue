import { defineStore } from 'pinia';
import axios from 'axios';

export const useAsientosStore = defineStore('asientos', {
  state: () => ({
    asientosOcupados: {} as Record<string, number[]>,
  }),
  actions: {
    async reservarAsientos(id: number, sesionId: number, asientos: number[]) {
      try {
        // Realiza la petición POST al backend para reservar los asientos
        await axios.post(`http://localhost:8001/Obras/${id}/Sesion/${sesionId}`, asientos);
        // Recarga los asientos para obtener el estado actualizado desde el backend
        await this.cargarAsientos(id, sesionId);
      } catch (error) {
        console.error('Error al reservar asientos:', error);
      }
    },
    async cargarAsientos(id: number, sesionId: number) {
      try {
        const response = await axios.get(`http://localhost:8001/Obras/${id}/Session`, { params: { sessionId: sesionId } });
        // Actualiza el estado con los IDs de los asientos ocupados
        this.asientosOcupados[`${id}_${sesionId}`] = response.data;
      } catch (error) {
        console.error('Error al cargar asientos:', error);
      }
    }
  },
  getters: {
    getAsientosOcupados: (state) => (id: number, sesionId: number) => {
      // Devuelve los IDs de los asientos ocupados para una obra y sesión específicas
      return state.asientosOcupados[`${id}_${sesionId}`] || [];
    }
  }
});