<template>
  <RouterLink
  class="text-decoration-none"
  :to="'/actdetail/' + _id"
  >
    <div class="cardBody">
        <div class="card">
          <v-carousel
          show-arrows="hover"
          class="carousel"
          height="100%"
          hide-delimiter-background
          >
            <v-carousel-item
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            cover
          ></v-carousel-item>
          </v-carousel>
        </div>
        <div class="cardBottom">
            <div class="location">
                <span class="mdi mdi-map-marker"></span>
                <div>{{ location }}</div>
            </div>
            <!-- <div><TagView :hashtag="'揪團玩'"></TagView></div> -->
            <div class="hashtag">
            <v-chip
      :style="{ marginRight: '10px' }"
      color="#FFD4C0"
      variant="flat"
      >{{ category }}
      </v-chip>
      <v-chip
      color="#FFD4C0"
      variant="flat"
      >{{ area }}
      </v-chip>
    </div>
        </div>
    </div>
  </RouterLink>
  </template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
const router = useRouter()
import { defineProps } from 'vue'
// const { location } = defineProps(['location'])
const props = defineProps(['_id', 'area', 'location', 'category', 'images'])
console.log('area', props.area)
</script>

  <style scoped>
  .card {
    width: 250px;
    height: 180px; /* 调整卡片高度，使其适应设计需求 */
    background-color:#FFEFE8;
    border-radius:10px 10px 0 0 ;
  }

  .carousel {
    height: 100%; /* 设置輪播牆的高度与卡片相匹配 */
    width:230px;
    margin:auto;
    padding-top:10px;
  }

  .cardBottom {
    width: 250px;
    height: 70px;
    background-color: #FFEFE8;
    border-radius: 0 0 10px 10px;
    color:black;
  }
  .cardBody{
    height:260px;
    width:250px;
    border-radius:10px;
    box-shadow: 0px 3px 2px 2px #e5cfcf;
    margin-right: 30px;
    background-color:#FFEFE8;
  }
  .location{
    display:flex;
    padding-bottom:5px;
  }
  .cardBottom{
    padding-left:10px;
    padding-top:5px;
  }
  .hashtag{
    margin-bottom:8px;
  }
  </style>
