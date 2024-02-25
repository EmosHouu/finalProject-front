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
class="text-center"
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
          <v-card flat>
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>

</v-container>
</template>

<script setup>
import ActivityManageView from '@/components/member/ActivityManageView.vue'
import SignupActivityView from '@/components/member/SignupActivityView.vue'
import { ref, computed } from 'vue'
// import { useApi } from '@/composable/axios'
import { useUserStore } from '@/store/user'
// import axios from 'axios'
// const { api } = useApi()
// const name = ref('')
const user = useUserStore()
const prependAvatar = computed(() => {
  return `https://source.boringavatars.com/beam/120/${user.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`
})
console.log('user', user.account)
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
  .memprofile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  .centered-content {
  display: flex;
  justify-content: center;
  width: 100%; /* 或根据需要设置的宽度 */
  margin: auto; /* 实现水平居中 */
}
</style>
