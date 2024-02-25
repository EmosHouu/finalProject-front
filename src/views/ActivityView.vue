<template>
  <VContainer>
      <VRow>
          <VCol cols="12">
              <h1>我要開團</h1>
          </VCol>
          <VDivider></VDivider>
          <VCol cols="12">
      <VForm
      :disabled="isSubmitting"
      @submit.prevent="submit"
      >

      <VTextField
      v-model="name.value.value"
      label="活動名稱"
      :error-messages="name.errorMessage.value"
      prepend-icon="mdi-order-alphabetical-ascending"
      ></VTextField>

      <VRow>
      <VCol cols="6">
      <VTextField
      :model-value="formattedStartDate"
      label="活動開始日期"
      :error-messages="startDate.errorMessage.value"
      readonly
      prepend-icon="mdi-calendar"
      @click:prepend="menuStartDate = !menuStartDate"
      ></VTextField>

      <VDialog
      v-model="menuStartDate"
  persistent
  max-width="290px"
  @click:outside="menuStartDate = false"
  >
  <VDatePicker
      v-model="startDate.value.value"
      color="#F8B44B"
      :min="minDate"
      :max="maxDate"
      @input="value => handleDateInput(value, 'startDate')"
      ></VDatePicker>
  </VDialog>
  </VCol>
  <VCol cols="6">
  <VTextField
  v-model="startTime.value.value"
  label="活動開始時間 (請填寫當地時間)"
  type="time"
  :error-messages="startTime.errorMessage.value"
  prepend-icon="mdi-clock-time-four-outline"
></VTextField>
</VCol>
</VRow>

<VRow>
      <VCol cols="6">
      <VTextField
      :model-value="formattedEndDate"
      label="活動結束日期"
      :error-messages="endDate.errorMessage.value"
      readonly="readonly"
      prepend-icon="mdi-calendar"
      @click:prepend="menuEndDate = !menuEndDate"
      ></VTextField>

      <VDialog
      v-model="menuEndDate"
  persistent
  max-width="350px"
  @click:outside="menuEndDate = false"
  >
  <VDatePicker
      v-model="endDate.value.value"
      color="#F8B44B"
      :min="minDate"
      :max="maxDate"
      @input="value => handleDateInput(value, 'endDate')"
      ></VDatePicker>
  </VDialog>
  </VCol>
  <VCol cols="6">
  <VTextField
  v-model="endTime.value.value"
  label="活動結束時間 (請填寫當地時間)"
  type="time"
  :error-messages="endTime.errorMessage.value"
  prepend-icon="mdi-clock-time-four-outline"
></VTextField>
</VCol>
</VRow>

<VTextField
      v-model="location.value.value"
      label="活動地點（請輸入地址）"
      :error-messages="location.errorMessage.value"
      prepend-icon="mdi-map-marker"
      ></VTextField>

      <VSelect
      v-model="participants.value.value"
      :items="participantOptions"
      label="活動人數"
      :error-messages="participants.errorMessage.value"
      prepend-icon="mdi-account-group"
      ></VSelect>

<VSelect
v-model="category.value.value"
label="分類"
:items="categories"
:error-messages="category.errorMessage.value"
prepend-icon="mdi-tag"
></VSelect>

<VSelect
v-model="area.value.value"
label="地區"
:items="areas"
:error-messages="area.errorMessage.value"
prepend-icon="mdi-map-legend"
></VSelect>

      <VTextField
      v-model="phone.value.value"
      label="手機號碼"
      type="tel"
      :error-messages="phone.errorMessage.value"
      prepend-icon="mdi-phone"
      ></VTextField>

      <VTextField
      v-model="email.value.value"
      label="信箱"
      type="email"
      :error-messages="email.errorMessage.value"
      prepend-icon="mdi-email"
      ></VTextField>

      <VTextarea
      v-model="description.value.value"
      label="活動內容"
      :error-messages="description.errorMessage.value"
      prepend-icon="mdi-comment-text-outline"
      ></VTextarea>
