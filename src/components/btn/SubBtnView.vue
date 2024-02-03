<template>
    <div class="btn2">{{subBtn}}</div>
</template>
<script setup>
    import { defineProps } from 'vue';
    const { subBtn } = defineProps(['subBtn']);
</script>
<style scoped>
    .btn2{
        width:100px;
        height:40px;
        border-radius: 10px;
        background-color:#F8B44B ;
        color:white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:10px;
        box-shadow: 1px 1px 0 0 gray;
    }
</style>