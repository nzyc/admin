<template>
    <div>
        <h1>我是A</h1>
        <el-time-select
            v-model="value1"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
            }"
            placeholder="选择时间">
        </el-time-select>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                value1: ""
            }
        }
    }
</script>

<style scoped>

</style>