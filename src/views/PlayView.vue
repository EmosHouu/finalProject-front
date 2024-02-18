<template>
  <div class="header">
    <SmallCarouselView :title="'揪團玩'"></SmallCarouselView>
    <SearchbarView></SearchbarView>
  </div>
  <div class="body">
    <SectionView :fill="'#FFD4C0'" :text="'熱門揪團活動'"></SectionView>
    <SectionView :fill="'#FFB077'" :text="'最新揪團活動'"></SectionView>
  </div>
</template>

<script setup>
import SmallCarouselView from '../components/SmallCarouselView.vue';
import CardDetailView from '@/components/card/CardDetailView.vue';
import SectionView from '@/components/SectionView.vue';
import SearchbarView from '@/components/btn/SearchbarView.vue';

</script>
<style scoped>
  .header{
    width:100%;
  }
  .body{
    height:100%;
  }

</style>
