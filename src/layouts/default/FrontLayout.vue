<template>
  <Header />
  <v-main>
    <routerView></routerView>
  </v-main>

  <FooterView />

</template>

<script setup>
import Header from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
</script>
<style scoped>
.v-main{
  background-color: #FFEFE8;
}

</style>
