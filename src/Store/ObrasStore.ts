import { defineStore } from 'pinia';
import axios from 'axios';

interface Obra {
  idObra: number;
  nombreObra: string;
  imagen: string;
}

export const useObrasStore = defineStore('obras', {
    
    state: () => ({
      obras: [] as Obra[],
    }),

    actions: {
      async fetchObras() {
        try {
          const response = await axios.get('http://localhost:8001/Obras');
          this.obras = response.data;
        } catch (error) {
          console.error('Hubo un error al obtener las obras: ', error);
        }
      }
    }
});