<!-- SCRIPTS PARA LOS FILTROS -->
<script setup lang="ts">



</script>



<!-- FILTROS PARA LAS OBRAS -->
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