<template>
<CarouselView />
<div class="cardBody">
  <div class="bg">
        <div
          class="circle"
style="background-color:#FFD4C0"
          >揪團玩</div>
                  <div class="text">想找人一起出去玩卻總是跟朋友時間喬不攏嘛？一起「揪團玩」來看看現在有哪些團可以跟吧！</div>
                  <div class="img"><img
src="https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/%E9%B3%A5%E5%B1%853.png?raw=true"
alt="img"
/></div>
        <div class="card">
            <CardView
              v-for="activity in activities.slice(0, 2)"
              :key="activity._id"
              :_id="activity._id"
              :area="activity.area"
              :location="activity.name"
              :category="activity.category"
              :images="activity.images"
            ></CardView>
        </div>
        <div class="btn">
          <RouterLink class="text-decoration-none" :to="'/play'">
            <MainBtnView main-btn="揪團去"></MainBtnView>
          </RouterLink>
          <RouterLink class="text-decoration-none" :to="'/activity'">
            <SubBtnView sub-btn="開團去"></SubBtnView>
          </RouterLink>
        </div>
        <div
          class="bottomImg"
          style=" backgroundImage: url('https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/%E5%B1%B12.png?raw=true')"
          ></div>
    </div>
  <div class="bg">
        <div
          class="circle"
style="background-color:#FFB077"
          >揪團行</div>
                  <div class="text">在日本一個人租車擔心太貴嗎？一起「揪團行」找夥伴一起租車吧 !</div>
                  <div class="img"><img
src="https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/bicycle.png?raw=true"
alt="img"
/></div>
        <div class="card">
            <CardView
              v-for="activity in activities.slice(0,2)"
              :key="activity._id"
              :area="activity.area"
              :location="activity.name"
              :category="activity.category"
              :images="activity.images"
></CardView>
        </div>
        <div class="btn">
          <RouterLink class="text-decoration-none" :to="'/drive'">
            <MainBtnView main-btn="揪團去"></MainBtnView>
          </RouterLink>
          <RouterLink class="text-decoration-none" :to="'/activity'">
            <SubBtnView sub-btn="開團去"></SubBtnView>
          </RouterLink>
        </div>
        <div
          class="bottomImg"
          style=" backgroundImage: url('https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/%E5%B1%B11.png?raw=true')"
          ></div>
    </div>
    <div class="bg">
        <div
          class="circle"
style="background-color:#FFD4C0"
          >揪團買</div>
                  <div class="text">想找人一起湊免稅免運嗎？一起「揪團買」來看看現在有哪些團可以跟吧！</div>
                  <div class="img"><img
src="https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/shop.png?raw=true"
alt="img"
/></div>
        <div class="card">
            <CardView
              v-for="activity in activities.slice(0,2)"
              :key="activity._id"
              :area="activity.area"
              :location="activity.name"
              :category="activity.category"
              :images="activity.images"
></CardView>
        </div>
        <div class="btn">
          <RouterLink class="text-decoration-none" :to="'/buy'">
            <MainBtnView main-btn="揪團去"></MainBtnView>
          </RouterLink>
          <RouterLink class="text-decoration-none" :to="'/activity'">
            <SubBtnView sub-btn="開團去"></SubBtnView>
          </RouterLink>
        </div>
        <div
          class="bottomImg"
          style=" backgroundImage: url('https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/%E5%B1%B12.png?raw=true')"
          ></div>
    </div>
    <div class="bg">
        <div
          class="circle"
style="background-color:#FFB077"
          >揪團住</div>
                  <div class="text">想要找便宜的床位嗎？一起「揪團住」來看看有哪些房間有優惠吧！</div>
                  <div class="img"><img
src="https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/bed.png?raw=true"
alt="img"
/></div>
        <div class="card">
            <CardView
              v-for="activity in activities.slice(0,2)"
              :key="activity._id"
              :area="activity.area"
              :location="activity.name"
              :category="activity.category"
              :images="activity.images"
