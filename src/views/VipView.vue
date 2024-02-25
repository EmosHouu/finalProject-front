<template>
<v-container>
  <v-card class="card">
    <v-toolbar class="bar">
      <v-toolbar-title class="bartitle" color="rgb(236, 188, 188)">會員中心</v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" direction="vertical" color="primary">
        <div class="memprofile">
          <div class="profile"><v-img cover src="../assets/bicycle.png"/></div>
          <div class="membername">哈魯</div>
        </div>
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
          已報名活動
        </v-tab>
        <v-tab value="option-3">
          <v-icon start>
            mdi-account
          </v-icon>
          會員資料編輯
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="option-1">
            <ActivityManageView />
        </v-window-item>
        <v-window-item value="option-2">
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
import { ref, onMounted, nextTick } from 'vue'
import { useApi } from '@/composable/axios'
import axios from 'axios'
const { api } = useApi()
const user = ref([])
const name = ref('')
onMounted(async () => {
  try {
    const { data } = await api.get('/users')
    user.value = data
    name.value = data.result.data[0].name
    console.log('data', data)
    await nextTick()
  } catch (error) {
    console.log(error)
  }
})
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
// const name = ref('')

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
</style>
