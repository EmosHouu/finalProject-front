<template>
<VCard
class="product-card"
width="300"
>
<v-carousel
height="200"
show-arrows="hover"
hide-delimiter-background
>
    <v-carousel-item
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      height="200"
      cover
></v-carousel-item>
</v-carousel>

    <VCardTitle>
      <RouterLink
class="text-decoration-none"
:to="'/actdetail/' + _id"
>{{ name }}</RouterLink>
    </VCardTitle>
    <VCardSubtitle><v-icon>mdi-map-marker</v-icon>{{ location }}</VCardSubtitle>
    <VCardText><v-icon>mdi-calendar</v-icon>{{ startDate }} {{ startTime }} ~ {{ endDate }} {{ endTime }}</VCardText>
    <VCardText><v-icon>mdi-account</v-icon>需求人數：{{ participants }}人</VCardText>
    <VCardText>
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
    </VCardText>

    <VCardActions :style="{ 'justify-content': 'flex-end' }">
      <div class="text-center">
            <VBtn
            color="#F8B44B"
            type="submit :isSubmitting"
            >我要參加
            </VBtn>
          </div>
    </VCardActions>
</VCard>
</template>

<script setup>
import { useApi } from '@/composable/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'
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
