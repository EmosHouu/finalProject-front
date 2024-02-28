<template>
    <v-container>
      <v-row class="tabWindow">
        <v-col cols="12">
          <h1 class="text-center">已報名活動管理</h1>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="12">
          <v-data-table
  :items="cart"
  :headers="headers"
  >
            <template #[`item.activity.name`]="{ item }">
              <span>{{ item.activity.name }}</span>
            </template>
            <template #[`item.quantity`]="{ item }">
              <v-btn
  variant="text"
  icon="mdi-minus"
  color="red"
  @click="addCart(item.activity._id, -1)"
  ></v-btn>
              {{ item.quantity }}
              <v-btn
  variant="text"
  icon="mdi-plus"
  color="green"
  @click="addCart(item.activity._id, 1)"
  ></v-btn>
            </template>
            <template #[`item.action`]="{ item }">
              <v-btn
  variant="text"
  icon="mdi-delete"
  color="red"
  @click="addCart(item.activity._id, item.quantity * -1)"
  ></v-btn>
            </template>
          </v-data-table>
        </v-col>
        <v-col
  class="text-center"
  cols="12"
  >
          <p>報名活動總數: {{ total }}</p>
          <!-- <v-btn
  color="green"
  :disabled="!canCheckout"
  :loading="isSubmitting"
  @click="checkout"
  >結帳</v-btn> -->
        </v-col>

      </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useApi } from '@/composable/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()
const router = useRouter()

const cart = ref([])
const headers = [
  { title: '名稱', align: 'center', sortable: true, key: 'activity.name' },
  { title: '地區', align: 'center', sortable: true, key: 'activity.area' },
  // { title: '說明', align: 'center', sortable: true, key: 'description' },
  { title: '分類', align: 'center', sortable: true, key: 'activity.category' },
  { title: '人數', align: 'center', sortable: true, key: 'activity.participants' },
  { title: '取消報名', align: 'center', key: 'action' }
]

const total = computed(() => {
  return cart.value.reduce((total, current) => {
    return total + current.quantity
  }, 0)
})

// const canCheckout = computed(() => {
//   return cart.value.length > 0 && !cart.value.some(item => !item.activity.sell)
// })

const addCart = async (activity, quantity) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      activity,
      quantity
    })
    user.cart = data.result
    createSnackbar({
      text: '修改成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    const idx = cart.value.findIndex(item => item.activity._id === activity)
    cart.value[idx].quantity += quantity
    if (cart.value[idx].quantity <= 0) {
      cart.value.splice(idx, 1)
    }
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

const isSubmitting = ref(false)
const checkout = async () => {
  isSubmitting.value = true
  try {
    await apiAuth.post('/orders')
    user.cart = 0
    router.push('/orders')
    createSnackbar({
      text: '結帳成功',
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
  isSubmitting.value = false
}

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.value.push(...data.result)
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
</script>
<style scoped>
  .tabWindow{
    margin-left: 250px;
  }
</style>
