<template>
<CarouselView />
<div class="cardBody">
<HomeCardViewVue
:background-color="'#FFD4C0'"
:circle-text="'揪團玩'"
:cart-text="'想找人一起出去玩卻總是跟朋友時間喬不攏嘛？一起「揪團玩」來看看現在有哪些團可以跟吧！'"
:img="'../src/assets/鳥居3.png'"
:bottom-img="'../src/assets/山2.png'"
/>

<HomeCardViewVue
:background-color="'#FFB077'"
:circle-text="'揪團行'"
:cart-text="'在日本一個人租車擔心太貴嗎？一起「揪團行」找夥伴一起租車吧 !'"
:img="'../src/assets/bicycle.png'"
:bottom-img="'../src/assets/山1.png'"
/>

<HomeCardViewVue
:background-color="'#FFD4C0'"
:circle-text="'揪團買'"
:cart-text="'想找人一起湊免稅免運嗎？一起「揪團買」來看看現在有哪些團可以跟吧！'"
:img="'../src/assets/shop.png'"
:bottom-img="'../src/assets/山2.png'"
/>

<HomeCardViewVue
:background-color="'#FFB077'"
:circle-text="'揪團住'"
:cart-text="'想要找便宜的床位嗎？一起「揪團住」來看看有哪些房間有優惠吧！'"
:img="'../src/assets/bed.png'"
:bottom-img="'../src/assets/山1.png'"
/>
  </div>
</template>

<script setup>
import CarouselView from '@/components/CarouselView.vue'
import HomeCardViewVue from '@/components/HomeCardView.vue'

</script>
<style scoped>
.cardBody{
  width: 100%;
  /* height:100%; */
  background-color: #FFEFE8;
  padding-top:80px;
}

</style>
