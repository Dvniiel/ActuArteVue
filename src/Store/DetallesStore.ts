import { defineStore } from 'pinia';
import axios from 'axios';

// Definir una interfaz para el tipo de 'obra'
interface Obra {
  idObra: number;
  nombreObra: string;
  descObra: string;
  autorObra: string;
  directorObra: string;
  valoracionObra: number;
  duracionObra: number;
}

export const useDetallesStore = defineStore('detalles', {
  state: () => ({
    // Inicializar 'obra' como nulo, pero especificar su tipo esperado como 'Obra' o 'null'
    obra: null as Obra | null,
  }),

  actions: {
    async fetchObra(idObra: string) {
      try {
        const response = await axios.get(`http://localhost:8001/Obras/${idObra}`);
        // Asegurarse de que la respuesta se ajusta al tipo 'Obra'
        this.obra = response.data as Obra;
      } catch (error) {
        console.error('Error al obtener los detalles de la obra: ', error);
      }
    }
  }
});