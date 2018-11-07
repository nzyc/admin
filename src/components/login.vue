<template>
    <div class="login">
        <div class="main">
            <a href="#terrestrial" class="open-popup">terrestrial animals</a>
            <a href="#aquatic" class="open-popup">aquatic animals</a>
        </div>

        <section id="terrestrial" class="popup">
            <a href="#" class="back">&lt; back</a>
            <p>🦓🦒🐅🐆🐘🦏🐃🦌🐐🐫</p>
        </section>

        <section id="aquatic" class="popup">
            <a href="#" class="back">&lt; back</a>
            <p>🐋🐳🐬🐟🐠🐡🐙🦑🦐🦀</p>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .login{
        height: 100%;
    }
    /* main page layout */
    .main {
        height: inherit;
        background: linear-gradient(dodgerblue, darkblue);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .open-popup {
        box-sizing: border-box;
        color: white;
        font-size: 16px;
        font-family: sans-serif;
        width: 10em;
        height: 4em;
        border: 1px solid;
        text-align: center;
        line-height: 4em;
        text-decoration: none;
        text-transform: capitalize;
        margin: 1em;
    }
    .open-popup:hover {
        border-width: 2px;
    }


    /* popup page layout */
    .popup {
        position: absolute;
        top: 0;
        width: 100%;
        height: inherit;
        flex-direction: column;
        justify-content: flex-start;
        display: none;
    }
    .popup:target {
        display: flex;
    }
    .popup .back {
        font-size: 20px;
        font-family: sans-serif;
        text-align: center;
        height: 2em;
        line-height: 2em;
        background-color: #ddd;
        color: black;
        text-decoration: none;
    }
    .popup .back:visited {
        color: black;
    }
    .popup .back:hover {
        background-color: #eee;
    }
    .popup p {
        font-size: 100px;
        text-align: center;
        margin: 0.1em 0.05em;
    }


    /* animation effects */
    .popup > * {
        filter: opacity(0);
        animation: fade-in 0.5s ease-in forwards;
        animation-delay: 1s;
    }
    @keyframes fade-in {
        to {
            filter: opacity(1);
        }
    }


    .popup::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 0;
        top: 50%;
        background-color: white;
        animation: open-animate 0.5s ease-in forwards;
        animation-delay: 0.5s;
    }
    @keyframes open-animate {
        to {
            height: 100vh;
            top: 0;
        }
    }

    /*.popup::after {*/
        /*content: '';*/
        /*position: absolute;*/
        /*width: 0;*/
        /*height: 2px;*/
        /*background-color: white;*/
        /*top: calc((100% - 2px) / 2);*/
        /*left: 0;*/
        /*animation: line-animate 0.5s cubic-bezier(0.8, 0.2, 0, 1.2);*/
    /*}*/

    /*@keyframes line-animate {*/
        /*50%, 100% {*/
            /*width: 100%;*/
        /*}*/
    /*}*/

</style>