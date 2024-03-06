<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useObrasStore, type Obra } from "@/store/DashboardStore";

const obrasStore = useObrasStore();
onMounted(() => {
  obrasStore.fetchObras();
});

const defaultObra = {
  nombreObra: "",
  valoracionObra: 0,
  autorObra: "",
  directorObra: "",
  duracionObra: "",
  descObra: "",
  imagen: "",
};

const obraSeleccionada = ref({ ...defaultObra });
const modoFormulario = ref("");

const obras = computed(() => obrasStore.obras);

function handleDelete(idObra: number) {
  obrasStore.deleteObra(idObra);
}

function handleAdd() {
  obraSeleccionada.value = { ...defaultObra };
  modoFormulario.value = "añadir";
}

function handleEdit(obra: Obra) {
  obraSeleccionada.value = { ...obra };
  modoFormulario.value = "editar";
}

function handleSubmit() {
  if (modoFormulario.value === "añadir") {
    obrasStore.addObra({ ...obraSeleccionada.value });
  } else if (modoFormulario.value === "editar") {
    obrasStore.updateObra(obraSeleccionada.value);
  }
  obraSeleccionada.value = { ...defaultObra };
  modoFormulario.value = "";
}

function handleCancel() {
  obraSeleccionada.value = { ...defaultObra };
  modoFormulario.value = "";
}
</script>

<template>
  <div class="container-dashboard">
    <main>
      <button @click="handleAdd" class="btn-añadir-obras">Añadir Obra</button>
      <div class="recent_order">
        <h1>Listado de Obras</h1>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>ID de la Obra</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="obra in obras" :key="obra.idObra">
              <td>{{ obra.nombreObra }}</td>
              <td>{{ obra.idObra }}</td>
              <td class="primary" @click="handleEdit(obra)">
                <i class="ri-pencil-fill"></i>
              </td>
              <td
                class="primary"
                @click="obra.idObra && handleDelete(obra.idObra)"
              >
                <i class="ri-delete-bin-line"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Formulario para añadir o editar obras -->
      <div
        v-if="
          obraSeleccionada &&
          (modoFormulario === 'añadir' || modoFormulario === 'editar')
        "
        class="form-container"
      >
        <form @submit.prevent="handleSubmit">
          <input
            v-model="obraSeleccionada.nombreObra"
            placeholder="Nombre de la obra"
            required
          />
          <input
            v-model="obraSeleccionada.descObra"
            placeholder="Descripción de la obra"
            required
          />
          <input
            v-model="obraSeleccionada.valoracionObra"
            placeholder="Valoración de la obra"
            type="number"
            required
          />
          <input
            v-model="obraSeleccionada.directorObra"
            placeholder="Director de la obra"
            required
          />
          <input
            v-model="obraSeleccionada.autorObra"
            placeholder="Autor de la obra"
            required
          />
          <input
            v-model="obraSeleccionada.imagen"
            placeholder="Imagen de la obra"
            required
          />
          <input
            v-model="obraSeleccionada.duracionObra"
            placeholder="Duración de la obra"
            required
          />
          <button type="submit">Guardar</button>
          <button type="button" @click="handleCancel">Cancelar</button>
        </form>
      </div>
    </main>
  </div>
</template>





<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

:root {
  --clr-primary: #896a4c;
  --clr-success: #41f1b6;
  --clr-white: #fff;
  --clr-info-dark: #7d8da1;
  --clr-info-light: #dce1eb;
  --clr-dark: #363949;
  --clr-warnig: #ff4e4e;
  --clr-light: rgba(132, 139, 200, 0.18);
  --clr-dark-variant: #677483;
  --clr-color-background: #f6f6f9;

  --card-border-radius: 2rem;
  --border-radius-1: 0.4rem;
  --border-radius-2: 0.8rem;
  --border-radius-3: 1.2rem;

  --card-padding: 1.8rem;
  --padding-1: 1.2rem;
  --box-shadow: 0 2rem 3rem var(--clr-light);
}

* {
  box-sizing: border-box;
  text-decoration: none;
  border: 0;
  list-style: none;
  appearance: none;
}

body {
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 100vh;
  font-size: 0.88rem;
}

a {
  color: var(--clr-dark);
}

h1 {
  font-weight: 800;
  font-size: 1.8rem;
}

h2 {
  font-size: 1.4rem;
}

h3 {
  font-size: 0.87rem;
}

h4 {
  font-size: 0.8;
}

h5 {
  font-size: 0.77rem;
}

small {
  font-size: 0.75rem;
}

p {
  color: var(--clr-dark-variant);
}

b {
  color: var(--clr-dark);
}

/*-------------MAIN SECTION--------------*/

.container-dashboard {
  margin-top: 20rem;
  display: flex;
  text-align: center;
  justify-content: center;
  position: relative;
  width: 60%;
  transform: translate(30%, 0%);
}

main {
  width: 100%;
  text-align: center;
  justify-content: center;
}

main input {
  background-color: transparent;
  border: 0;
  outline: 0;
  color: var(--clr-dark);
}

main h1 {
  color: var(--clr-dark);
}

main .recent_order {
  margin-top: 2rem;
}

main .recent_order h2 {
  color: var(--clr-dark);
}

main .recent_order table {
  background-color: var(--clr-white);
  width: 100%;
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  color: var(--clr-dark);
}

main .recent_order table:hover {
  box-shadow: none;
}

main table tbody tr {
  height: 3.8rem;
  border-bottom: 1px solid var(--clr-white);
  color: var(--clr-dark-variant);
}

main table tbody td {
  height: 3.8rem;
  border-bottom: 1px solid var(--clr-dark);
}

main table tbody tr:last-child td {
  border: none;
}

main .recent_order a {
  text-align: center;
  display: block;
  margin: 1rem;
}

.form-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input[type="text"],
.form-group input[type="number"],
.form-group input[type="url"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-actions {
  text-align: right;
  padding-top: 1rem;
}

.btn-añadir-obras {
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--clr-primary);
  color: white;
}

.btn-añadir-obras:hover {
  opacity: 0.9;
}

.btn-añadir-obras:disabled {
  background-color: #ccc;
}
</style>