import { defineStore } from 'pinia';
import axios from 'axios';

export const useInicioStore = defineStore('inicio', {
  state: () => ({
    obras: [],
  }),

  actions: {
    async fetchObras() {
      try {
        const response = await axios.get('http://localhost:8001/Obras');
        this.obras = response.data.slice(0, 3);
      } catch (error) {
        console.error('Error al obtener las obras: ', error);
      }
    }
  }

});