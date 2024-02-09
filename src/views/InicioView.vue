<script  setup lang = "ts">
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



<template>
  <!-- Slider -->
  <section class="container-slider">
    <div class="slider-wrapper">
      <div class="slider">
        <img id="slide-1" src="../assets/img/slider1.jpg" />
        <img id="slide-2" src="../assets/img/slider2.jpg" />
        <img id="slide-3" src="../assets/img/slider3.jpg" />
      </div>
      <div class="slider-nav">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
      </div>
    </div>
  </section>
  <br> <br> <br>





  <!-- Obras -->
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

  <br><br><br>





  <!-- Asientos -->
  <section class="reservar-asientos">
    <div class="reservar-asientos__heading">
      <h1 class="reservar-asientos__title">Haz tu reserva</h1>
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
              <br>
              Pincha en el botón para acceder a la sección de reservas
              <br>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis sed in corrupti cum
              maxime
              rem exercitationem, tempora labore similique aperiam illum suscipit ea velit, dolore
              quisquam
              illo sunt nemo saepe perspiciatis eos iste fugit est. Quasi commodi eius iste cupiditate!
            </p>
            <a href="reservas.html"><button class="reservar-asientos__button">Reservar</button></a>
          </div>
        </section>
      </div>
    </div>
  </section>
  <br> <br>
</template>




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

@media (min-width: 0) {
  .reservar-asientos__imagen {
    height: 100%;
  }
}

@media (max-width: 1591) {
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

/*-----------------------------------*\
   * #CARRUSEL
\*-----------------------------------*/
.container-slider {
  margin-top: 1750px;
  width: 100%;
  padding: 2rem;
}

.slider-wrapper {
  width: 100%;
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
}

.slider {
  display: flex;
  aspect-ratio: 16/9;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 0.25);
  border-radius: 0.5rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.slider::-webkit-scrollbar {
  display: none;
}

.slider img {
  flex: 1 0 100%;
  scroll-snap-align: start;
  -o-object-fit: cover;
  object-fit: cover;
}

.slider-nav {
  display: flex;
  -moz-column-gap: 1rem;
  column-gap: 1rem;
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.slider-nav a {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.75;
  transition: opacity ease 250ms;
}

.slider-nav a:hover {
  opacity: 1;
}

/*-----------------------------------*\
   * #SEPARATION
  \*-----------------------------------*/
.wave-1 {
  width: 100%;
}

.wave-2 {
  width: 100%;
  margin-top: -10px;
}

/*-----------------------------------*\
   * #OBRAS
\*-----------------------------------*/

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


/*-----------------------------------*\
   * #RESERVAR ASIENTOS
\*-----------------------------------*/
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

.ov-btn-slide-left:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.35s;
}
</style>