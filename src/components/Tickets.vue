<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref } from "vue";
import { useReservasStore } from "@/Store/ReservasStore";
import { jsPDF } from "jspdf";

const reservaStore = useReservasStore();
const reservas = ref(reservaStore.reservas);

onMounted(() => {
  reservaStore.loadReservas();
});

const clearTickets = () => {
  reservaStore.clearReservas();
  reservas.value = [];
};

const downloadPdf = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  const getTextWidth = (text, fontSize, fontType) => {
    doc.setFontSize(fontSize);
    doc.setFont("helvetica", fontType);
    return doc.getTextWidth(text);
  };

  reservas.value.forEach((reserva, index) => {
    const titleFontSize = 18;
    const bodyFontSize = 12;
    const title = `Obra: ${reserva.obra}`;
    const titleWidth = getTextWidth(title, titleFontSize, "bold");

    const titleX = (pageWidth - titleWidth) / 2;
    doc.setFontSize(titleFontSize);
    doc.setFont("helvetica", "bold");
    doc.text(title, titleX, 20);

    doc.setFontSize(bodyFontSize);

    const sessionText = `Sesión: ${reserva.sesion}`;
    const seatsText = `Número de asientos: ${reserva.numAsientos}`;
    const priceText = `Precio: ${reserva.precio} euros`;
    const dateText = `Fecha de reserva: ${new Date(
      reserva.fecha
    ).toLocaleDateString()}`;

    const maxWidth = Math.max(
      getTextWidth(sessionText, bodyFontSize, "normal"),
      getTextWidth(seatsText, bodyFontSize, "normal"),
      getTextWidth(priceText, bodyFontSize, "normal"),
      getTextWidth(dateText, bodyFontSize, "normal")
    );

    const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
    const uniqueQrCodeUrl = `${qrCodeUrl}&uniqueId=${new Date().getTime()}`;

    doc.addImage(uniqueQrCodeUrl, "JPEG", (pageWidth - 50) / 2, 70, 50, 50);

    const textX = (pageWidth - maxWidth) / 2;

    doc.text(sessionText, textX, 30);
    doc.text(seatsText, textX, 40);
    doc.text(priceText, textX, 50);
    doc.text(dateText, textX, 60);

    if (index < reservas.value.length - 1) {
      doc.addPage();
    }
  });

  doc.save("reservas.pdf");
};
</script>

<template>
  <div class="tickets-container">
    <h1 class="tickets-title">Tus Tickets</h1>
    <button
      class="tickets-clear-button"
      v-if="reservas.length"
      @click="clearTickets"
    >
      Eliminar todos los tickets
    </button>
    <div class="tickets-list" v-if="reservas.length">
      <div v-for="reserva in reservas" :key="reserva.fecha" class="ticket-card">
        <h2 class="ticket-title">{{ reserva.obra }}</h2>
        <p class="ticket-session">Sesión: {{ reserva.sesion }}</p>
        <p class="ticket-seats">
          Número de asientos: {{ reserva.numAsientos }}
        </p>
        <p class="ticket-price">Precio: {{ reserva.precio }} euros</p>
        <p class="ticket-date">
          Fecha de reserva: {{ new Date(reserva.fecha).toLocaleDateString() }}
        </p>
      </div>
    </div>
    <p class="tickets-none" v-else>No hay tickets para mostrar.</p>
  </div>

  <button
    class="tickets-download-button"
    v-if="reservas.length"
    @click="downloadPdf"
  >
    Descarga tus entradas
  </button>
</template>

<style scoped>
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

.tickets-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tickets-title {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.tickets-clear-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.tickets-clear-button:hover {
  background-color: var(--btn-color);
}

.tickets-list {
  width: 100%;
}

.ticket-card {
  background-color: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
}

.ticket-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.ticket-session,
.ticket-seats,
.ticket-price,
.ticket-date {
  font-size: 1rem;
  margin: 5px 0;
  color: #666;
}

.tickets-none {
  color: #666;
  text-align: center;
  margin-top: 20px;
}

.tickets-download-button {
  background-color: #4caf50; /* Color verde para el botón de descarga */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.tickets-download-button:hover {
  background-color: #66bb6a; /* Un tono más claro al pasar el mouse */
}

@media (max-width: 768px) {
  .tickets-container {
    padding: 10px;
  }

  .tickets-title {
    font-size: 1.5rem;
  }

  .tickets-clear-button {
    font-size: 0.9rem;
  }

  .ticket-card {
    padding: 15px;
  }

  .ticket-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .tickets-container {
    margin: 20px auto;
  }

  .tickets-title {
    font-size: 1.2rem;
  }

  .tickets-clear-button {
    padding: 8px 15px;
    font-size: 0.8rem;
  }

  .ticket-card {
    padding: 10px;
  }

  .ticket-title {
    font-size: 1.2rem;
  }
}
</style>
