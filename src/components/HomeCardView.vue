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
        <div class="card">card</div>
        <div class="btn">
            <MainBtnView main-btn="揪團去"></MainBtnView>
            <SubBtnView sub-btn="開團去"></SubBtnView>
        </div>
        <div class="bottomImg"><img
:src="bottomImg"
alt="bottomImg"
></div>
    </div>
</template>
<script setup>
import MainBtnView from './btn/MainBtnView.vue'
import SubBtnView from './btn/SubBtnView.vue'
import { defineProps } from 'vue'
const props = defineProps(['circleText', 'cartText', 'img', 'backgroundColor', 'bottomImg'])

</script>
<style scoped>
    .bg{
        position: relative;
        background-color: white;
        width:80%;
        height:300px;
        margin:auto;
        border-radius: 20px;
        margin-bottom: 80px;
    }
    .circle{
        position:absolute;
        width:100px;
        height:100px;
        border-radius:50%;
        /* background-color: yellow; */
        display: flex;
        justify-content: center;
        align-items: center;
        top:-50px;
        left:-50px;
        box-shadow: 1px 1px 0 0 rgb(157, 157, 157);
    }
    .img img{
        width:100px;
        position:absolute;
        top:-20px;
        right:20px;
    }
    .text{
        width:70%;
        position:absolute;
        right:15%;
        top:10%;
    }
    .card{
        position: absolute;
        top:30%;
        left:15%;
    }
    .btn{
        position: absolute;
        top:70%;
        right:10%;
        display: flex;
    }
    .bottomImg{
        position:absolute;
        bottom:0;
    }
</style>
