<template>
    <div class="write">
        <div class="write-left" ref="writeLeft">
            <ul>
                <li class="single-li"
                    v-for="(obj,index) in listTitle"
                    :key="index"
                    :class="{hidden:obj.isHidden,active:obj.isActive}"
                    @click="listTitleClick(index)"
                    @mousedown="listTitleDown($event,obj.name,index,obj.isActive)"
                >
                    <span>{{obj.name}}</span>
                    <div v-if="obj.isActive"><i class="el-icon-setting"></i></div>
                </li>
            </ul>
        </div>
        <div>
            <h1>{{specialLi.x}}</h1>
            <h1>{{specialLi.y}}</h1>
        </div>
        <div></div>
        <li class="single-li special-li"
            v-if="specialLi.isShow"
            :style="{left: specialLi.left,top:specialLi.top,transform: 'translate3d('+specialLi.x+','+specialLi.y+',0px)'}"
            :class="{active:specialLi.isActive}"
        >
            <span>{{specialLi.content}}</span>
            <div v-if="specialLi.isActive"><i class="el-icon-setting"></i></div>
        </li>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 拖拽的Li
                specialLi: {
                    isShow: false,
                    isActive: false,
                    content: '',
                    left: '',
                    top: '',
                    x: 0,
                    y: 0,
                },
                // 列表title
                listTitle: [
                    {name: 'Linux', isHidden: false, isActive: false},
                    {name: 'Mac', isHidden: false, isActive: false},
                    {name: 'Windows', isHidden: false, isActive: false},
                    {name: 'Html', isHidden: false, isActive: false},
                    {name: 'Css', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                    {name: 'Javascript', isHidden: false, isActive: false},
                ],
                // 列表scrollTop
                writeLeftTop: 0,
            }
        },
        computed : {},
        methods: {
            // 列表 title 点击高亮
            listTitleClick(index) {
                for (let i in this.listTitle) {
                    this.listTitle[i].isActive = false;
                }
                this.listTitle[index].isActive = true;
            },
            // 列表 拖拽
            listTitleDown(event, name, index, isActive) {
                let self = this;
                let left = event.clientX - event.currentTarget.offsetLeft;
                let top = event.clientY - event.currentTarget.offsetTop + self.writeLeftTop;
                let moveLeft = event.clientX - left;
                let moveTop = event.clientY - top;
                document.onmousemove = function (e) {
                    let x = e.clientX - left;
                    let y = e.clientY - top - moveTop;
                    self.listTitle[index].isHidden = true;
                    self.specialLi = {
                        isShow: true,
                        isActive: isActive,
                        content: name,
                        left: moveLeft + 'px',
                        top: moveTop + 'px',
                        x: x + 'px',
                        y: y + 'px',
                    };
                    // 向上滑动
                    if (y < 0) {
                        console.log('向上滑动')
                        // if () {
                        //
                        // }
                    }
                    // 向下滑动
                    else if (y > 0) {
                        console.log('向下滑动')
                    }
                    // 原地不动
                    else {
                        console.log('原地不动')
                    }
                    return false;
                };
                document.onmouseup = function () {
                    self.listTitle[index].isHidden = false;
                    self.specialLi.isShow = false;
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
            },
        },
        mounted() {
            console.log(-2 % 20)
            let self = this;
            let writeLeft = self.$refs.writeLeft;
            writeLeft.addEventListener("scroll", function () {
                self.writeLeftTop = this.scrollTop
            });
        }
    }
</script>

<style lang="scss" scoped>
    .write {
        display: flex;
        position: relative;
    }

    .write-left {
        width: 230px;
        height: 100%;
        overflow-y: auto;
        background-color: #404040;
        & > ul {
            background-color: #8c8c8c;
            position: relative;
        }
    }

    .single-li {
        width: 230px;
        height: 40px;
        line-height: 40px;
        background-color: #404040;
        padding: 0 15px;
        box-sizing: border-box;
        color: #f2f2f2;
        cursor: pointer;
        display: flex;
        position: relative;
        & > span {
            width: 160px;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        & > div {
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
        }
    }

    .single-li:hover {
        background-color: #666;
    }

    .special-li {
        position: absolute;
        background-color: #666;
    }

    .hidden {
        visibility: hidden;
        opacity: 0;
    }

    .active {
        background-color: #666;
        border-left: 3px solid #ec7259;
    }
</style>