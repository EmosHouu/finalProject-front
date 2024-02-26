<template>
    <div>會員資料編輯</div>
    <VListItem
    :prepend-avatar="user.avatar"
    :title="user.account"
    :subtitle="user.name"
    ></VListItem>

    <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="account"
        label="帳號"
        :rules="accountRules"
      ></v-text-field>

      <v-text-field
        v-model="name"
        label="姓名"
        :rules="nameRules"
      ></v-text-field>

      <v-text-field
        v-model="email"
        label="信箱"
        :rules="emailRules"
      ></v-text-field>

      <!-- <VTextField
        v-model="birthday"
        label="生日"
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
        v-model="birthday"
        color="#F8B44B"
        :max="maxDate"
        @input="menu = false"
        ></VDatePicker>
    </VDialog> -->

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>

        <!-- <p>會員帳號：{{user.account}}</p>
        <p>會員名稱：{{user.name}}</p>
        <p>會員名稱：{{user.email}}</p> -->
</template>
<script setup>
import {ref, computed } from 'vue'
import { isEmail } from 'validator'; // 导入用于验证邮箱格式的工具库，例如 validator
// 引用pinia狀態管理庫裡的user
import { useUserStore } from '@/store/user'
const user = useUserStore()
const prependAvatar = computed(() => {
    return `https://source.boringavatars.com/beam/120/${user.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`
})
// 編輯會員資料表單
const account = ref(user.account)
const accountRules = ref([
  (value) => {
    if (value?.length > 4) return true
    return '使用者帳號長度不符'
  }
])

const name = ref(user.name)
const nameRules = ref([
  (value) => {
    if (value?.length > 2) return true
    return '使用者姓名長度不符'
  }
])

const email = ref(user.email)
const emailRules = ref([
  (value) => {
    if (isEmail(value)) return true
    return '信箱格式不符'
  }
])

const birthday = ref(user.birthday)
const menu = ref(false)
const closeMenu = () => {
  menu.value = false
}
</script>
<style scoped>
</style>