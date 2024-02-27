<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface Seat {
    row: number;
    col: number;
    color: string;
}

export default defineComponent({
    name: 'SeatMap',
    setup() {
        const rows = Array.from({ length: 6 }, (_, i) => i + 1);
        const cols = Array.from({ length: 9 }, (_, i) => i + 1);
        const defaultColor = '#9E9E9E';
        const selectedColor = '#f1d791';

        // Estructura de datos para mantener el estado de cada asiento
        const seats = reactive<Record<string, Seat>>({});

        // Inicializa todos los asientos con el color por defecto
        rows.forEach(row => {
            cols.forEach(col => {
                const key = `row${row}col${col}`;
                seats[key] = { row, col, color: defaultColor };
            });
        });

        const getCircleX = (col: number): number => col * 10;
        const getCircleY = (row: number): number => row * 10;

        const getSeatColor = ({ row, col }: { row: number; col: number }): string => {
            const key = `row${row}col${col}`;
            return seats[key].color;
        };

        const toggleSeatColor = ({ row, col }: { row: number; col: number }): void => {
            const key = `row${row}col${col}`;
            seats[key].color = seats[key].color === defaultColor ? selectedColor : defaultColor;
        };

        return {
            rows,
            cols,
            getCircleX,
            getCircleY,
            getSeatColor,
            toggleSeatColor,
        };
    },
});
</script>

<template>
    <div class="top"></div>

    <button class="reservar-obra_button">
        <RouterLink to="/" class="Router__Index">Volver al Inicio</RouterLink>
    </button>




    <div class="movie-container">
        <div id="obraTitulo"></div>
    </div>





    <ul class="showcase">
        <li>
            <div class="seat selected"></div>
            <small>Seleccionado</small>
        </li>
        <li>
            <div class="seat"></div>
            <small>Libre</small>
        </li>
        <li>
            <div class="seat occupied"></div>
            <small>Ocupado</small>
        </li>
    </ul>





    <div class="container">
        <svg width="50%" height="100%" viewBox="0 0 100 65" preserveAspectRatio="xMidYMid meet">
            <g v-for="row in rows" :key="row">
                <circle v-for="col in cols" :key="col" :cx="getCircleX(col)" :cy="getCircleY(row)" r="2"
                    :fill="getSeatColor({ row, col })" @click="toggleSeatColor({ row, col })" />
            </g>
        </svg>
    </div>

    <br>




    <a href="#"><button id="reserve-button" class="reservar-obra_button">Reservar</button></a>

    <br>



    <p class="text">
        Has seleccionado <span id="count">0</span> asientos por un precio de <span id="total">0$</span>
    </p>
</template>


<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Poppins", sans-serif;
}

:root {
    --primary-color: #c7a17a;
    --background-color: #f9f5f0;
    --dark-color: #63595c;
    --bg-color: #716A5C;
    --text-color: #F1E9DB;
    --main-color: #f1d791;
    --btn-color: #5e0a0f;
    --box-shadow: 0 2rem 3rem var(--dark-color);
}

/*SCROOLBAR*/
body {
    background-color: #C2BAAA;
    display: flex;
    flex-direction: column;
    color: #fff;
    height: 100vh;
    font-family: "Poppins", sans-serif;
}

body::-webkit-scrollbar {
    width: 12px;
}

body::-webkit-scrollbar-track {
    background: transparent;
}

body::-webkit-scrollbar-thumb {
    background-color: var(--main-color);
    border-radius: 20px;
    border: 1px solid var(--dark-color);
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

.text{
    text-align: center;
    justify-content: center;
    font-size: x-large;
    font-weight: bold;
    margin-bottom: 20px;
}

#count,
#total{
    color: var(--main-color);
}


.reservar-obra_button:hover {
    background-color: var(--main-color);
    color: #000;
}

.Router__Index{
    color: #fff;
}

.Router__Index:hover{
    color: #000;
}

</style>