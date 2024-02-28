<template>
    <div class="bg">
        <div
class="circle"
:style="{ backgroundColor: backgroundColor }"
>{{ circleText }}</div>
        <div class="text">{{ cartText }}</div>
        <div class="img"><img
:src="img"
alt="img"
></div>
        <div class="card">
            <CardView
v-for="(data, index) in apiData"
:key="index"
:area="data.area"
/>
            <!-- <CardView :location="'京都'"></CardView>
            <CardView :location="'京都'"></CardView> -->
        </div>
        <div class="btn">
            <MainBtnView main-btn="揪團去"></MainBtnView>
            <SubBtnView sub-btn="開團去"></SubBtnView>
        </div>
        <div
class="bottomImg"
:style="{ backgroundImage: `url(${bottomImg})` }"
></div>
    </div>
</template>
<script setup>
import MainBtnView from './btn/MainBtnView.vue'
import SubBtnView from './btn/SubBtnView.vue'
import CardView from './card/CardView'
import { defineProps, ref } from 'vue'
// const props = defineProps(['circleText', 'cartText', 'img', 'backgroundColor', 'bottomImg'])
const props = defineProps(['circleText', 'cartText', 'img', 'backgroundColor', 'bottomImg', 'dataFromApi'])
const apiData = ref(props.dataFromApi)
</script>
<style scoped>
    .bg{
        position: relative;
        background-color: white;
        width:80%;
        height:400px;
        margin:auto;
        border-radius: 20px;
        margin-bottom: 80px;
    }
    .circle{
        position:absolute;
        width:120px;
        height:120px;
        border-radius:50%;
        font-size: 22px;
        font-weight: bold;
        /* background-color: yellow; */
        display: flex;
        justify-content: center;
        align-items: center;
        top:-50px;
        left:-50px;
        /* box-shadow: 1px 1px 0 0 rgb(157, 157, 157); */
        box-shadow: 0px 3px 2px 2px #e5cfcf;
    }
    .img img{
        width:120px;
        position:absolute;
        top:-20px;
        right:20px;
    }
    .text{
        width:70%;
        position:absolute;
        right:15%;
        top:10%;
        font-size: 18px;
        font-weight:bold;
    }
    .card{
        position: absolute;
        top:22%;
        left:15%;
        display: flex;
    }
    .btn{
        position: absolute;
        top:60%;
        right:7%;
        display: flex;
    }
    .bottomImg{
        position:absolute;
        bottom:-60px;
        width: 100%;
        height: 100px; /* 设置背景图高度，可以根据需要调整 */
        background-repeat: repeat-x;
    }
</style>
