<script setup>
import { onMounted } from 'vue';
import { useObrasStore } from '@/store/ObrasStore';

const obrasStore = useObrasStore();

onMounted(() => {
  obrasStore.fetchObras();
});



// Crear referencias reactivas para los elementos del DOM.
/*
const arrow = ref<HTMLElement | null>(null);
const arrowFinal = ref<HTMLElement | null>(null);

onMounted(() => {
    // Acceder a los elementos del DOM después de que el componente se haya montado.
    arrow.value = document.getElementById('arrow');
    arrowFinal.value = document.getElementById('arrow-final');

    // Añadir el event listener si ambos elementos están presentes.
    if (arrow.value && arrowFinal.value) {
        arrow.value.addEventListener('click', (): void => {
            arrowFinal.value?.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
*/
</script>




<template>
    <section class="container top-products">
        <br> <br> <br>
        <div class="container-options">
            <a href="#" id="ultimas-sesiones"><span>Ultimas sesiones</span></a>
            <a href="#" id="aclamadas"><span>Mas aclamadas</span></a>
            <a href="#" id="recientes"><span>Recientes</span></a>
        </div>
        <div>
            <i id="arrow" class="ri-arrow-down-line"></i>
        </div>
    </section>

    <img class="wave-1" src="../assets/img/wave1 copia.png" alt="">
    <img class="wave-2" src="../assets/img/wave2 copia.png" id="arrow-final" alt="">



    <br><br><br><br>
    <div class="container-products" id="obras-container">
    <div class="card-product" v-for="obra in obrasStore.obras" :key="obra.idObra">
      <div class="container-img">
        <img :src="obra.imagen" :alt="obra.nombreObra" class="img-item">
      </div>
      <div class="content-card-product">

        <h3 class="titulo-item">{{ obra.nombreObra }}</h3>
        <RouterLink :to="{ name: 'Detalles', params: { id: obra.idObra } }" class="obras-button">Detalles</RouterLink>
      </div>
    </div>
  </div>
    <br><br><br><br>
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

/*-----------------------------------*\
   * #HEADER
\*-----------------------------------*/
.header__logo-image {
    width: 30%;
}

.header {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--bg-color);
    padding: 28px 12%;
    transition: all 0.5s ease;
    font-size: 1.3rem;
}

/* -------------------------------------IZQUIERDA------------------------------------- */
.header__logo {
    display: flex;
    align-items: center;
}

.header__logo-icon-image {
    display: none;
}

.header__navbar {
    display: flex;
}

.header__nav-item {
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 5px 0;
    margin: 0 30px;
    transition: all 0.5s ease;
}

.header__nav-item:hover {
    color: var(--main-color);
    font-weight: bold;
}

.header__nav-item--active {
    color: var(--main-color);
}

/* -------------------------------------DERECHA------------------------------------- */
.header__main {
    display: flex;
    align-items: center;
}

.header__main a {
    margin-right: 25px;
    margin-left: 10px;
    font-size: 1.2rem;
    color: var(--text-color);
    font-weight: 500;
    transition: all 0.5s ease;
}

.header__user {
    display: flex;
    align-items: center;
}

.header__user i {
    color: var(--main-color);
    font-size: 28px;
    margin-right: 7px;
}

.header__main a:hover {
    color: var(--main-color);
    font-weight: bold;
}

#menu-icon {
    font-size: 35px;
    color: var(--text-color);
    cursor: pointer;
    z-index: 10001;
    display: none;
}

.scroll {
    height: 100px;
}

.landing {
    width: 100%;
    z-index: 1;
}

/* ------------------------------------- MEDIA QUERY HEADER ------------------------------------- */
@media (max-width: 1280px) {
    .header {
        padding: 14px 2%;
        transition: 0.2s;
    }

    .header__nav-item {
        padding: 5px 0;
        margin: 0px 20px;
    }
}

@media (max-width: 1090px) {
    #menu-icon {
        display: block;
    }

    .header__navbar {
        position: absolute;
        top: 100%;
        right: -100%;
        width: 270px;
        height: 29vh;
        background: var(--text-color);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border-radius: 10px;
        transition: all 0.5s ease;
    }

    .header__nav-item {
        display: block;
        margin: 12px 0;
        padding: 0px 25px;
        transition: all 0.5s ease;
        color: var(--bg-color);
    }

    .header__nav-item--active {
        color: var(--bg-color);
    }

    .header__nav-item:hover {
        color: var(--bg-color);
        transform: translateY(5px);
    }

    .header__nav-item:active {
        color: var(--bg-color);
    }

    .header__navbar.open {
        right: 2%;
    }

    .reservar-asientos__imagen img {
        height: 100%;
    }
}

