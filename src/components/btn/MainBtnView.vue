<template>
    <div class="btn1">{{mainBtn}}</div>
</template>
<script setup>
    import { defineProps } from 'vue';
    const { mainBtn } = defineProps(['mainBtn']);
</script>
<style scoped>
    .btn1{
        width:100px;
        height:40px;
        border-radius: 10px;
        background-color:#E79130 ;
        color:white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:10px;
        box-shadow: 1px 1px 0 0 rgb(154, 154, 154);
    }
</style>