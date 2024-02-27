<!-- SCRTIP PARA LAS TARJETAS DE OBRAS EN LA HOMEPAGE -->
<script setup lang="ts">
defineProps<{
    title?: string
    image?: string
}>()


const obras = [
    { title: 'Wicked', id: 1, image: 'https://m.media-amazon.com/images/M/MV5BNjczYjBhMTctYTA3Yy00NTgyLWFkZWQtZjQwYTRkMDc1YTc1XkEyXkFqcGdeQXVyNTk5NTQzNDI@._V1_.jpg' },
    { title: 'La divina comedia', id: 2, image: 'https://m.media-amazon.com/images/I/71WJbXGxPdL._AC_UF1000,1000_QL80_.jpg' },
    { title: 'la vida es sueño', id: 3, image: 'https://www.elejandria.com/covers/La_vida_es_sueno-Calderon_de_la_Barca_Pedro-md.png' }
]
</script>




<!-- COMPONENTE PARA LAS 3 OBRAS DEL MENU -->
<!--las tres obras se escogeran aleatoriamente de las 16 que haya en la BD-->
<template>
    <h1 class="obras__title">Nuevas obras</h1>
    <section class="obras-index">
        <div class="obra" v-for="obra in obras" :key="obra.id" :title="obra.title" :image="obra.image">

            <div class="container-img">
                <img :src="obra.image" :alt="title" class="img-item" />
            </div>

            <div class="content-card-obra">
                <h3 class="content-card-obra__title">{{ obra.title }}</h3>
                <RouterLink to="/obras" class="obras-button content-card-obra__button">Ver Más</RouterLink>
            </div>

        </div>
    </section>
</template>


<!-- ESTILOS PARA LAS 3 OBRAS DEL INDEX -->
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

.obras-index {
  display: flex;
  justify-content: space-around;
}

.obra {
  display: grid;
  text-align: center;
  gap: 3rem;
  width: 33%;
  background-color: var(--text-color);
  padding: 2rem 3rem;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
}

.obras__title {
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 50px;
  color: #000;
  margin-bottom: 55px;
}

.container-img img {
  width: 70%;
}



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
}

.container-img {
    width: 100%;
    display: flex;
    justify-content: center;
}

.container-img img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
}

.content-card-product {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content-card-product h3 {
    font-weight: 400;
    font-size: 16px;
    text-align: center;
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
</style>