@media (min-width: 1091px) {
    .reservar-asientos__imagen {
        height: 100%;
    }
}

@media (max-width: 950px) {
    .reservar-asientos__imagen {
        display: none;
        display: none;
    }

    .header__logo-image {
        display: none;
    }

    .header__logo-icon-image {
        display: flex;
        width: 30%;
    }
}

@media (max-width: 830px) {
    .container-options {
        display: grid;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
}

/*-----------------------------------*\
   * #FILTROS
\*-----------------------------------*/
.main-content {
    background-color: #C2BAAA;
}

.top-products {
    margin-top: 250vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;
}

.container-options {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
}

.container-options span {
    color: #777;
    background-color: #fff;
    padding: 0.7rem 3rem;
    font-size: 1.4rem;
    text-transform: capitalize;
    border-radius: 2rem;
    cursor: pointer;
}

.container-options span:hover {
    background-color: var(--btn-color);
    color: #fff;
    box-shadow: 0 1rem 1rem var(--dark-color);
}

.container-options span.active {
    background-color: var(--btn-color);
    color: #fff;
}

.ri-arrow-down-line {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 60px;
    color: var(--btn-color);
    cursor: pointer;
}


/*-----------------------------------*\
   * #OBRAS
\*-----------------------------------*/
    .container-products {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        gap: 3rem;
        width: 100%;
    }

    .card-product {
        background-color: var(--text-color);
        padding: 2rem 3rem;
        border-radius: 0.5rem;
        box-shadow: var(--box-shadow);
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        /* Esto asegura que nada se desborde del borde redondeado */
    }

    .container-img {
        width: 100%;
        height: 15rem;
        /* Establece un alto fijo para el contenedor de la imagen */
        display: flex;
        justify-content: center;
        overflow: hidden;
        /* Agregar esto para manejar imágenes que sean más altas que el contenedor */
    }

    .container-img img {
        width: 100%;
        /* Establece un ancho fijo */
        height: 100%;
        /* Establece un alto fijo */
        object-fit: cover;
        /* Mantener la proporción de la imagen sin distorsionar */
    }

    .content-card-product {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content-card-product h3 {
        color: #000;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        margin-top: 1rem;
    }

    .obras-button {
        background-color: var(--dark-color);
        border: none;
        border-radius: 30px;
        padding: 14px 35px;
        color: white;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 1rem;
        width: fit-content;
    }

    .obras-button:hover {
        background-color: var(--btn-color);
        color: #ffffff;
        box-shadow: var(--box-shadow);
    }

/*-----------------------------------*\
   * #SEPARACION
\*-----------------------------------*/
.wave-1 {
    width: 100%;
}

.wave-2 {
    width: 100%;
    margin-top: -10px;
}

/*-----------------------------------*\
   * #FOOTER
  \*-----------------------------------*/
.footer {
    margin-top: 0px;
    width: 100%;
    padding: 50px;
    background: var(--dark-color);
    color: #fff;
    display: flex;
    justify-content: space-around;
}

.footer div {
    text-align: center;
}

.footer div h3 {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 30px;
    letter-spacing: 1px;
    color: var(--text-color);
}

.footer__col-1 a i {
    color: var(--text-color);
    font-size: 30px;
    letter-spacing: 10px;
}

.footer__col-1 a i:hover {
    color: var(--btn-color);
}

.info-footer {
    margin-bottom: 20px;
    text-decoration: none;
    list-style: none;
}

.info-footer a {
    color: var(--main-color);
}

.ov-btn-slide-left {
    background-color: #333;
    border: none;
    border-radius: 30px;
    padding: 14px 35px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
}

.ov-btn-slide-left:hover {
    background-color: var(--btn-color);
    color: #ffffff;
    box-shadow: var(--box-shadow);
}

.ov-btn-slide-left::after {
    content: "";
    background: var(--btn-color);
    position: absolute;
    z-index: -1;
    padding: 16px 20px;
    display: block;
    top: 0;
    bottom: 0;
    left: -100%;
    right: 100%;
    transition: all 0.35s;
}

/*# sourceMappingURL=menu.css.map */</style>

@/store/ObrasStore
