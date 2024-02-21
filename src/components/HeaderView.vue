<template>
  <v-card>
    <div class="headerBG">
      <img
class="temple"
src="../assets/鳥居4.png"
/>
<img
class="logo"
src="../assets/logo3.png"
/>
      <img
class="sun"
src="../assets/太陽.png"
alt=""
@click="navigateToHome"
/>
      <div class="backgroundImg">
        <img src="../assets/山2.png" />
      </div>
      <div
      class="createActivity"
      @click="navigateToActivity"
      >
        <span class="mdi mdi-plus Icon"></span>
        <p>我要開團</p>
      </div>

      <v-dialog
      v-if="!user.isLogin"
v-model="dialogVisible"
width="500"
>
        <template #activator="{ props }">
          <div
class="member"
v-bind="props"
@click="showPopup"
>
            <span class="mdi mdi-account Icon"></span>
            <p>會員登入</p>

          </div>

        </template>

        <template #default="{ isActive }">
          <v-card
          style="margin-bottom:50px;"
          class="login"
          title="會員登入"
          >
          <div
          class="closeLogin"
          @click="isActive.value = false"
          >x</div>
          <VForm
          :disabled="isSubmitting"
          @submit.prevent="submit"
          >
          <br>
          <VTextField
          v-model="account.value.value"
          class="custom-text-field"
          label="帳號"
          minlength="4"
          maxlength="20"
          counter="counter"
          :error-messages="account.errorMessage.value"
          ></VTextField>
          <VTextField
          v-model="password.value.value"
          class="custom-text-field"
          label="密碼"
          type="password"
          minlength="4"
          maxlength="20"
          counter="counter"
          :error-messages="password.errorMessage.value"
          ></VTextField>

          <div class="button-container">
            <VBtn
            type="submit"
            color="#F8B44B"
            >登入
            </VBtn>
          </div>

            </VForm>

            <v-card-actions style="display: flex; justify-content: center;">
              <VBtn @click="navigateToRegister">
                還沒有帳號？前往註冊
              </VBtn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <div
      v-if="user.isLogin"
      class="member"
      @click="logout"
      >
      <span class="mdi mdi-logout Icon"></span>
      <p>登出</p>
      </div>

      <!-- <div
      v-if="user.isLogin"
      class="vip"
      @click="vipPage"
      >
      <span class="mdi mdi-account Icon"></span>
      <p>會員中心</p>
      </div> -->
    </div>

    <v-toolbar
color="#FFDA4A"
height="30px"
>
      <template #extension>
        <v-tabs
v-model="tab"
align-tabs="title"
>
          <v-tab
v-for="item in items"
:key="item"
:value="item"
@click="item === '首頁' ? navigateToHome() : item === '揪團玩' ? navigateToPlay() : item === '揪團行' ? navigateToDrive(): item ==='揪團買'?navigateToBuy() : item === '揪團住'? navigateToHotel() : item === '好康報你知'? navigateToNews() :item === '會員中心'? navigateToVIP(): null "
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

        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useApi } from '@/composable/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'

const router = useRouter()
const { api, apiAuth } = useApi()
const user = useUserStore()

const tab = ref(null)
const items = ['首頁', '揪團玩', '揪團行', '揪團買', '揪團住', '好康報你知', '會員中心']

const dialogVisible = ref(false) // 控制弹窗显示的响应式变量

const showPopup = () => {
  dialogVisible.value = true // 设置弹窗显示
}

const navigateToRegister = () => {
  router.push('/register') // 使用router.push導航到RegisterView
  dialogVisible.value = false // 关闭弹窗
}

const navigateToActivity = () => {
  router.push('/activity') // 使用router.push導航到RegisterView
  dialogVisible.value = false // 关闭弹窗
}

// 定義註冊表單的資料格式
const schema = yup.object({
  account: yup
    .string()
    .required('帳號為必填欄位')
    .min(4, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符'),
  password: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(20, '密碼長度不符')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const password = useField('password')
// 最下方會顯示的狀態列可以取代ALERT
const createSnackbar = useSnackbar()

// 頁面跳轉區
// 添加 navigateToHome 函数
const navigateToHome = () => {
  router.push('/') // 导航到首页
}

// 添加 navigateToPlay 函数
const navigateToPlay = () => {
  router.push('/play') // 导航到 PlayView
}

const navigateToDrive = () => {
  router.push('/drive') // 导航到 driveView
}

const navigateToBuy = () => {
  router.push('/buy') // 导航到 driveView
}

const navigateToHotel = () => {
  router.push('/hotel') // 导航到 driveView
}

const navigateToNews = () => {
  router.push('/news') // 导航到 driveView
}

const navigateToVIP = () => {
  router.push('/vip') // vip
}
// 頁面跳轉區結束

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await api.post('/users/login', {
      account: values.account,
      password: values.password
    })
    user.login(data.result)
    createSnackbar({
      text: '登入成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    // 关闭弹窗
    dialogVisible.value = false
    router.push('/')
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})

// 登出
const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/')
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
}

</script>

<style scoped>
.backgroundImg {
  background-image: url("@/assets/山2.png");
  background-repeat: repeat-x;
  width: 100%;
  position: absolute;
  bottom: -10px;
  /* width:100%; */
}

.backgroundImg img {
  height: 100%;
}

.temple {
  width: 150px;
  position: absolute;
  top: 15px;
  left: 100px;
}
.logo{
  position: absolute;
  top: -15px;
  left: 270px;
}

.sun {
  width: 100px;
  position: absolute;
  top: 10px;
  right: 100px;
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

.headerBG {
  background-color: #FFEFE8;
  height: 150px;
  position: relative;
}

.createActivity {
  position: absolute;
  right: 470px;
  top: 15px;
  background-color: #E79130;
  color: white;
  width: 80px;
  height: 80px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 5px 5px 2px #e5cfcf
}

.createActivity:hover {
  cursor: pointer;
}

.member {
  position: absolute;
  right: 350px;
  top: 15px;
  background-color: #F8B44B;
  color: white;
  width: 80px;
  height: 80px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 5px 5px 2px #e5cfcf
}

.member:hover {
  cursor: pointer;
}

.Icon {
  font-size: 32px;
}

.login {
  padding: 10px;
  position: relative;
  overflow: visible !important;
}

.loginForm {
  padding: 20px;
}

.closeLogin {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(244, 225, 225);
  color: black;
  position: absolute;
  top: -10px;
  right: -10px;
  text-align: center;
  line-height: 30px;
  z-index: 99;
}

.closeLogin:hover {
  cursor: pointer;
}
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* 根据需要调整间距 */
}

.custom-text-field {
  width: 90%; /* 或者使用您希望的具体宽度值 */
  margin: auto; /* 居中对齐 */
}

</style>
