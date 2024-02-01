<template>
    <a href="./index.html"><button class="reservar-obra_button">Volver a Inicio</button></a>

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

    <div class="container" id="seatContainer">
        <!-- Los asientos se agregarán aquí dinámicamente -->
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
    list-style: none;
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
    align-items: center;
    justify-content: center;
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

.row {
    display: flex;
}

.movie-container {
    margin: 20px 0;
}

.movie-container select {
    background-color: var(--text-color);
    border-radius: 0;
    border: 0;
    font-size: 14px;
    margin-left: 10px;
    padding: 5px 15px 5px 15px;
}

.seat.selected {
    background-color: var(--main-color);
}

.seat.occupied {
    background-color: var(--btn-color);
}

.seat:nth-of-type(6) {
    margin-right: 18px;
}

.seat:nth-last-of-type(6) {
    margin-left: 18px;
}

.seat:not(.occupied):hover {
    cursor: pointer;
    transform: scale(1.2);
}

.showcase {
    box-shadow: var(--box-shadow);
    margin-bottom: 40px;
    padding: 5px 40px;
    border-radius: 5px;
    color: var(--dark-color);
    display: flex;
    justify-content: space-between;
}

.showcase .seat:not(.occupied):hover {
    cursor: default;
    transform: scale(1);
}

.showcase li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
}

.showcase li small {
    margin-left: 10px;
}

.screen {
    background-color: var(--text-color);
    border-radius: 10%;
    height: 70px;
    width: 100%;
    margin: 15px 0;
    transform: rotateX(-45deg);
    box-shadow: var(--box-shadow);
}

.container {
    perspective: 1000px;
    margin-bottom: 30px;
}

.p.text {
    margin: 5px 0;
}

.p.text span {
    color: var(--btn-color);
}

.reservar-obra_button {
    background-color: var(--dark-color);
    border: none;
    border-radius: 30px;
    padding: 14px 35px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    grid-row: 2/2;
    grid-column: 1/-1;

}

.reservar-obra_button:hover {
    background-color: var(--btn-color);
    color: #ffffff;
    box-shadow: var(--box-shadow);
}

/*# sourceMappingURL=reservas.css.map */</style>