<template>
  <div class="body">
  <div class="header">
    <SmallCarouselView :title="'揪團玩'"></SmallCarouselView>
    <SearchbarView></SearchbarView>
  </div>
    <!-- <SectionView
:fill="'#FFD4C0'"
:text="'熱門揪團活動'"
></SectionView>
    <SectionView
:fill="'#FFB077'"
:text="'最新揪團活動'"
></SectionView> -->

<div class="sectionBody">
        <svg
          class="circle"
          width="200"
          height="100"
          viewBox="0 0 282 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
        <mask
          id="mask0_844_773"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="21"
          y="4"
          width="261"
          height="136"
          >
        <path
        d="M79.8859 11.7047C37.5832 19.5846 24.6788 52.5369 22.2859 68.9236C20.6645 80.0271 23.8527 95.3988 26.4735 102.145C37.0852 129.458 79.5155 131.276 100.909 128.291C130.034 124.925 158.851 132.312 171.072 135.276C207.101 144.015 237.474 137.634 250.036 130.351C295.757 103.846 284.135 48.0597 262.428 23.3455C240.379 1.9444 201.691 1.60243 177.012 10.4263C164.7 14.8285 143.126 16.7547 130.478 14.6597C107.233 10.8093 90.269 9.77058 79.8859 11.7047Z"
        fill="white"
        />
        </mask>
        <g mask="url(#mask0_844_773)">
        <rect
        x="14.0356"
        y="-18.2988"
        width="269.977"
        height="161.802"
        fill="#FFD4C0"
        />
        <rect
        width="0.891446"
        height="2.55844"
        rx="0.445723"
        transform="matrix(-1 0 0 1 271.621 115.402)"
        fill="#A28977"
        />
        <path
        d="M272.732 113.457C272.133 112.238 270.395 112.238 269.796 113.457V113.457C269.263 114.544 270.053 115.813 271.264 115.813V115.813C272.475 115.813 273.265 114.544 272.732 113.457V113.457Z"
        fill="#317F46"
        />
        <path
        d="M275.443 116.317C275.443 116.071 275.243 115.871 274.997 115.871V115.871C274.751 115.871 274.551 116.071 274.551 116.317V117.618C274.551 117.864 274.751 118.064 274.997 118.064V118.064C275.243 118.064 275.443 117.864 275.443 117.618V116.317Z"
        fill="#A28977"
        />
        <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M273.49 111.071C274.106 109.821 275.888 109.821 276.505 111.071C276.804 111.679 276.7 112.344 276.342 112.823C276.565 112.998 276.756 113.227 276.895 113.511C277.55 114.84 276.568 116.419 275.086 116.419C273.604 116.419 272.622 114.84 273.277 113.511C273.394 113.274 273.547 113.074 273.724 112.913C273.309 112.429 273.171 111.718 273.49 111.071Z"
        fill="#79AB03"
        />
        </g>
        <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M213.277 5.25898C197.349 3.79132 180.91 6.16468 168.386 10.4691C162.036 12.6516 153.331 14.211 144.609 14.9692C135.887 15.7274 127.096 15.6889 120.572 14.6501C96.8116 10.867 79.5469 9.17954 69.0601 11.0572C26.1979 18.7318 13.1849 51.484 10.7644 67.4176C9.94939 72.7823 10.3407 79.2118 11.2775 85.1444C12.214 91.0754 13.6872 96.4571 15.0041 99.7152C20.3123 112.848 33.6116 119.927 48.463 123.343C63.2951 126.755 79.5156 126.471 90.3878 125.013L90.4013 125.012L90.4013 125.012C119.244 121.807 147.774 128.488 160.924 131.568C161.389 131.677 161.834 131.781 162.26 131.88C198.947 140.434 229.806 134.166 242.477 127.106C265.614 114.213 274.223 94.2287 274.32 74.4448C274.418 54.6262 265.969 35.0165 254.985 22.9935C244.552 12.0287 229.208 6.72692 213.277 5.25898ZM213.387 4.06404C229.485 5.54733 245.153 10.9167 255.859 22.1707L255.867 22.1794L255.867 22.1795C267.05 34.4184 275.619 54.3194 275.52 74.4507C275.421 94.6193 266.617 115.027 243.061 128.154C230.072 135.392 198.893 141.654 161.987 133.049C161.567 132.951 161.129 132.848 160.671 132.741C147.525 129.663 119.17 123.024 90.5404 126.204C79.564 127.675 63.197 127.964 48.194 124.513C33.2071 121.065 19.4209 113.845 13.8915 100.165C12.5319 96.8008 11.0388 91.3263 10.0922 85.3316C9.14582 79.3386 8.73704 72.7729 9.57797 67.2374C12.045 50.998 25.305 17.6726 68.8486 9.87601C79.5701 7.9563 97.0408 9.68835 120.76 13.465C127.153 14.4828 135.837 14.5272 144.505 13.7737C153.173 13.0202 161.772 11.4734 167.996 9.33428C180.675 4.97649 197.284 2.58029 213.387 4.06404Z"
        fill="#5F231B"
        />
        <path
        d="M29.2411 22.7634L28.8853 6.71143"
        stroke="#5F231B"
        stroke-width="2"
        />
        <path
        d="M21.8978 26.701L10.5045 9.53905"
        stroke="#5F231B"
        stroke-width="2"
        />
        <path
        d="M17.003 32.71L2.0172 28.8686"
        stroke="#5F231B"
        stroke-width="2"
        />
        </svg>
        <p class="text">揪團玩活動</p>

  <v-container
text-align="center"
>
    <v-row text-align="center">
      <v-col
        v-for="activity in activities"
        :key="activity._id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
>
        <CardDetailView
          :_id="activity._id"
          :title="activity.name"
          :location="activity.area"
          :people="activity.participants"
          :start-date="activity.startDate"
          :end-date="activity.endDate"
          :images="activity.images"
          :category="activity.category"
          :area="activity.area"
          class="card-detail-view"
        ></CardDetailView>
      </v-col>
    </v-row>
  </v-container>

</div>

  </div>
</template>

<script setup>
import SmallCarouselView from '../components/SmallCarouselView.vue'
import CardDetailView from '@/components/card/CardDetailView.vue'
import SearchbarView from '@/components/btn/SearchbarView.vue'

import { useApi } from '@/composable/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'
import { ref, onMounted, nextTick } from 'vue'
const router = useRouter()
const createSnackbar = useSnackbar()
const { api } = useApi()
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
    const { data } = await api.get('/activity/play')
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
  }
  .body{
    height: 100%;
  }
  .sectionBody{
    width:85%;
    /* 記得改min-height  */
    min-height:100vh;
    background-color: #ffffffb3;
    border-radius: 20px;
    position: relative;
    margin:auto;
    margin-top:60px;
    margin-bottom: 100px;
    padding: 20px;
    box-shadow: 0px 3px 2px 2px #e5cfcf;
  }
    .circle{
    position:absolute;
    top:-50px;
    left:-50px;
    }
    .text{
        position: absolute;
        top:-15px;
        left:-5px;
        z-index: 99;
        font-size: 20px;
        font-weight: bold;
    }
    .cardSection{
        position: absolute;
        top:60px;
        left:40px;
        height:100%;
    }

    .card-detail-view {
    margin: 10px;
    padding: 10px;
    }
    .v-container{
      width: 85%;
      margin-top:10px;
    }
</style>
