<template>
<CarouselView />
<div class="cardBody">
<HomeCardViewVue
:background-color="'#FFD4C0'"
:circle-text="'揪團玩'"
:cart-text="'想找人一起出去玩卻總是跟朋友時間喬不攏嘛？一起「揪團玩」來看看現在有哪些團可以跟吧！'"
:img="'https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/%E9%B3%A5%E5%B1%853.png?raw=true'"
:bottom-img="'https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/%E5%B1%B12.png?raw=true'"
/>

<HomeCardViewVue
:background-color="'#FFB077'"
:circle-text="'揪團行'"
:cart-text="'在日本一個人租車擔心太貴嗎？一起「揪團行」找夥伴一起租車吧 !'"
:img="'https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/bicycle.png?raw=true'"
:bottom-img="'https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/%E5%B1%B11.png?raw=true'"
/>

<HomeCardViewVue
:background-color="'#FFD4C0'"
:circle-text="'揪團買'"
:cart-text="'想找人一起湊免稅免運嗎？一起「揪團買」來看看現在有哪些團可以跟吧！'"
:img="'https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/shop.png?raw=true'"
:bottom-img="'https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/%E5%B1%B12.png?raw=true'"
/>

<HomeCardViewVue
:background-color="'#FFB077'"
:circle-text="'揪團住'"
:cart-text="'想要找便宜的床位嗎？一起「揪團住」來看看有哪些房間有優惠吧！'"
:img="'https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/bed.png?raw=true'"
:bottom-img="'https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/%E5%B1%B11.png?raw=true '"
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
