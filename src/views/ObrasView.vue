<script setup>

import Filters from '@/components/Filters.vue';
import Card from '@/components/Card.vue'


</script>




<template>

    <!-- FILTROS Y FLECHA DE DESPLAZAMIENTO -->
    <Filters />


    <!-- TARJETAS DE LAS OBRAS -->
    <Card/>
    
</template>




<style>

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
   * #SEPARACION
\*-----------------------------------*/
.wave-1 {
    width: 100%;
}

.wave-2 {
    width: 100%;
    margin-top: -10px;
}


</style>

