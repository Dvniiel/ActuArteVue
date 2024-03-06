<script setup lang="ts">
</script>
<template>
    <div class="container-dashboard">

        <main>

            <div class="recent_order">
                <h1>Listado de Obras</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>ID de la Obra</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Cats</td>
                            <td>2</td>
                            <td class="primary"><i class="ri-pencil-fill"></i></td>
                            <td class="primary"><i class="ri-delete-bin-line"></i></td>
                        </tr>
                        <tr>
                            <td>Wicks</td>
                            <td>6</td>
                            <td class="primary"><i class="ri-pencil-fill"></i></td>
                            <td class="primary"><i class="ri-delete-bin-line"></i></td>
                        </tr>
                        <tr>
                            <td>Don Juan Tenorio</td>
                            <td>8</td>
                            <td class="primary"><i class="ri-pencil-fill"></i></td>
                            <td class="primary"><i class="ri-delete-bin-line"></i></td>
                        </tr>
                        <tr>
                            <td>La Celestina</td>
                            <td>9</td>
                            <td class="primary"><i class="ri-pencil-fill"></i></td>
                            <td class="primary"><i class="ri-delete-bin-line"></i></td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <!--end pedido reciente-->



        </main>
        <!-- main section end -->

    </div>
    <br><br>
</template>





<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");


:root {
    --clr-primary: #896a4c;
    --clr-success: #41f1b6;
    --clr-white: #fff;
    --clr-info-dark: #7d8da1;
    --clr-info-light: #dce1eb;
    --clr-dark: #363949;
    --clr-warnig: #ff4e4e;
    --clr-light: rgba(132, 139, 200, 0.18);
    --clr-dark-variant: #677483;
    --clr-color-background: #f6f6f9;

    --card-border-radius: 2rem;
    --border-radius-1: 0.4rem;
    --border-radius-2: 0.8rem;
    --border-radius-3: 1.2rem;

    --card-padding: 1.8rem;
    --padding-1: 1.2rem;
    --box-shadow: 0 2rem 3rem var(--clr-light);
}

*{

    box-sizing: border-box;
    text-decoration: none;
    border: 0;
    list-style: none;
    appearance: none;
}

body{
    font-family: 'Poppins' ,sans-serif;
    width: 100%;
    height: 100vh;
    font-size: 0.88rem;
}


a{
    color: var(--clr-dark);
}

h1{
    font-weight: 800;
    font-size: 1.8rem;
}

h2{
    font-size: 1.4rem;
}

h3{
    font-size: 0.87rem;
}

h4{
    font-size: 0.8;
}

h5{
    font-size: 0.77rem;
}

small{
    font-size: 0.75rem;
}


p{
    color: var(--clr-dark-variant);
}

b{
    color: var(--clr-dark);
}



/*-------------MAIN SECTION--------------*/

.container-dashboard{
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
}

main{
    width: 100%;
    text-align: center;
    justify-content: center;
}

main input{
    background-color: transparent;
    border: 0;
    outline: 0;
    color: var(--clr-dark);
}

main h1{
    color: var(--clr-dark);
}


main .recent_order{
    margin-top: 2rem;
}

main .recent_order h2{
    color: var(--clr-dark);
}

main .recent_order table{
    background-color: var(--clr-white);
    width: 100%;
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    text-align: center;
    box-shadow: var(--box-shadow);
    transition: all .3s ease;
    color: var(--clr-dark);
}

main .recent_order table:hover{
    box-shadow: none;
}

main table tbody tr{
    height: 3.8rem;
    border-bottom: 1px solid var(--clr-white);
    color: var(--clr-dark-variant);
}

main table tbody td{
    height: 3.8rem;
    border-bottom: 1px solid var(--clr-dark);
}

main table tbody tr:last-child td{
    border: none;
}

main .recent_order a{
    text-align: center;
    display: block;
    margin: 1rem;
}




/*-------------------------MEDIA QUERY--------------------------*/

@media screen and (max-width:1200px) {
    .container{
        width: 94%;
        grid-template-columns: 7rem auto 14rem;
    }

    aside .sidebar h3{
        display: none;
    }

    aside .sidebar a:last-child{
        position: relative;
        margin-top: 1.8rem;
    }

    main .insights{
        display: grid;
        grid-template-columns: repeat(1,1fr);
    }
}

/*---------------------MEDIA QUERY PHONES ----------------------*/

@media screen and (max-width:768px) {
    .container{
        width: 100%;
        grid-template-columns: repeat(1,1fr);
    }

    aside{
        position: fixed;
        width: 18rem;
        z-index: 3;
        background: var(--clr-white);
        display: none;
        left: -100px;
        animation: menuAni 1s forwards;
    }

    @keyframes menuAni {
        to{
            left: 0;
        }
    }

    aside .logo h2{
        display: inline;
    }

    aside .sidebar h3{
        display: inline;
    }

    aside .sidebar a{
        width: 100%;
        height: 3.4rem;
    }

    aside .top div.close span{
        display: inline;
        position: absolute;
        right: 0;
        margin-right: 30px;
        font-size: 35px;
    }

    .right .top{
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 0.8rem;
        background: var(--clr-white);
        width: 100%;
        height: 4.6rem;
        z-index: 2;
        box-shadow: 0 1rem 1rem var(--box-shadow);
        margin: 0;
    }

    main .insights{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        gap: 1.6rem;
        padding: 40px;
    }

    main .recent_order{
        padding: 30px;
        margin: 0 auto;
    }

    .right .profile{
        position: absolute;
        left: 70%;
    }

    .right .recent_updates{
        padding: 30px;
    }

    .right .sales_analytics{
        padding: 30px;
    }

    .add_products{
        padding: 30px;
    }

    .right .top button{
        display: inline-block;
        background: transparent;
        cursor: pointer;
        color: var(--clr-dark);
        position: absolute;
        left: 1rem;
    }
}

</style>