<template>
    <div class="home">
        <el-container class="home-body">
            <el-aside class="home-aside">
                <el-menu
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <i class="el-icon-date"></i>
                        <span slot="title">统计</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航管理</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-message"></i>
                        <span slot="title">评论管理</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-delete"></i>
                        <span slot="title">回收站</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        width: 100%;
        .home-body {
            height: 100%;
        }
        .home-aside {
            width: 220px !important;
            background-color: #545c64
        }
    }
</style>