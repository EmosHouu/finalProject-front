<template>
<VContainer>
  <VRow class="align-stretch">
    <VCol
    cols="12"
    md="8"
    >
      <!-- <VCard color="#FFEFE8">
        <VCardTitle>
          <h2>{{ name }}</h2>
        </VCardTitle>
        <v-carousel
        show-arrows="hover"
        hide-delimiter-background
        >
          <v-carousel-item
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
          ></v-carousel-item>
        </v-carousel>
      </VCard> -->
      <CardActPhotoView :name="activityName" />
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
          <h2>{{ eventName }}</h2>
        </VCardTitle>
        <VCardText>
          <div class="description">
            <v-icon>mdi-account</v-icon>
            團長：HARU HOU <br>
            <v-icon>mdi-calendar</v-icon>
            活動時間：<br>
            2022/10/10 8:00 ~ 2022/10/10 22:00 <br>
            <!-- <v-icon>mdi-clock</v-icon>
            活動時間：8:00~22:00 <br> -->
            <v-icon>mdi-map-marker</v-icon>
            活動地點:1 Chome Marunouchi, Chiyoda City, Tokyo 100-0005日本 <br>
            <v-icon> mdi-account-group</v-icon>
            活動人數:6人 已報名：3人<br>
          </div>
          <div class="d-flex">
            <TagView :hashtag="'揪團玩'"></TagView>
            <TagView :hashtag="'近畿'"></TagView>
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
        <VCardText>
          <div class="description">
            <p>京都美食探索活動安排（10:00 - 19:00）：

10:00 - 11:00 【集合與出發】<br>
- 地點：京都車站集合<br>
- 活動：從京都車站出發，開始美食之旅。<br>

11:00 - 13:00 【錦市場】<br>
- 地點：錦市場<br>
- 活動：探索京都最大的傳統食品市場，品嚐各種當地美食。<br>

13:00 - 14:30 【午餐】<br>
- 地點：選擇一家當地著名的京料理店<br>
- 活動：享用傳統的京都料理，體驗日本文化的精髓。<br>

14:30 - 16:30 【咖啡時光】<br>
- 地點：京都的老式咖啡館<br>
- 活動：在古色古香的咖啡館中享受一段悠閒時光，品嚐精緻的日式甜點。<br>

16:30 - 18:00 【清水寺周邊】<br>
- 地點：清水寺周邊<br>
- 活動：漫步於清水寺周邊，探索更多美食和手工藝品店。<br>

18:00 - 19:00 【返回與解散】<br>
- 地點：京都車站<br>
- 活動：一天的美食之旅結束，返回京都車站解散</p>
          </div>
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
</VContainer>
</template>

<script setup>
import TagView from '../components/hashtag/TagView.vue'
import CardActPhotoView from '@/components/card/CardActPhotoView.vue'
import { ref, onMounted, computed } from 'vue'
import { useApi } from '@/composable/axios'
import { useSnackbar } from 'vuetify-use-dialog'
// import gsap from 'gsap'
// const eventName = ref('') // 使用ref來創建響應式數據
const { api } = useApi()
const createSnackbar = useSnackbar()
const activity = ref([])

const activityName = computed(() => {
  return activity.value.length > 0 ? activity.value[0].name : ''
})

onMounted(async () => {
  try {
    const { data } = await api.get('/activity')
    console.log(data) // 查看完整的响应体
    activity.value.push(...data.result.data)
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
