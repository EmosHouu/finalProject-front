<template>
  <VContainer>

    <VRow>
      <VCol
  cols="12"
  md="4"
  class="d-flex flex-column"
  >
          <VCard
  color="#FFEFE8"
  class="mb-4  d-flex justify-center"
  >
<div class="accountImg">
  <VImg
src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
></VImg>
</div>

          </VCard>
          <VCard
  color="#FFEFE8"
  class="mb-4 flex-grow-1 d-flex align-center justify-center"
  >
            <VImg
src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
></VImg>
          </VCard>
          <VCard
  color="#FFEFE8"
  class="flex-grow-1 d-flex align-center justify-center"
  >
            <VImg src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></VImg>
          </VCard>
        </VCol>
      <VCol
      cols="12"
      md="8"
      >
        <VCard
        color="#FFEFE8"
        >
          <VCardTitle>
            會員資料
          </VCardTitle>
          <VCardText>
            <div class="description">

            </div>
          </VCardText>
        </VCard>
      </VCol>

    </VRow>
  </VContainer>
  </template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composable/axios'
import { useSnackbar } from 'vuetify-use-dialog'
// import gsap from 'gsap'
// const eventName = ref('') // 使用ref來創建響應式數據
const { api } = useApi()
const createSnackbar = useSnackbar()
const activity = ref([])

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

  .accountImg{
  border-radius: 50%;
  width: 100px;
  height: 100px;
  overflow: hidden; /* 确保图片不会溢出容器 */
  }
  </style>
