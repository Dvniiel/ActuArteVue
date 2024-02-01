<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
    <footer class="footer">
        <div class="footer__col-1">
            <h3 class="footer__title">Redes sociales</h3>
            <a href="#"><i class="ri-facebook-box-fill"></i></a>
            <a href="#"><i class="ri-github-fill"></i></a>
            <a href="#"><i class="ri-instagram-fill"></i></a>
        </div>



        <div class="footer__col-3">
            <h3 class="footer__title">Contacto</h3>
            <p class="footer__info">
                +34 123456789
            </p>
            <p class="footer__info">
                teatroDigital@gmail.com
            </p>
            <br>
            <RouterLink  to="/contacto" class="footer__button ov-btn-slide-left"> Contacto </RouterLink>
        </div>
    </footer>
</template>




<style>
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