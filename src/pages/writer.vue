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
                    :style="{transform: 'translate3d(0,'+ obj.y +'px,0)'}"
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
                    {index: 0, name: 'Linux', isHidden: false, isActive: false, y: 0},
                    {index: 1, name: 'Mac', isHidden: false, isActive: false, y: 0},
                    {index: 2, name: 'Windows', isHidden: false, isActive: false, y: 0},
                    {index: 3, name: 'Css', isHidden: false, isActive: false, y: 0},
                    {index: 4, name: 'Html', isHidden: false, isActive: false, y: 0},
                    {index: 5, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 6, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 7, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 8, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 9, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 10, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 11, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 12, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 13, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 14, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 15, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 16, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 17, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 18, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 19, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 20, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 21, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 22, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 23, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 24, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 25, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 26, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 27, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 28, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 29, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                    {index: 30, name: 'Javascript', isHidden: false, isActive: false, y: 0},
                ],
                // 列表scrollTop
                writeLeftTop: 0,
            }
        },
        computed: {},
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
                let several = 0;
                let flagStr = '';
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
                        if (-y % 20 > 1 && -y < (index * 40 + 20)) {
                            let num = Math.floor((-y - 1 - 20) / 40 + 1);
                            if (num !== 0) {
                                self.listTitle[index].index = index - num;
                                several = num;
                                flagStr = 'up';
                                for (let i = 1; i <= num; i++) {
                                    self.listTitle[index - i].y = 40;
                                }
                            }
                        }
                    }
                    // 向下滑动
                    else if (y > 0) {
                        if (y % 20 > 1) {
                            let num = Math.floor((y - 1 - 20) / 40 + 1);
                            if (num !== 0) {
                                self.listTitle[index].index = index + num;
                                several = num;
                                flagStr = 'down';
                                for (let i = 1; i <= num; i++) {
                                    self.listTitle[index + i].y = -40;
                                }
                            }
                        }
                    }
                    return false;
                };
                document.onmouseup = function () {
                    self.listTitle[index].isHidden = false;
                    self.specialLi.isShow = false;
                    document.onmousemove = null;
                    document.onmouseup = null;
                    for (let i = 1; i <= several; i++) {
                        // 向上
                        if (flagStr === 'up') {
                            self.listTitle[index - i].index = self.listTitle[index - i].index + 1;
                        }
                        // 向下
                        if (flagStr === 'down') {
                            self.listTitle[index + i].index = self.listTitle[index + i].index - 1;
                        }
                    }
                    self.listTitle = self.listSort();
                };
            },
            // 排序
            listSort() {
                let self = this;
                return self.listTitle.sort(function (a, b) {
                    let a1 = a.index;
                    let b1 = b.index;
                    a.y = 0;
                    b.y = 0;
                    if (a1 < b1) {
                        return -1;
                    } else if (a1 > b1) {
                        return 1;
                    }
                    return 0;
                })
            },
        },
        created() {
        },
        mounted() {
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