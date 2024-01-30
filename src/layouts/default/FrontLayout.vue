<template>
  <HeaderView/>
  <CarouselView/>

  <div>
    <router-link to="/register">註冊頁面</router-link>
  </div>
</template>

<script setup>
import HeaderView from '@/components/HeaderView.vue';
import CarouselView from '@/components/CarouselView.vue';
</script>
