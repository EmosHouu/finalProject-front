<template>
<VContainer>
  <VRow class="align-stretch">
    <VCol
    cols="12"
    md="8"
    >
      <VCard color="#FFEFE8">
        <VCardTitle>
          <h2>{{ activity.name }}</h2>
        </VCardTitle>

        <v-carousel
        v-if="activity.images.length>0"
        show-arrows="hover"
        hide-delimiter-background
>
          <!-- <v-carousel-item
            src="./src/assets/九州風景.jpeg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="./src/assets/北海道風景.jpeg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
          ></v-carousel-item> -->

          <v-carousel-item
      v-for="(image, index) in activity.images"
      :key="index"
      :src="image"
      height="500"
      cover
    ></v-carousel-item>
        </v-carousel>
      </VCard>

      <!-- <CardActPhotoView v-bind="activity" /> -->
    </VCol>

    <VCol
cols="12"
md="4"
>
      <VCard
height="100%"
color="#FFEFE8"
>
        <VCardTitle>
          <!-- <h2>{{ eventName }}</h2> -->
        </VCardTitle>
        <VCardText>
          <div class="description">
            <v-icon>mdi-account</v-icon>
            團長：HARU HOU <br>
            <v-icon>mdi-calendar</v-icon>
            活動時間：<br>
            {{ activity.startDate }} {{ activity.startTime }} ~ {{ activity.endDate }} {{ activity.endTime }}<br>
            <!-- <v-icon>mdi-clock</v-icon>
            活動時間：8:00~22:00 <br> -->
            <v-icon>mdi-map-marker</v-icon>
            {{ activity.location }} <br>
            <v-icon> mdi-account-group</v-icon>
            活動人數:{{ activity.participants }}人 已報名：3人<br>
          </div>
          <div class="d-flex">
            <v-chip
      :style="{ marginRight: '10px' }"
      color="#FFD4C0"
      variant="flat"
      >{{ activity.category }}
      </v-chip>
      <v-chip
      color="#FFD4C0"
      variant="flat"
      >{{ activity.area }}
      </v-chip>
          </div>
          <br>
          <VForm
:disabled="isSubmitting"
@submit.prevent="submit"
>
<!-- <VTextField
v-model.number="quantity.value.value"
type="number"
min="0"
:error-messages="quantity. errorMessage.value"
></VTextField> -->
                <VBtn
                color="#F8B44B"
                type="submit"
                :loading="isSubmitting"
                :disabled="isRegistered.value"
                >{{ isRegistered.value ? '已报名' : '我要参加' }}
                <!-- 如果用户已经报名，显示 "已报名"，否则显示 "我要参加" -->
                <!-- 如果用户已经报名，禁止点击按钮 -->
                </VBtn>
            </VForm>
          <!-- <div class="text-center">
            <VBtn
            color="#F8B44B"
            type="submit :isSubmitting"
            >我要參加
            </VBtn>
          </div> -->
        </VCardText>
        <!-- <VCardActions> -->

        <!-- </VCardActions> -->
      </VCard>
    </VCol>
  </VRow>

  <VRow>
    <VCol
    cols="12"
>
      <VCard
      color="#FFEFE8"
      >
        <VCardTitle>
          <h2>活動描述</h2>
        </VCardTitle>
        <VCardText
style="white-space: pre;"
class="description"
>
{{ activity.description }}
        </VCardText>
      </VCard>
    </VCol>

  </VRow>
</VContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useApi } from '@/composable/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useUserStore } from '@/store/user'

const route = useRoute()
const router = useRouter()
const { api, apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()
const isRegistered = ref(false)

const activity = ref({
  _id: '',
  name: '',
  description: '',
  images: '[]',
  category: '',
  startDate: '',
  endDate: '',
  startTime: '',
  endTime: '',
  participants: '',
  area: '',
  location: ''
})

const schema = yup.object({
  quantity: yup.number().typeError('缺少數量').required('缺少數量').min(1, '數量最小為 1')
})
const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 1
  }
})
// const quantity = useField('quantity')

const submit = handleSubmit(async (values) => {
  if (!user.isLogin) {
    createSnackbar({
      text: '請先登入',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      activity: activity.value._id,
      quantity: 1
    })
    user.cart = data.result
    isRegistered.value = true // 用户已经报名
    console.log(isRegistered.value)
    createSnackbar({
      text: '報名成功',
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
})

onMounted(async () => {
  try {
    const { data } = await api.get('/activity/' + route.params.id)
    activity.value._id = data.result._id
    activity.value.name = data.result.name
    activity.value.category = data.result.category
    activity.value.description = data.result.description
    activity.value.area = data.result.area
    activity.value.images = data.result.images
    activity.value.startDate = data.result.startDate
    activity.value.startTime = data.result.startTime
    activity.value.endDate = data.result.endDate
    activity.value.endTime = data.result.endTime
    activity.value.participants = data.result.participants
    activity.value.location = data.result.location
    console.log('activity', activity.value)
    // document.title = `購物網 | ${product.value.name}`
  } catch (error) {
    console.log(error)
    console.error('Error fetching activity data:', error)
    // const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    // createSnackbar({
    //   text,
    //   showCloseButton: false,
    //   snackbarProps: {
    //     timeout: 2000,
    //     color: 'red',
    //     location: 'bottom'
  }
})

</script>

<style scoped>
  .header{
    width:100%;
    /* position:relative; */
  }
  .description{
  font-weight: bold;
  font-size: 18px;
  line-height: 3.5
}

.tagdiv{
  justify-content: space-around;
}

.tag{
  background-color: bisque;
}
</style>
