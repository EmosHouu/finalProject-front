<template>
<VCard color="#FFEFE8">
  <VCardTitle>
    <h2>{{ name }}</h2>
  </VCardTitle>
  <v-carousel
  show-arrows="hover"
  hide-delimiter-background
  >
    <v-carousel-item
      src="./src/assets/九州風景.jpeg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="./src/assets/北海道風景.jpeg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>
</VCard>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['_id', 'user', 'image', 'name'])
console.log(props.name) // 查看是否能够获取到name的值
</script>
