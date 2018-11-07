<template>
    <div id="app">
        <el-container class="app-body">

            <!--header-->
            <el-header class="app-header">
                <el-row>
                    <el-col :span="3" class="app-col">
                        <router-link to="/" class="logo">
                            <i class="el-icon-menu"></i>
                            Ningzy
                        </router-link>
                    </el-col>
                    <el-col :span="21" class="app-col">
                        <el-menu
                                router
                                :default-active="$route.path"
                                mode="horizontal"
                                background-color="#545c64"
                                text-color="#fff"
                                active-text-color="#ffd04b">
                            <el-menu-item index="/">首页</el-menu-item>
                            <el-menu-item index="/writer">写作</el-menu-item>
                            <el-menu-item index="/calendar">日历</el-menu-item>
                            <el-menu-item index="/about">关于</el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-header>

            <!--main-->
            <el-container class="app-main">
                <transition :name="transitionName">
                    <router-view></router-view>
                </transition>
            </el-container>

            <!--footer-->
            <el-footer class="app-footer">
                脚步
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                transitionName: ''
            }
        },
        watch: {
            $route(to, from) {
                if (to.meta.index > from.meta.index) {
                    this.transitionName = 'slide-left';
                } else {
                    this.transitionName = 'slide-right';
                }
            }
        },
        components: {},
        methods: {},
    }
</script>

<style lang="scss">

    @charset "UTF-8";
    body {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        margin: 0;
        /*background-color: #f5f5f5;*/
    }

    a {
        text-decoration: none;
    }

    ul, ol, dl, li {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
    }

    img {
        border: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
        box-shadow: 0 0 0px 1000px white inset;
    }

    a:active {
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    html, body, #app {
        height: 100%;
    }

    .app-body {
        height: 100%;
    }

    .app-header {
        background-color: #545c64;
        line-height: 60px;
        .app-col {
            height: 60px;
        }
        .logo {
            display: inline-block;
            height: 60px;
            color: #fff;
            font-size: 24px;
            text-align: center;
            font-weight: bold;
        }
        .el-menu-item {
            width: 150px;
            text-align: center;
            font-size: 18px;
        }
    }

    .app-footer {
        background-color: #545c64;
        color: #fff;
        text-align: center;
        line-height: 60px;
    }

    /* 路由动画 */
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all 500ms;
        position: absolute;
    }

    .slide-right-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .slide-right-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
</style>
