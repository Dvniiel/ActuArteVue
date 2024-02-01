<template>
    <!-- EMAIL: actuartecontacto@gmail.com -->
    <!-- PASS: actuarte12345 -->
    <form action="https://formsubmit.co/actuartecontacto@gmail.com" method="POST">

        <h2>Contacto</h2>

        <div class="input-group">

            <label for="name">Nombre</label>
            <input type="text" name="name" id="name" placeholder="Nombre">

            <label for="phone">Telefono</label>
            <input type="tel" name="phone" id="phone" placeholder="Telefono">

            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email">

            <label for="message">Mensaje</label>
            <textarea name="message" id="message" cols="30" rows="5" placeholder="Mensaje"></textarea>

            <div class="form-txt">
                <a href="#">Políticas de privacidad</a>
                <a href="#">Terminos y condiciones</a>
            </div>

            <input class="enviar_contacto" type="submit" value="Enviar">

        </div>

    </form>
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

body {
    background-color: #C2BAAA;
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form {
    padding: 50px 55px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    text-align: center;
    width: 340px;
}

.input-group {
    display: flex;
    flex-direction: column;
    text-align: left;
}

h2 {
    color: var(--btn-color);
    font-size: 35px;
}

label {
    color: var(--bg-color);
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 15px;
}

input,
textarea {
    padding: 17px 25px;
    border-radius: 25px;
    margin-bottom: 20px;
    background-color: var(--text-color);
    border: 2px solid var(--dark-color);
    color: #000;
    outline: none;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
    color: #333;
}

input::placeholder,
textarea::placeholder {
    color: #333;
}

.form-txt {
    margin-bottom: 30px;
    display: grid;
    justify-content: space-around;
    text-align: center;
}

.form-txt a {
    color: #595f63;
    font-size: 14px;
}

.enviar_contacto {
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

.enviar_contacto:hover {
    background-color: var(--btn-color);
    color: #ffffff;
    box-shadow: var(--box-shadow);
}

.enviar_contacto:hover::after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 0.35s;
}
</style>