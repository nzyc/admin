<template>
    <div>
        <input type="text" v-model="shu">
        <div class="one">
            <div class="two" :style="turnStyles"></div>
            <div class="three" @click="zhuan"></div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                shu: 0,
                num: 0,
                count:0
            }
        },
        computed: {
            turnStyles() {
                return {
                    transform: `rotate(${this.num}deg)`,
                    transition: `transform 6s ease-in-out`
                };
            },
        },
        methods: {
            zhuan () {
                this.count++;
                this.num = - (360 / 8) * (this.shu - 1) + (360 * 6 * this.count);
                console.log(this.num)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .one{
        height: 450px;
        width: 450px;
        background-size: 450px 450px;
        background-image: url(https://cdn.mr007.co/images/web/promo/spinner-back.png);
        position: relative;
    }
    .two{
        width: 340px;
        height: 340px;
        background-size: 340px 340px;
        background-image: url("https://cdn.mr007.co/images/web/promo/spinner.png");
        position: absolute;
        left: 55px;
        top: 55px;
        transform: rotate(0deg);
        transition: 2s;
    }
    .three{
        cursor: pointer;
        position: absolute;
        top: 119px;
        left: 156px;
        z-index: 1000;
        width: 139px;
        height: 175px;
        background: transparent;
        background-image: url(https://cdn.mr007.co/images/web/promo/spinner-pointer.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        border: 0;
    }
</style>