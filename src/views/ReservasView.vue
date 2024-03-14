<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAsientosStore } from '@/store/AsientosStore';

const route = useRoute();
const obraId = ref(Number(route.params.obraId));
const sesionId = ref(Number(route.query.sesionId));

const asientosStore = useAsientosStore();
const asientosSeleccionados = ref<number[]>([]);

onMounted(async () => {
  if (obraId.value && sesionId.value) {
    await asientosStore.cargarAsientos(obraId.value, sesionId.value);
  }
});

// Función para seleccionar/deseleccionar asientos
function seleccionarAsiento(asientoId: number) {
  const index = asientosSeleccionados.value.indexOf(asientoId);
  if (index === -1) {
    asientosSeleccionados.value.push(asientoId);
  } else {
    asientosSeleccionados.value.splice(index, 1);
  }
}

// Función para reservar los asientos seleccionados
const reservarAsientosSeleccionados = async () => {
  if (obraId.value && sesionId.value && asientosSeleccionados.value.length > 0) {
    await asientosStore.reservarAsientos(obraId.value, sesionId.value, asientosSeleccionados.value);
    asientosSeleccionados.value = []; // Limpiar selección tras reserva
    // Recargar asientos para reflejar los nuevos ocupados
    await asientosStore.cargarAsientos(obraId.value, sesionId.value);
  }
};

// Verificar si un asiento está ocupado
const esAsientoOcupado = (asientoId: number) => {
  return asientosStore.getAsientosOcupados(obraId.value, sesionId.value).includes(asientoId);
};
</script>

<template>
  <div class="reservas-view">
    <div class="navigation">
      <RouterLink to="/">Volver al Inicio</RouterLink>
    </div>
    <div class="showcase">
      <div class="seat selected"></div>
      <small>Seleccionado</small>
      <div class="seat"></div>
      <small>Libre</small>
      <div class="seat occupied"></div>
      <small>Ocupado</small>
    </div>
    <div class="container">
      <svg
        width="100%"
        height="60vh"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <g v-for="row in 10" :key="row">
          <circle
            v-for="col in 15"
            :key="col"
            :cx="col * 6"
            :cy="row * 10"
            r="2"
            @click="() => seleccionarAsiento(row * 100 + col)"
            :fill="
              esAsientoOcupado(row * 100 + col)
                ? '#FF6347'
                : asientosSeleccionados.includes(row * 100 + col)
                ? '#f1d791'
                : '#9E9E9E'
            "
          />
        </g>
      </svg>
    </div>
    <button @click="reservarAsientosSeleccionados">Reservar Asientos</button>
    <p class="text">
      Has seleccionado <span>{{ asientosSeleccionados.length }}</span> asientos.
    </p>
  </div>
</template>

<style>
:root {
  --primary-color: #c7a17a;
  --background-color: #f9f5f0;
  --dark-color: #63595c;
  --bg-color: #716a5c;
  --text-color: #f1e9db;
  --main-color: #f1d791;
  --btn-color: #5e0a0f;
  --box-shadow: 0 2rem 3rem var(--dark-color);
}

.top {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.container {
  display: flex;
  justify-content: center;
}

.seat {
  background-color: var(--bg-color);
  height: 12px;
  width: 15px;
  margin: 3px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.seat.selected {
  background-color: var(--main-color);
}

.seat.occupied {
  background-color: var(--btn-color);
}

.showcase {
  font-size: 20px;
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  padding: 5px 40px;
  margin: 0 auto 10px;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
  color: var(--dark-color);
}

.showcase li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}

/* Estilo para los textos pequeños en la guía de colores */
.showcase li small {
  margin-left: 10px;
}

.reservar-obra_button {
  display: flex;
  justify-content: center;
  background-color: var(--primary-color);
  color: #000;
  border: none;
  border-radius: 30px;
  padding: 14px 35px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin: 20px auto;
}

.text {
  text-align: center;
  justify-content: center;
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 20px;
}

#count,
#total {
  color: var(--main-color);
}

.reservar-obra_button:hover {
  background-color: var(--main-color);
  color: #000;
}

.Router__Index {
  color: #fff;
}

.Router__Index:hover {
  color: #000;
}
</style>
