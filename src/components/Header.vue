<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from 'vue';
import { RouterLink } from 'vue-router';

const canvas = ref<HTMLCanvasElement | null>(null);
let requestId: number | null = null;

const starConfig = reactive({
    cx: 0,
    cy: 0,
    spikes: 5,
    outerRadius: 20,
    innerRadius: 10,
    rotation: 0,
    color: 'yellow',
});

const isMouseOverStar = (mouseX: number, mouseY: number) => {
    const dx = mouseX - starConfig.cx;
    const dy = mouseY - starConfig.cy;
    const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
    return distanceFromCenter < starConfig.outerRadius;
};

const canvasMousemove = (event: MouseEvent) => {
    if (!canvas.value) return;

    const rect = canvas.value.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    if (isMouseOverStar(mouseX, mouseY)) {
        starConfig.color = 'orange';
        starConfig.rotation += 0.05;
    } else {
        starConfig.color = 'yellow';
        starConfig.rotation = 0;
    }
};

const drawStar = (ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number, rotation: number) => {
    let rot = Math.PI / 2 * 3 + rotation;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = starConfig.color;
    ctx.fill();
};

const animate = () => {
    if (canvas.value) {
        const ctx = canvas.value.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

            starConfig.cx = canvas.value.width / 2;
            starConfig.cy = canvas.value.height / 2;

            drawStar(ctx, starConfig.cx, starConfig.cy, starConfig.spikes, starConfig.outerRadius, starConfig.innerRadius, starConfig.rotation);
        }
    }
    requestId = requestAnimationFrame(animate);
};

onMounted(() => {
    starConfig.cx = 50;
    starConfig.cy = 50;
    canvas.value?.addEventListener('mousemove', canvasMousemove);
    requestId = requestAnimationFrame(animate);
});

onUnmounted(() => {
    canvas.value?.removeEventListener('mousemove', canvasMousemove);
    if (requestId) {
        cancelAnimationFrame(requestId);
    }
});
</script>

<template>
    <header class="header">
        <canvas ref="canvas" id="logoCanvas" width="700" height="700" class="header__logo-image"></canvas>
        <a href="index.html" class="header__logo-icon"><img src="../assets/img/LogoIconoSinFondo.png"
                class="header__logo-icon-image"></a>

        <ul class="header__navbar">
            <RouterLink to="/" class="header__nav-item header__nav-item--active" id="sectionHead">Inicio</RouterLink>
            <RouterLink to="/obras" class="header__nav-item" id="sectionHead">Obras</RouterLink>
            <RouterLink to="/reservas" class="header__nav-item" id="sectionHead">Reservas</RouterLink>
        </ul>

        <div class="header__main">
            <a href="#" class="header__ticket" id="sectionHead"><i class="ri-coupon-3-fill"></i>Entradas</a>
            <RouterLink to="/register" class="header__nav-item" id="sectionHead"><i class="ri-user-line"></i>Cuenta
            </RouterLink>
            <div class="bx bx-menu" id="menu-icon"></div>
        </div>
    </header>
    <div class="header-placeholder"></div>
    <div class="scroll"></div>
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

.header__logo-image {
  width: 300px;
  height: 300px; 
  position: absolute;
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



.header {
    width: 100%;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--bg-color);
    padding: 28px 12%;
    transition: all 0.5s ease;
    font-size: 1.3rem;
}


.header-placeholder {
    height: 200px;
}


/* -------------------------------------IZQUIERDA------------------------------------- */
.header__logo {
    display: flex;
    align-items: center;
    border: 1px solid #000;
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
</style>









