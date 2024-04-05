import { defineStore } from 'pinia';
import axios from 'axios';

export interface Obra {
  idObra?: number;
  nombreObra: string;
  valoracionObra: number;
  autorObra: string;
  directorObra: string;
  duracionObra: string;
  descObra: string;
  imagen: string;
}

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    obras: [] as Obra[],
    isLoaded: false,
  }),

  actions: {
    async fetchObras(force = false) {
      if (this.isLoaded && !force) return;
      try {
        const response = await axios.get('http://ad59716b915d74f619fe1dde0e2ca2c7-864283579.us-east-1.elb.amazonaws.com/Obras');
        this.obras = response.data;
        this.isLoaded = true;
      } catch (error) {
        console.error('Hubo un error al obtener las obras: ', error);
      }
    },

    async addObra(nuevaObra: Omit<Obra, 'idObra'>) {
      try {
        await axios.post('http://ad59716b915d74f619fe1dde0e2ca2c7-864283579.us-east-1.elb.amazonaws.com/Obras', nuevaObra, {
          headers: { 'Content-Type': 'application/json' },
        });
        await this.fetchObras(true); // Recargar obras después de añadir
      } catch (error) {
        console.error('Hubo un error al añadir la obra: ', error);
        throw error;
      }
    },

    async updateObra(obraActualizada: Obra) {
      if (!obraActualizada.idObra) return;
      try {
        await axios.put(`http://ad59716b915d74f619fe1dde0e2ca2c7-864283579.us-east-1.elb.amazonaws.com/Obras/${obraActualizada.idObra}`, obraActualizada, {
          headers: { 'Content-Type': 'application/json' },
        });
        await this.fetchObras(true); // Recargar obras después de actualizar
      } catch (error) {
        console.error('Hubo un error al actualizar la obra: ', error);
        throw error;
      }
    },

    async deleteObra(idObra: number) {
      try {
        await axios.delete(`http://ad59716b915d74f619fe1dde0e2ca2c7-864283579.us-east-1.elb.amazonaws.com/Obras/${idObra}`);
        await this.fetchObras(true); // Recargar obras después de eliminar
      } catch (error) {
        console.error('Hubo un error al eliminar la obra: ', error);
      }
    },
  },
});