<template>
<VContainer>
  <VRow class="align-stretch">
    <VCol
    cols="12"
    md="8"
    >
      <VCard color="#FFEFE8">
        <VCardTitle>
          <h2>{{ name }}</h2>
        </VCardTitle>

        <v-carousel
        v-if="images.length>0"
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
      v-for="(image, index) in images"
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
            {{ startDate }} {{ startTime }} ~ {{ endDate }} {{ endTime }}<br>
            <!-- <v-icon>mdi-clock</v-icon>
            活動時間：8:00~22:00 <br> -->
            <v-icon>mdi-map-marker</v-icon>
            {{ location }} <br>
            <v-icon> mdi-account-group</v-icon>
            活動人數:{{ participants }}人 已報名：3人<br>
          </div>
          <div class="d-flex">
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
          </div>
          <br>
          <div class="text-center">
            <VBtn
            color="#F8B44B"
            type="submit :isSubmitting"
            >我要參加
            </VBtn>
          </div>
        </VCardText>
        <!-- <VCardActions> -->

        <!-- </VCardActions> -->
      </VCard>
    </VCol>
  </VRow>

  <VRow>
    <VCol
    cols="12"
    md="8"
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
{{ description }}
        </VCardText>
      </VCard>
    </VCol>
    <VCol
cols="12"
md="4"
class="d-flex flex-column"
>
        <VCard
color="#FFEFE8"
class="mb-4 flex-grow-1 d-flex align-center justify-center"
>

          <VImg src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"></VImg>
        </VCard>
        <VCard
color="#FFEFE8"
class="mb-4 flex-grow-1 d-flex align-center justify-center"
>
          <VImg src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></VImg>
        </VCard>
        <VCard
color="#FFEFE8"
class="flex-grow-1 d-flex align-center justify-center"
>
          <VImg src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></VImg>
        </VCard>
      </VCol>

  </VRow>
  <br>

</VContainer>

<VContainer>
    <VRow justify="space-between">
        <VCol cols="12">
        <h1>其他推薦活動</h1>
        </VCol>
        <VCol
        v-for="activity in activities"
        :key="activity._id"
        cols="12"
        md="3"
        lg="3"
        >
        <CardHomeView v-bind="activity"></CardHomeView>
        </VCol>

    </VRow>
</VContainer>
</template>

<script setup>
// import TagView from '../components/hashtag/TagView.vue'
// import CardActPhotoView from '@/components/card/CardActPhotoView.vue'
import CardHomeView from '@/components/card/CardHomeView.vue'
import { ref, onMounted, nextTick } from 'vue'
import { useApi } from '@/composable/axios'
import { useSnackbar } from 'vuetify-use-dialog'
// import gsap from 'gsap'
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
