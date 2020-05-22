<template>
    <div class="k-tagSlider">
        <div class="slider-box" :style="{left: `${activeIndex * 100/tags.length}%`, width: `${100/tags.length}%`}"></div>
        <div class="tag" v-for="(item,index) in tags" :key="index" @click="clickItem(index)">{{item}}</div>
    </div>
</template>

<script>
export default {
    name: 'k-tagSlider',
    props: {
        value:{
            type: null
        },
        tags:{
            type: Array,
            default: ['正常','异常']
        }
    },
    data(){
        return{
            activeIndex: 0,
        }
    },
    watch:{
        value(value){
            this.activeIndex = value;
        }
    },
    methods:{
        clickItem(index){
            this.activeIndex = index;
            this.$emit("input", index);
        }
    },
    mounted(){
        this.activeIndex = this.value;
    }
}
</script>

<style lang="less">
.k-tagSlider{
    position: relative;
    background: #D8DEF3;
    height: 32px;
    border-radius: 32px;
    display: flex;
    .tag{
        flex: 1;
        line-height: 32px;
        height: 32px;
        font-size:14px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(47,73,160,1);
        position: relative;
        cursor: pointer;
    }
    .slider-box{
        position: absolute;
        height: 32px;
        border-radius: 16px;
        background: #fff;
        left: 33.33%;
        top: 0;
        transition: left 0.5s;
    }
}
</style>
