<template>
<VContainer>
    <VRow>
        <VCol cols="12">
            <h1>註冊</h1>
        </VCol>
        <VDivider></VDivider>
        <VCol cols="12">
    <VForm
    :disabled="isSubmitting"
    @submit.prevent="submit"
    >
    <VTextField
    v-model="idCard.value.value"
    label="身分證"
    :error-messages="idCard.errorMessage.value"
    prepend-icon="mdi-id-card"
    ></VTextField>

    <VTextField
    v-model="name.value.value"
    label="姓名"
    :error-messages="name.errorMessage.value"
    prepend-icon="mdi-id-card"
    ></VTextField>

    <VTextField
    v-model="birthday.value.value"
    label="生日"
    :error-messages="birthday.errorMessage.value"
    readonly="readonly"
    prepend-icon="mdi-calendar"
    @click:prepend="menu = !menu"
    ></VTextField>

    <VDialog
v-model="menu"
persistent
max-width="290px"
@click:outside="closeMenu"
>
<VDatePicker
    v-model="birthday.value.value"
    color="#F8B44B"
    :max="maxDate"
    @input="menu = false"
    ></VDatePicker>
</VDialog>

    <VTextField
    v-model="account.value.value"
    label="帳號"
    minlength="4"
    maxlength="20"
    counter="counter"
    :error-messages="account.errorMessage.value"
    prepend-icon="mdi-account"
    ></VTextField>

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

    <VTextField
    v-model="password.value.value"
    label="密碼"
    type="password"
    minlength="4"
    maxlength="20"
    counter="counter"
    :error-messages="password.errorMessage.value"
    prepend-icon="mdi-security"
    ></VTextField>

    <VTextField
    v-model="passwordConfirm.value.value"
    label="確認密碼"
    type="password"
    minlength="4"
    maxlength="20"
    counter="counter"
    :error-messages="passwordConfirm.errorMessage.value"
    prepend-icon="mdi-security"
    ></VTextField>

    <VBtn
    type="submit"
    color="#F8B44B"
    >註冊</VBtn>
    </VForm>
  </VCol>
</VRow>
</VContainer>
</template>

<script setup>
import { isNationalIdentificationNumberValid } from 'taiwan-id-validator'
import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { api } from '@/plugins/axios'
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import { ref, computed } from 'vue'

const router = useRouter()
const createSnackbar = useSnackbar()
const menu = ref(false)
const today = new Date()
const maxDate = computed(() => {
  const year = today.getFullYear() - 20
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
})

// 定義註冊表單的資料格式
const schema = yup.object({
  name: yup
    .string()
    .required('姓名為必填欄位')
    .min(2, '姓名長度不符')
    .max(40, '姓名長度不符')
    .test(
      'no-numbers', // 自定義驗證名稱
      '姓名不能包含數字', // 錯誤訊息
      (value) => !/\d/.test(value) // 驗證函數，檢查字符串中是否不含有數字
    ),
  idCard: yup
    .string()
    .required('身分證為必填欄位')
    .test(
      'is-valid-idCard', '身分證格式錯誤',
      (value) => {
        return isNationalIdentificationNumberValid(value)
      }
    ),
  birthday: yup
    .date()
    .required('生日為必填欄位')
    .max(maxDate.value, '必須年滿20歲'),
  account: yup
    .string()
    .required('帳號為必填欄位')
    .min(4, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符'),
  // 手機驗證規則
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
  password: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(20, '密碼長度不符'),
  passwordConfirm: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(20, '密碼長度不符')
  // .oneOf 只允許符合陣列內其中一個值
  // .oneOf(陣列, 錯誤訊息)
  // .ref('password') 代表這個 schema 的 password 欄位值
    .oneOf([yup.ref('password')], '密碼不一致')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const name = useField('name')
const idCard = useField('idCard')
const account = useField('account')
const phone = useField('phone')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')
const birthday = useField('birthday')

const closeMenu = () => {
  menu.value = false
}

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/users', {
      name: values.name, // 新增姓名欄位數據
      idCard: values.idCard, // 包括身分證號碼
      account: values.account,
      birthday: values.birthday,
      phone: values.phone,
      email: values.email,
      password: values.password
    })
    createSnackbar({
      text: '註冊成功',
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
