<template lang="pug">
    VContainer
      VRow.tabWindow
        VCol(cols="12")
          h1.text-center 已開團活動管理
        VDivider
        VCol(cols="12")

        VCol(cols="12")
          VDataTableServer(
            v-model:items-per-page="tableItemsPerPage"
            v-model:sort-by="tableSortBy"
            v-model:page="tablePage"
            :items="tableActivity"
            :headers="tableHeaders"
            :loading="tableLoading"
            :items-length="tableItemsLength"
            :search="tableSearch"
            hover
            @update:items-per-page="tableLoadItems"
            @update:sort-by="tableLoadItems"
            @update:page="tableLoadItems"
          )
            template(#top)
              VTextField(
                v-model="tableSearch"
                label="搜尋"
                append-icon="mdi-magnify"
                @click:append="tableApplySearch"
                @keydown.enter="tableApplySearch"
              )
            template(#[`item.image`]="{ item }")
              VImg(
    :src="item.images[0]"
    height="50px")
            template(#[`item.sell`]="{ item }")
              VIcon(
    v-if="item.sell"
    icon="mdi-check")
            template(#[`item.edit`]="{ item }")
              VBtn(
    icon="mdi-pencil"
    variant="text"
    color="#FFEFE8"
    @click="openDialog(item)")
    VDialog(
    v-model="dialog"
    persistent
    width="500px")
      VForm(
    :disabled="isSubmitting"
    @submit.prevent="submit")
        pre {{ errors }}
        VCard
          VCardTitle {{ dialogId === '' ? '新增商品' : '編輯商品' }}
          VCardText
            VTextField(
              v-model="name.value.value"
              label="名稱"
              :error-messages="name.errorMessage.value"
            )
            VSelect(
              v-model="area.value.value"
              label="地區"
              :items="areas"
              :error-messages="area.errorMessage.value"
            )
            VTextField(
              v-model="location.value.value"
              label="地址"
              :error-messages="location.errorMessage.value"
            )
            VSelect(
              v-model="category.value.value"
              label="分類"
              :items="categories"
              :error-messages="category.errorMessage.value"
            )
            VSelect(
              v-model="participants.value.value"
              label="人數"
              :items="participantOptions"
              :error-messages="participants.errorMessage.value"
            )
            VTextField(
              v-model="startDate.value.value"
              type="date"
              label="開始日期"
              :error-messages="startDate.errorMessage.value"
            )
            VTextField(
              v-model="startTime.value.value"
              label="開始時間"
              type="time"
              :error-messages="startTime.errorMessage.value"
            )
            VTextField(
              v-model="endDate.value.value"
              type="date"
              label="結束日期"
              :error-messages="startDate.errorMessage.value"
            )
            VTextField(
              v-model="endTime.value.value"
              type="time"
              label="結束時間"
              :error-messages="endTime.errorMessage.value"
            )
            VTextField(
              v-model="phone.value.value"
              label="手機"
              :readonly="dialogId.value !== ''"
              :error-messages="endTime.errorMessage.value"
            )
            VTextField(
              v-model="email.value.value"
              label="Email"
              :readonly="dialogId.value !== ''"
              :error-messages="endTime.errorMessage.value"
            )
            VTextarea(
              v-model="description.value.value"
              label="說明"
              :error-messages="description.errorMessage.value"
            )
            VueFileAgent(
              ref="fileAgent"
              v-model="fileRecords"
              v-model:rawModelValue="rawFileRecords"
              multiple="true"
              accept="image/jpeg,image/png"
              deletable
              :error-text="{type: '檔案格式不支援', size: '檔案超過 1MB 大小限制'}"
              help-text="選擇檔案或拖曳到這裡"
              :max-files="3"
              max-size="1MB"
            )
          VCardActions
            VSpacer
            VBtn(
    color="red"
    :disabled="isSubmitting"
    @click="closeDialog") 取消
            VBtn(
    color="green"
    type="submit"
    :loading="isSubmitting") 送出
</template>
<script setup>
import { ref } from 'vue'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composable/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import validator from 'validator'
import { useUserStore } from '@/store/user'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()

const fileAgent = ref(null)
console.log('456', user._id)
// 表單對話框的開啟狀態
const dialog = ref(false)
// 表單對話框正在編輯的商品 ID，空的話代表是新增商品
const dialogId = ref('')
// 打開編輯對話框
const openDialog = (item) => {
  if (item) {
    dialogId.value = item._id
    name.value.value = item.name
    area.value.value = item.area
    description.value.value = item.description
    category.value.value = item.category
    participants.value.value = item.participants
    startDate.value.value = item.startDate
    startTime.value.value = item.startTime
    endDate.value.value = item.endDate
    endTime.value.value = item.endTime
    phone.value.value = item.phone
    email.value.value = item.email
    location.value.value = item.location
  } else {
    dialogId.value = ''
  }
  dialog.value = true
}
// 關閉對話框
const closeDialog = () => {
  dialog.value = false
  resetForm()
  while (fileRecords.value.length > 0) {
    // fileRecords.value[0].deleteFileRecord()
    fileAgent.value.deleteFileRecord(fileRecords.value[0])
  }
}

// select選單的選項
const categories = ['揪團玩', '揪團行', '揪團買', '揪團住']
const areas = ['北海道', '東北', '關東', '中部', '近畿', '中國', '四國', '九州']
// 参与人数选项
const participantOptions = Array.from({ length: 50 }, (_, i) => i + 1)

// 表單驗證
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
const { handleSubmit, isSubmitting, resetForm, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    area: '',
    description: '',
    category: '',
    participants: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    phone: '',
    email: '',
    location: ''
  }
})
const name = useField('name')
const area = useField('area')
const description = useField('description')
const category = useField('category')
const participants = useField('participants')
const startDate = useField('startDate')
const startTime = useField('startTime')
const endDate = useField('endDate')
const endTime = useField('endTime')
const phone = useField('phone')
const email = useField('email')
const location = useField('location')

const fileRecords = ref([])
const rawFileRecords = ref([])

const submit = handleSubmit(async (values) => {
  // if (fileRecords.value.length === 0) return
  if (dialogId.value === '' && fileRecords.value.length === 0) return
  try {
    // 建立 FormData 物件
    // 使用 fd.append(欄位, 值) 將資料放進去
    const fd = new FormData()
    for (const key in values) {
      fd.append(key, values[key])
    }

    // if (fileRecords.value.length > 0) {
    //   fd.append('image', fileRecords.value[0].file)
    // }

    if (fileRecords.value.length > 0) {
      for (const file of fileRecords.value) {
        fd.append('images', file.file)
      }
    }

    if (dialogId.value === '') {
      await apiAuth.post('/activity', fd)
    } else {
      await apiAuth.patch('/activity/' + dialogId.value, fd)
    }
    createSnackbar({
      text: dialogId.value === '' ? '新增成功' : '編輯成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    closeDialog()
    tableApplySearch()
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

// 表格每頁幾個
const tableItemsPerPage = ref(10)
// 表格排序
const tableSortBy = ref([
  { key: 'createdAt', order: 'desc' }
])
// 表格頁碼
const tablePage = ref(1)
// 表格商品資料陣列
const tableActivity = ref([])
// 表格欄位設定
const tableHeaders = [
  { title: '圖片', align: 'center', sortable: false, key: 'image' },
  { title: '名稱', align: 'center', sortable: true, key: 'name' },
  { title: '地區', align: 'center', sortable: true, key: 'area' },
  // { title: '說明', align: 'center', sortable: true, key: 'description' },
  { title: '分類', align: 'center', sortable: true, key: 'category' },
  { title: '人數', align: 'center', sortable: true, key: 'participants' },
  { title: '編輯', align: 'center', sortable: false, key: 'edit' }
]
// 表格載入狀態
const tableLoading = ref(true)
// 表格全部資料數
const tableItemsLength = ref(0)
// 表格搜尋文字
const tableSearch = ref('')
// 表格載入資料
const tableLoadItems = async () => {
  tableLoading.value = true
  try {
    const { data } = await apiAuth.get('/activity/all', {
      params: {
        page: tablePage.value,
        itemsPerPage: tableItemsPerPage.value,
        sortBy: tableSortBy.value[0]?.key || 'createdAt',
        sortOrder: tableSortBy.value[0]?.order === 'asc' ? 1 : -1,
        search: tableSearch.value
      }
    })
    tableActivity.value.splice(0, tableActivity.value.length, ...data.result.data)
    tableItemsLength.value = data.result.total
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
  tableLoading.value = false
}
tableLoadItems()
// 表格套用搜尋
const tableApplySearch = () => {
  tablePage.value = 1
  tableLoadItems()
}
</script>
<style scoped>
  .tabWindow{
    margin-left: 10px;
  }
</style>