<!-- 新增檔案上傳元件 要到vuetify的plugins中的index.js檔案中加入import VueFileAgent from 'vue-file-agent'和import 'vue-file-agent/dist/vue-file-agent.css'，然後在plugins中加入VueFileAgent -->

      <VueFileAgent
      ref="fileAgent"
      v-model="fileRecords"
      v-model:rawModelValue="rawFileRecords"
      multiple="true"
      accept="image/jpeg,image/png"
      deletable="deletable"
      :error-text="{type: '檔案格式不支援', size: '檔案超過 1MB 大小限制'}"
      help-text="選擇檔案或拖曳到這裡"
      :max-files="3"
      max-size="1MB"
      ></VueFileAgent>

      <!-- <VTextField
      label="活動日期"
      type="date"
      ></VTextField> -->

      <div class="d-flex justify-center">
      <VBtn
      color="#F8B44B"
      type="submit :isSubmitting"
>開團
      </VBtn>

      </div>
      </VForm>
    </VCol>
  </VRow>
  </VContainer>
  </template>

<script setup>
import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useApi } from '@/composable/axios'
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { ref, computed } from 'vue'
const { apiAuth } = useApi()

const router = useRouter()
const createSnackbar = useSnackbar()
const menuStartDate = ref(false)
const menuEndDate = ref(false)
const today = new Date()
const fileAgent = ref(null)
const user = useUserStore()
user.getProfile()

// -----日期有關的東東開始------

// 计算明天的日期（明天的日期是最小可选日期）
const minDate = computed(() => {
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1) // 将日期设置为明天
  const year = tomorrow.getFullYear()
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0')
  const day = String(tomorrow.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
})
// 如果还需要使用maxDate来限制最大可选日期，可以按照需要进行设置
// 例如，设置maxDate为1年后
const maxDate = computed(() => {
  const year = today.getFullYear() + 1
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
})

// 处理日期选择器的输入事件
// 修改handleDateInput方法以接受字段名作为参数
const handleDateInput = (value, field) => {
  const selectedDate = new Date(value)
  const formattedDate = selectedDate.toISOString().split('T')[0] // YYYY-MM-DD 格式
  if (field === 'startDate') {
    startDate.value.value = formattedDate
  } else if (field === 'endDate') {
    endDate.value.value = formattedDate
  }
  menuStartDate.value = false // 关闭开始日期选择器
  menuEndDate.value = false // 关闭结束日期选择器
}

// 格式化活动日期
const formattedStartDate = computed(() => {
  if (!startDate.value.value) return ''
  return startDate.value.value.toLocaleDateString()
})

const formattedEndDate = computed(() => {
  if (!endDate.value.value) return ''
  return endDate.value.value.toLocaleDateString() // 返回格式化的日期字符串
})

// function combineDateAndTime (date, time) {
//   const [year, month, day] = date.split('-').map(val => parseInt(val))
//   const [hours, minutes] = time.split(':').map(val => parseInt(val))
//   // 創建一個新的Date對象，注意月份是從0開始的，所以需要減1
//   return new Date(year, month - 1, day, hours, minutes)
// }

// -----日期有關的東東結束------

// 分類
const categories = ['揪團玩', '揪團行', '揪團買', '揪團住']
// 地區
const areas = ['北海道', '東北', '關東', '中部', '近畿', '中國', '四國', '九州']
// 参与人数选项
const participantOptions = Array.from({ length: 50 }, (_, i) => i + 1)

