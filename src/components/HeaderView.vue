<template>
    <v-card>
      <div class="headerBG">
        <img class="temple" src="../assets/鳥居4.png" />
        <img class="sun" src="../assets/太陽.png" alt="" />
        <div class="backgroundImg">
          <img src="../assets/山2.png" />
        </div>
        <div class="cart">
          <span class="mdi mdi-cart Icon"></span>
          <p>購物車</p>
        </div>
  
        <v-dialog width="500">
          <template v-slot:activator="{ props }">
            <div class="member" v-bind="props" @click="showPopup">
              <span class="mdi mdi-account Icon"></span>
              <p>會員登入</p>
            </div>
          </template>
  
          <template v-slot:default="{ isActive }">
            <v-card class="login" title="會員登入">
                <div class="closeLogin" @click="isActive.value = false">x</div>
              <v-form class="loginForm" validate-on="submit lazy" @submit.prevent="submit">
                <v-text-field v-model="loginAccount" :rules="rules" label="帳號" hint="請輸入帳號"></v-text-field>
                <v-text-field v-model="Password" :rules="rules" label="密碼" hint="請輸入密碼"></v-text-field>
  
                <v-btn :loading="loading" type="submit" block class="mt-2" text="登入"></v-btn>
              </v-form>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-card-text href="#">
                    還沒有帳號？前往註冊
                </v-card-text>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
  
      <v-toolbar color="#FFDA4A" height="30px">
        <template v-slot:extension>
          <v-tabs v-model="tab" align-tabs="title">
            <v-tab v-for="item in items" :key="item" :value="item">
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
  
      <v-window v-model="tab">
        <v-window-item v-for="item in items" :key="item" :value="item">
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const tab = ref(null);
      const items = ['揪團玩', '揪團行', '揪團買', '揪團住', '好康報你知'];
      const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  
      const loginAccount = ref('');
      const Password = ref('');
      const loading = ref(false);
      const rules = [(v) => !!v || 'Field is required'];
  
      const showPopup = () => {
        // 在這裡執行彈跳視窗相關邏輯
      };
  
      const submit = () => {
        // 在這裡處理表單提交相關邏輯
      };
  
      return {
        tab,
        items,
        text,
        loginAccount,
        Password,
        loading,
        rules,
        showPopup,
        submit,
      };
    },
  };
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
    animation: rotateSun 10s linear infinite;
  }
  @keyframes rotateSun {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
  .headerBG{
    background-color:#FFEFE8 ;
    height:150px;
    position: relative;
  }
  .cart{
    position: absolute;
    right:470px;
    top:15px;
    background-color: #E79130;
    color:white;
    width:80px;
    height:80px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0px 5px 5px 2px #e5cfcf
  }
  .member{
    position: absolute;
    right:350px;
    top:15px;
    background-color: #F8B44B;
    color:white;
    width:80px;
    height:80px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-radius: 20px;
    box-shadow: 0px 5px 5px 2px #e5cfcf
  }
  .member:hover{
    cursor: pointer;
  }
  .Icon{
    font-size:32px;
  }
  .login{
    padding: 10px;
    position:relative;
    overflow: visible !important;
  }
  .loginForm{
    padding: 20px;
  }
  .closeLogin{
    width:30px;
    height:30px;
    border-radius: 50%;
    background-color: rgb(244, 225, 225);
    color: black;
    position: absolute;
    top: -10px;
    right: -10px;
    text-align: center;
    line-height:30px;
    z-index: 99;
  }
  .closeLogin:hover{
    cursor: pointer;
  }
  </style>