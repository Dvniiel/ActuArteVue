<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue';
import { useObrasStore } from '@/Store/ObrasStore';



const obrasStore = useObrasStore();

const arrowFinal = ref(null);


const scrollToImage = () => {
    arrowFinal.value.scrollIntoView({ behavior: 'smooth' });
};

const fetchObrasAclamadas = () => {
    obrasStore.fetchObrasAclamadas();
};

const fetchObrasRecientes = () => {
    obrasStore.fetchObrasRecientes();
};

const fetchUltimasSesiones = () => {
    obrasStore.fetchUltimasSesiones();
};
</script>




<template>
    <div class="header-placeholder"></div>
    <section class="container top-products">
        <div class="container-options">

            <button id="ultimas-sesiones" @click="fetchUltimasSesiones"><span>Ultimas sesiones</span></button>
            <button id="aclamadas" @click="fetchObrasAclamadas"><span>Mas aclamadas</span></button>
            <button id="recientes" @click="fetchObrasRecientes"><span>Recientes</span></button>
        </div>
        <div>
            <i id="arrow" class="ri-arrow-down-line" @click="scrollToImage"></i>
        </div>
    </section>

    <img class="wave-1" src="../assets/img/wave1 copia.png" alt="">
    <img class="wave-2" src="../assets/img/wave2 copia.png" ref="arrowFinal" alt="">

</template>



<!-- ESTILOS PARA LOS FILTROS -->
<style>
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
</style>