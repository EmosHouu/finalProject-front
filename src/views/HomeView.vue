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
<!-- <CardHomeViewVue></CardHomeViewVue> -->
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
import { useApi } from '@/composable/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'
import HomeCardViewVue from '@/components/HomeCardView.vue'
// import TagView from '../hashtag/TagView.vue'

const { apiAuth } = useApi()
const user = useUserStore()
const createSnackbar = useSnackbar()
const router = useRouter()

const props = defineProps(['_id', 'category', 'description', 'images', 'name', 'location', 'startDate', 'endDate', 'startTime', 'endTime', 'participants', 'area'])
console.log('123', props.name)

const gotoActivity = async () => {
  if (!user.isLogin) {
    // 显示提示信息而不是直接跳转
    createSnackbar({
      text: '请先登录',
      showCloseButton: true, // 允许用户关闭提示
      snackbarProps: {
        timeout: 5000, // 提示信息显示时间
        color: 'warning', // 提示信息颜色
        location: 'top' // 提示信息位置
      }
    })
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      product: props._id,
      quantity: 1
    })
    user.cart = data.result
    createSnackbar({
      text: '新增成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
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
.cardBody{
  width: 100%;
  /* height:100%; */
  background-color: #FFEFE8;
  padding-top:80px;
}

</style>
