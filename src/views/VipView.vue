<template>
<v-container>
  <v-card class="card">
    <v-toolbar class="bar">
      <v-toolbar-title
class="bartitle"
color="rgb(236, 188, 188)"
>會員中心</v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-row">
      <v-tabs
      v-model="tab"
      direction="vertical"
      color="primary"
      >
      <VListItem
class="avatar"
          :prepend-avatar="user.avatar"
          :title="user.account"
          :subtitle="user.name"
          ></VListItem>
        <v-tab value="option-1">
          <v-icon start>
            mdi-cog
          </v-icon>
          已開團活動管理
        </v-tab>
        <v-tab value="option-2">
          <v-icon start>
            mdi-calendar-plus
          </v-icon>
          已報名活動管理
        </v-tab>
        <v-tab value="option-3">
          <v-icon start>
            mdi-account
          </v-icon>
          會員資料編輯
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
        value="option-1"
        class="centered-content"
        >
        <ActivityManageView />
        </v-window-item>
        <v-window-item
        value="option-2"
        class="centered-content"
        >
        <SignupActivityView />
        </v-window-item>
        <v-window-item value="option-3">
          <MemberEditView />
          <!-- <v-card flat>
            <v-card-text>
              <p>
                <VListItem
                :prepend-avatar="user.avatar"
                :title="user.account"
                :subtitle="user.name"
                ></VListItem>
              </p>

              <p class="mb-0">

              </p>
            </v-card-text>
          </v-card> -->
        </v-window-item>
      </v-window>
    </div>
  </v-card>

</v-container>

</template>

<script setup>
import ActivityManageView from '@/components/member/ActivityManageView.vue'
import SignupActivityView from '@/components/member/SignupActivityView.vue'
import MemberEditView from '@/components/member/MemberEditView.vue'
import { ref, computed } from 'vue'
// import { useApi } from '@/composable/axios'
import { useUserStore } from '@/store/user'
// import axios from 'axios'
// const { api } = useApi()
// const name = ref('')
const user = useUserStore()
// const userAvatar = computed(() => user.avatar)

console.log('123', user.avatar)

// console.log('prependAvatar', prependAvatar.value)
// onMounted(async () => {
//   try {
//     const { data } = await api.get('/users')
//     user.value = data
//     name.value = data.result.data[0].name
//     console.log('data', data)
//     console.log('123', user.account)
//     await nextTick()
//   } catch (error) {
//     console.log(error)
//   }
// })
// async function fetchData() {
//   try {
//     const response = await axios.get('/users')
//     const data = response.data
//     console.log('data', data)
//     return data // 可選的，如果你想在函數外部使用 data，你可以將它返回
//   } catch (error) {
//     console.error(error)
//     // 在這裡你可以處理錯誤，或者將錯誤拋出（throw）給外層處理
//     throw error
//   }
// }

// // 使用 fetchData 函數
// fetchData()

const tab = ref('option-1')
const prependAvatar = computed(() => {
  return `https://source.boringavatars.com/beam/120/${user.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`
})
</script>
<style scoped>
  .profile{
    height:60px;
    width:60px;
    border-radius:50%;
    background-color: rgb(236, 188, 188);
  }
  .bartitle{
    text-align: center;
    font: bold;
  }
  .bar{
    background-color: #FFD4C0;
  }
  .membername{
    text-align: center;
    font-weight:bold ;
    margin-top:10px;
  }
  .avatar{
    margin: 10px;
  }

  .centered-content {
  display: flex;
  justify-content: center; /* 確保子元素在主軸上居中 */
  align-items: center; /* 如果您也想在垂直方向上居中，可以使用這個 */
  flex-direction: column; /* 如果您的內容是垂直排列的，使用column */
  height: 100%; /* 確保有足夠的高度 */
}

</style>
