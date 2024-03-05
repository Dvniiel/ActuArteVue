import { defineStore } from 'pinia';
import axios from 'axios';

export const useDetallesStore = defineStore('detalles', {
    state: () => ({
      obra: null,
    }),
  
    actions: {
      async fetchObra(idObra: string) {
        try {
          const response = await axios.get(`http://localhost:8001/Obras/${idObra}`); // Corregido aquí
          this.obra = response.data;
        } catch (error) {
          console.error('Error al obtener los detalles de la obra: ', error);
        }
      }
    }
  });