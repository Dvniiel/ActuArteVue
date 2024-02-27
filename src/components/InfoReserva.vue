<!-- SCRIPT PARA INFO DE LAS RESERVAS -->
<script setup lang="ts">



</script>



<!-- COMPONENTE PARA LA TARJETA Y TEXTO DE LAS RESERVAS -->
<template>
    <section class="reservar-asientos">
        <div class="reservar-asientos__heading">
            <h1 class="reservar-asientos__title">Reserva tu asiento</h1>
            <hr class="reservar-asientos__hr">
            <br>
            <div class="reservar-asientos__container">
                <section class="reservar-asientos__section">
                    <div class="reservar-asientos__imagen">
                        <img src="../assets/img/ReservarAsientos.jpg" alt="">
                    </div>
                    <div class="reservar-asientos__content">
                        <p class="reservar-asientos__info">
                            ¿Ya has elegido tu asiento?
                            Pincha en el botón para acceder a la sección de reservas
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis sed in corrupti cum
                            maxime
                            rem exercitationem, tempora labore similique aperiam illum suscipit ea velit, dolore
                            quisquam
                            illo sunt nemo saepe perspiciatis eos iste fugit est. Quasi commodi eius iste cupiditate!
                        </p>
                        <a href="#"><button class="reservar-asientos__button">Reservar</button></a>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>



<!-- ESTILOS PARA EL COMPONENTE DE INFO RESERVAS -->
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
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


/* INFO DE RESERVAS */
.reservar-asientos__heading {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 20px auto;
}

.reservar-asientos__title {
    font-size: 50px;
    color: #000;
    margin-bottom: 25px;
    position: relative;
}

.reservar-asientos__title::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    display: block;
    margin: 0 auto;
    background-color: var(--btn-color);
}

.reservar-asientos__info {
    font-size: 18px;
    color: var(--dark-color);
    font-weight: 500;
    margin-bottom: 35px;
}

.reservar-asientos__container {
    width: 90%;
    margin: 0 auto;
    padding: 10px 20px;
}

.reservar-asientos__section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.reservar-asientos__imagen {
    flex: 1;
    margin-right: 40px;
    overflow: hidden;
    background-color: #fff;
    height: 350px;
    border: 3px solid var(--text-color);
}

.reservar-asientos__imagen img {
    width: 100%;
    height: 100%;
}

.reservar-asientos__content {
    flex: 1;
    margin-top: 0px;
    padding-left: 2%;
    padding-top: 2%;
    justify-content: flex-start;
    text-align: left;
    box-shadow: var(--box-shadow);
}

.reservar-asientos__button {
    background-color: #333;
    border: none;
    border-radius: 30px;
    padding: 14px 35px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
    cursor: pointer;
}

.reservar-asientos__button:hover {
    background-color: var(--btn-color);
    color: #ffffff;
    box-shadow: var(--box-shadow);
}

.reservar-asientos__button:hover::after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 0.35s;
}
</style>