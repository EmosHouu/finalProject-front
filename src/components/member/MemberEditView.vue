<template>
    <v-container>
        <v-row class="tabWindow">
            <v-col cols="12">
                <h1
class="text-center"
>會員資料編輯</h1>
                <v-divider></v-divider>
            </v-col>
            <v-col cols="12">
        <v-sheet
width="300"
class="mx-auto"
>
        <v-form
fast-fail
@submit.prevent
>
        <v-text-field
            v-model="account"
            label="帳號"
            :readonly="true"
            :rules="accountRules"
            prepend-icon="mdi-account"
        ></v-text-field>

        <v-text-field
            v-model="name"
            label="姓名"
            :rules="nameRules"
            prepend-icon="mdi-id-card"
        ></v-text-field>

        <v-text-field
            v-model="email"
            label="信箱"
            :rules="emailRules"
            prepend-icon="mdi-email"
        ></v-text-field>

        <VTextField
            v-model="birthday"
            label="生日"
            :readonly="true"
            prepend-icon="mdi-calendar"
            ></VTextField>

            <!-- <VDialog
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

        <v-text-field
            v-model="phone"
            label="手機"
            :rules="phoneRules"
            prepend-icon="mdi-phone"
        ></v-text-field>
        <v-btn
type="submit"
block
class="mt-2"
>確定修改</v-btn>
        </v-form>
        </v-sheet>
    </v-col>
        </v-row>
    <!-- <VListItem
    :prepend-avatar="user.avatar"
    :title="user.account"
    :subtitle="user.name"
    ></VListItem> -->

        <!-- <p>會員帳號：{{user.account}}</p>
        <p>會員名稱：{{user.name}}</p>
        <p>會員名稱：{{user.email}}</p> -->
</v-container>
</template>
<script setup>
import { ref, computed } from 'vue'
import { isEmail, isMobilePhone } from 'validator' // 导入用于验证邮箱格式的工具库，例如 validator
// 引用pinia狀態管理庫裡的user
import { useUserStore } from '@/store/user'
const user = useUserStore()
// const prependAvatar = computed(() => {
//   return `https://source.boringavatars.com/beam/120/${user.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`
// })
// onMounted(() => {
//     user.getProfile()
//     console.log(user.getProfile())
// })
// console.log(user.birthday) // 访问 birthday
// console.log(user.phone)    // 访问 phone
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

// 將user.birthday轉換格式為 年/月/日
const userBirthday = new Date(user.birthday)
const year = userBirthday.getFullYear()
const month = String(userBirthday.getMonth() + 1).padStart(2, '0')
const day = String(userBirthday.getDate()).padStart(2, '0')
const formattedBirthday = `${year}/${month}/${day}`
console.log(formattedBirthday)
const birthday = ref(formattedBirthday)

const phone = ref(user.phone)
const phoneRules = ref([
  (value) => {
    if (isMobilePhone(value)) return true
    return '手機格式不符'
  }
])

</script>
<style scoped>
  .tabWindow{
    margin-left: 450px;
  }
</style>
