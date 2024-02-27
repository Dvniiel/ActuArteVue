<!-- SCRIPTS PARA LAS TARJETAS DE LAS OBRAS -->
<script setup lang="ts">

defineProps<{
    title?: string
    image?: string
}>();


const obras = [
    { id: 1, title: 'Romeo y Julieta', image: 'https://almeriaciudad.es/cultura/wp-content/archivos/sites/21/2022/02/IMG_2391-1.jpeg' },
    { id: 2, title: 'La Casa de Bernarda Alba', image: 'https://chglenguayliteratura.files.wordpress.com/2020/01/aaaa.jpg' },
    { id: 3, title: 'La Celestina', image: 'https://www.cervantesvirtual.com/s3/BVMC_OBRAS/ffa/c66/288/2b1/11d/fac/c70/021/85c/e60/64/mimes/imagenes/ffac6628-82b1-11df-acc7-002185ce6064_2.jpg' },
    { id: 4, title: 'La Vida es Sueño', image: 'https://www.elejandria.com/covers/La_vida_es_sueno-Calderon_de_la_Barca_Pedro-md.png' },
    { id: 5, title: 'Hamlet', image: 'https://cdn.kobo.com/book-images/5fc4252b-1c4f-40ef-9975-22982c94f12c/1200/1200/False/hamlet-prince-of-denmark-23.jpg' },
    { id: 6, title: 'El Fantasma de la Ópera', image: 'https://teatroaranjuez.es/wp-content/uploads/2023/10/el-fantasma-de-la-opera-330x467-1.jpg' },
    { id: 7, title: 'Sueño Noche de Verano', image: 'https://image.isu.pub/190709204809-9c82f7fce8bb840f1ff3b5631eef637f/jpg/page_1.jpg' },
    { id: 8, title: 'Don Juan Tenorio', image: 'https://m.media-amazon.com/images/I/61Er0I3cJaL._AC_UF1000,1000_QL80_.jpg' },
    { id: 9, title: 'Fuenteovejuna', image: 'https://m.media-amazon.com/images/I/418RabpIZVS.jpg' },
    { id: 10, title: 'La Divina Comedia', image: 'https://m.media-amazon.com/images/I/71WJbXGxPdL._AC_UF1000,1000_QL80_.jpg' },
    { id: 11, title: 'El enfermo imaginario', image: 'https://www.tarambana.net/upload/espectaculos/foto_poster-1296.jpg?id=117364' },
    { id: 12, title: 'Cats', image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Cats_1998_DVD_Cover.jpg' },
    { id: 13, title: 'Wicked', image: 'https://m.media-amazon.com/images/M/MV5BNjczYjBhMTctYTA3Yy00NTgyLWFkZWQtZjQwYTRkMDc1YTc1XkEyXkFqcGdeQXVyNTk5NTQzNDI@._V1_.jpg' },
    { id: 14, title: 'Los Miserables', image: 'https://m.media-amazon.com/images/I/517Cb2FS4qL.jpg' },
    { id: 15, title: 'Casa de Muñecas', image: 'https://images.cdn3.buscalibre.com/fit-in/360x360/ef/99/ef9995dc7f336bc670c2775b7316b143.jpg' },
    { id: 16, title: 'El alcalde de Zalamea', image: 'https://m.media-amazon.com/images/I/51fM26seM-L.jpg' },
];


</script>


<!-- TARJETAS PARA LAS OBRAS DEL MENU -->
<template>
    <div class="card-product" v-for="obra in obras" :key="obra.id">
        <div class="container-img">
            <img :src="obra.image" :alt="obra.title" class="img-item">
        </div>
        <div class="content-card-product">
            <h3 class="titulo-item">{{ obra.title }}</h3>
            <button class="obras-button">Detalles</button>
        </div>
    </div>
</template>



<!-- ESTILOS PARA LAS TARJETAS -->
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
</style>