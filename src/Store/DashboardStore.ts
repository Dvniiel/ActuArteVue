import { defineStore } from "pinia";
import axios from "axios";

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

export const useObrasStore = defineStore("obras", {
  state: () => ({
    obras: [] as Obra[],
  }),

  actions: {
    async fetchObras() {
      try {
        const response = await axios.get("http://localhost:8001/Obras");
        this.obras = response.data;
      } catch (error) {
        console.error("Hubo un error al obtener las obras: ", error);
      }
    },

    async addObra(nuevaObra: Omit<Obra, "idObra">) {
      try {
        const response = await axios.post(
          "http://localhost:8001/Obras",
          nuevaObra,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        this.obras.push(response.data);
      } catch (error) {
        console.error("Hubo un error al añadir la obra: ", error);
      }
    },

    async updateObra(obraActualizada: Obra) {
      if (!obraActualizada.idObra) return;
      try {
        await axios.put(
          `http://localhost:8001/Obras/${obraActualizada.idObra}`,
          obraActualizada,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const index = this.obras.findIndex(
          (obra) => obra.idObra === obraActualizada.idObra
        );
        if (index !== -1) {
          this.obras[index] = obraActualizada;
        }
      } catch (error) {
        console.error("Hubo un error al actualizar la obra: ", error);
      }
    },

    async deleteObra(idObra: number) {
      try {
        await axios.delete(`http://localhost:8001/Obras/${idObra}`);
        this.obras = this.obras.filter((obra) => obra.idObra !== idObra);
      } catch (error) {
        console.error("Hubo un error al eliminar la obra: ", error);
      }
    },
  },
});
