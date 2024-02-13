<template>
    <div class="cardBody">
        <div class="card">
          <v-carousel show-arrows="hover" class="carousel" height="100%" hide-delimiter-background>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            ></v-carousel-item>
      
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
            ></v-carousel-item>
      
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
        </div>
        <div class="cardBottom">
            <div class="title">{{title}}</div>
            <div class="location">
                <span class="mdi mdi-map-marker">地點：
                </span>
                <div>{{location}}</div>
            </div>
            <div class="location">
                <span class="mdi mdi-account">需求人數：
                </span>
                <div>{{people}}</div>
            </div>
            <div class="location">
                <span class="mdi mdi-calendar-clock">日期：
                </span>
                <div>{{date}}</div>
            </div>
            <div><TagView :hashtag="'揪團玩'"></TagView></div>
          
        </div>
    </div>
  </template>
  
  <script setup>
  import TagView from '../hashtag/TagView.vue';
  import { defineProps } from 'vue';
  const props = defineProps(['location', 'title', 'people', 'date']);
  </script>
  
  <style scoped>
  .card {
    width: 250px;
    height: 180px; /* 调整卡片高度，使其适应设计需求 */
    background-color:white;
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
    height: 150px;
    background-color: white;
    border-radius: 0 0 10px 10px;
  }
  .cardBody{
    height:330px;
    width:250px;
    border-radius:10px;
    box-shadow: 0px 3px 2px 2px #e5cfcf;
    margin-right: 30px;
  }
  .location{
    display:flex;
    padding-bottom:5px;
  }
  .cardBottom{
    padding-left:10px;
    padding-top:5px;
  }
  </style>
  