></CardView>
        </div>
        <div class="btn">
          <RouterLink class="text-decoration-none" :to="'/hotel'">
            <MainBtnView main-btn="揪團去"></MainBtnView>
          </RouterLink>
          <RouterLink class="text-decoration-none" :to="'/activity'">
            <SubBtnView sub-btn="開團去"></SubBtnView>
          </RouterLink>
        </div>
        <div
          class="bottomImg"
          style=" backgroundImage: url('https://github.com/EmosHouu/finalProject-front/blob/emos/src/assets/%E5%B1%B11.png?raw=true')"
          ></div>
    </div>
  </div>

</template>

<script setup>
import { useApi } from '@/composable/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'
const router = useRouter()
import MainBtnView from '@/components/btn/MainBtnView.vue'
import SubBtnView from '@/components/btn/SubBtnView.vue'
import CardView from '@/components/card/CardView.vue'
import CarouselView from '@/components/CarouselView.vue'
import { ref, onMounted, nextTick } from 'vue'
const { api } = useApi()
const createSnackbar = useSnackbar()
const activities = ref([])
const name = ref('') // 創建一個 ref 來存儲名稱
const images = ref('') // 創建一個 ref 來存儲圖片
const description = ref('') // 創建一個 ref 來存儲描述
const startDate = ref('') // 創建一個 ref 來存儲描述
const endDate = ref('') // 創建一個 ref 來存儲描述
const startTime = ref('') // 創建一個 ref 來存儲描述
const endTime = ref('') // 創建一個 ref 來存儲描述
const participants = ref('')
const location = ref('')
const category = ref('')
const area = ref('')

// const cards = ref([])
onMounted(async () => {
  try {
    const { data } = await api.get('/activity')
    name.value = data.result.data[0].name
    images.value = data.result.data[0].images
    startDate.value = data.result.data[0].startDate
    endDate.value = data.result.data[0].endDate
    startTime.value = data.result.data[0].startTime
    endTime.value = data.result.data[0].endTime
    location.value = data.result.data[0].location
    participants.value = data.result.data[0].participants
    description.value = data.result.data[0].description
    category.value = data.result.data[0].category
    area.value = data.result.data[0].area

    console.log(data) // 查看完整的响应体
    activities.value.push(...data.result.data)
    console.log('activities', activities.value)
    await nextTick()
  } catch (error) {
    console.log(error)
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
</script>
<style scoped>
.cardBody{
  width: 100%;
  /* height:100%; */
  background-color: #FFEFE8;
}

.bg{
        position: relative;
        background-color: white;
        width:80%;
        height:400px;
        margin:auto;
        border-radius: 20px;
        margin-bottom: 80px;
        margin-top:80px;
    }
    .circle{
        position:absolute;
        width:120px;
        height:120px;
        border-radius:50%;
        font-size: 22px;
        font-weight: bold;
        /* background-color: yellow; */
        display: flex;
        justify-content: center;
        align-items: center;
        top:-50px;
        left:-50px;
        /* box-shadow: 1px 1px 0 0 rgb(157, 157, 157); */
        box-shadow: 0px 3px 2px 2px #e5cfcf;
    }
    .img img{
        width:120px;
        position:absolute;
        top:-20px;
        right:20px;
    }
    .text{
        width:70%;
        position:absolute;
        right:15%;
        top:10%;
        font-size: 18px;
        font-weight:bold;
    }
    .card{
        position: absolute;
        top:22%;
        left:15%;
        display: flex;
    }
    .btn{
        position: absolute;
        top:60%;
        right:7%;
        display: flex;
    }
    .bottomImg{
        position:absolute;
        bottom:-60px;
        width: 100%;
        height: 100px; /* 设置背景图高度，可以根据需要调整 */
        background-repeat: repeat-x;
    }

</style>
