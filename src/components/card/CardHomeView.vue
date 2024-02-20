<template>
<VCard
class="product-card"
width="300"
>
<v-carousel
height="200"
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
{{ name }}
    </VCardTitle>
    <VCardSubtitle>{{ location }}</VCardSubtitle>
    <VCardText>{{ startDate }} {{ startTime }} ~ {{ endDate }} {{ endTime }}</VCardText>
    <VCardText>人數：{{ participants }}人</VCardText>
    <VCardActions :style="{ 'justify-content': 'flex-end' }">
        <VBtn
color="primary"
prepend-icon="mdi-cart"
@click="addCart"
></VBtn>
    </VCardActions>
</VCard>
</template>

<script setup>
import { useApi } from '@/composable/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const user = useUserStore()
const createSnackbar = useSnackbar()
const router = useRouter()

const props = defineProps(['_id', 'category', 'description', 'images', 'name', 'location', 'startDate', 'endDate', 'startTime', 'endTime', 'participants'])
console.log(props.name)

const addCart = async () => {
  if (!user.isLogin) {
    router.push('/')
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
