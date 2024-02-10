<template>
    <div class="hashtag">{{hashtag}}</div>
</template>
<script setup>
    import { defineProps } from 'vue';
    const {hashtag} = defineProps(['hashtag']);
</script>
<style scoped>
    .hashtag{
        background-color:#FFD4C0 ;
        width:70px;
        height:22px;
        font-size: 14px;
        text-align: center;
        border-radius: 20px;
    }
</style>