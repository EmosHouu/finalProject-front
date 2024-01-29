<template>
    <v-card>
        <div class="headerBG">
            <img class="temple" src="../assets/鳥居4.png"/>
            <img class="sun" src="../assets/太陽.png" alt="">
            <div class="backgroundImg">
                <img src="../assets/山2.png" />
            </div>
        </div>
        <v-toolbar color="#FFDA4A" height="30px">

        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            align-tabs="title"
          >
            <v-tab
              v-for="item in items"
              :key="item"
              :value="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-window v-model="tab">
        <v-window-item
          v-for="item in items"
          :key="item"
          :value="item"
        >
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
  </template>

<script>
export default {
  data () {
    return {
      tab: null,
      items: [
        '揪團玩', '揪團行', '揪團買', '揪團住', '好康報你知'
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
  <style scoped>
  .backgroundImg {
    background-image:url("@/assets/山2.png");
    background-repeat: repeat-x;
    width: 100%;
    position: absolute;
    bottom: -10px;
    /* width:100%; */
  }
  .backgroundImg img{
    height: 100%;
  }
  .temple{
    width:150px;
    position: absolute;
    top:15px;
    left:100px;
  }
  .sun{
    width:100px;
    position: absolute;
    top:10px;
    right:100px;
  }
  .headerBG{
    background-color:#FFEFE8 ;
    height:150px;
    position: relative;
  }
  </style>