// 定義註冊表單的資料格式
const schema = yup.object({
  name: yup
    .string()
    .required('活動名稱為必填欄位')
    .min(5, '活動名稱長度不符')
    .max(40, '活動名稱長度不符')
    .test(
      'no-numbers', // 自定義驗證名稱
      '姓名不能包含數字', // 錯誤訊息
      (value) => !/\d/.test(value) // 驗證函數，檢查字符串中是否不含有數字
    ),
  location: yup
    .string()
    .required('活動地點為必填欄位'),
  participants: yup
    .number()
    .required('活動人數為必填欄位')
    .min(1, '活動人數不能小於 1'),
  startDate: yup
    .date()
    .required('活動日期為必填欄位')
    .min(new Date(), '活動開始日期不能早於今天'), // 确保活动开始日期不早于当前日期
  endDate: yup
    .date()
    .required('活動日期為必填欄位')
    .min(yup.ref('startDate'), '結束日期不能早於開始日期') // 确保结束日期不早于开始日期
    .min(yup.ref('startDate'), '活動結束日期不能早於開始日期'),
  startTime: yup
    .string()
    .required('活動開始時間為必填欄位'),
  endTime: yup
    .string()
    .required('活動結束時間為必填欄位')
    .test(
      'is-later', '活動結束時間必須晚於開始時間',
      function (value) {
        const { startTime, startDate, endDate } = this.parent // 使用 this.parent 来获取上下文中的值

        // 首先，确保所有相关字段都已提供
        if (!value || !startTime || !startDate || !endDate) {
          return this.createError({ message: '必須填寫所有日期和時間字段' }) // 使用 this.createError 来返回错误
        }

        // 将日期和时间转换为JavaScript Date对象以便比较
        const startDateTime = new Date(`${startDate}T${startTime}`)
        const endDateTime = new Date(`${endDate}T${value}`)

        // 如果是同一天，则比较时间
        if (startDate === endDate && endDateTime <= startDateTime) {
          return this.createError({ message: '活動結束時間必須晚於開始時間' }) // 使用 this.createError 来返回错误
        }

        return true // 如果没有问题，则验证通过
      }
    ),

  category: yup
    .string()
    .required('缺少活動分類')
    .test('isCategory', '商品活動錯誤', value => categories.includes(value)),
  area: yup
    .string()
    .required('缺少地區分類')
    .test('isArea', '地區分類錯誤', value => areas.includes(value)),
  phone: yup
    .string()
    .required('手機號碼為必填欄位')
    .test(
      'is-phone', '手機號碼格式錯誤',
      (value) => {
        return validator.isMobilePhone(value, 'zh-TW')
      }
    ),
  email: yup
    .string()
    .required('信箱為必填欄位')
    // .test(自訂驗證名稱, 錯誤訊息, 驗證function)
    .test(
      'isEmail', '信箱格式錯誤',
      (value) => {
        return validator.isEmail(value)
      }
    ),
  description: yup
    .string()
    .required('活動內容為必填欄位')
    .min(10, '活動內容長度不符')
    .max(1000, '活動內容長度不符')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    phone: '',
    // price: 0,
    description: '',
    category: '',
    area: '',
    // startDate: '',
    startTime: '',
    // endDate: '',
    endTime: ''
    // sell: false
  }

})

// 定義表單欄位
const name = useField('name')
const location = useField('location')
const phone = useField('phone')
const email = useField('email')
const startDate = useField('startDate')
const endDate = useField('endDate')
// 定义开始时间和结束时间字段
const startTime = useField('startTime')
const endTime = useField('endTime')
const description = useField('description')
const category = useField('category')
const area = useField('area')
const participants = useField('participants')
const fileRecords = ref([])
const rawFileRecords = ref([])
// 定義表單的東東結束
// 格式化為後端接受的格式，例如ISO字符串

// 提交表單
const submit = handleSubmit(async (values) => {
  if (fileRecords.value.length === 0) return
  try {
    // 建立 FormData 物件
    // 使用 fd.append(欄位, 值) 將資料放進去
    const fd = new FormData()
    for (const key in values) {
      if (key === 'startDate') {
        fd.append('startDate', formattedStartDate.value)
      } else if (key === 'endDate') {
        fd.append('endDate', formattedEndDate.value)
      } else {
        fd.append(key, values[key])
      }
    }
    for (const [key, value] of fd.entries()) {
      console.log(`${key}:`, value)
    }
    // 添加用戶ID
    fd.append('user', user._id)
    // 傳送圖片，後端middlewares 好像要改upload
    // fd.append('images', fileRecords.value[0].file)
    if (fileRecords.value.length > 0) {
      for (const file of fileRecords.value) {
        fd.append('images', file.file)
      }
    }
    // 使用combineDateAndTime函數來組合日期和時間
    // 使用combineDateAndTime函數來組合日期和時間
    // fd.append('startDate', combineDateAndTime(startDate.value.value, startTime.value.value).toISOString())
    // fd.append('endDate', combineDateAndTime(endDate.value.value, endTime.value.value).toISOString())

    await apiAuth.post('/activity', fd)

    createSnackbar({
      text: '新增成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/')
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
