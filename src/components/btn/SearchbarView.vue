<template>
    <v-card
      class="pa-4 searchbar"
      flat
      height="100px"
      >
      <v-toolbar class="textfield">
        <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
        ></v-text-field>
        <v-btn>搜尋活動</v-btn>

    <!-- 進階搜尋 之後再用 -->
    <!-- <v-btn
      color="primary"
    >
      進階搜尋

      <v-dialog
        v-model="dialog"
        activator="parent"
        width="auto"
      >
        <v-card>
          <v-card-text>

  <form @submit.prevent="submit">

    <v-select
      v-model="select.value"
      :items="items"
      :error-messages="select.errorMessage.value"
      label="選擇地區"
    ></v-select>
    <v-select
      v-model="select.value"
      :items="options"
      :error-messages="select.errorMessage.value"
      label="選擇分類"
    ></v-select>

    <v-btn
      class="me-4"
      type="submit"
    >
      submit
    </v-btn>

    <v-btn @click="handleReset">
      clear
    </v-btn>
  </form>

          </v-card-text>
          <v-card-actions>
            <v-btn
color="primary"
block
@click="dialog = false"
>Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn> -->
      </v-toolbar>
    </v-card>

  </template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)

const showPopup = () => {
  dialog.value = true
}

const select = ref({
  value: null,
  errorMessage: ''
})

const checkbox = ref({
  value: { value: false }, // 改為初始化 value 字段
  errorMessage: ''
})

const items = ['北海道', '東北', '關東', '中部', '近畿', '中國'] 
const options = ['揪團玩', '揪團行', '揪團住', '揪團買'] 

const submit = () => {
  // Add your form submission logic here
  console.log('Form submitted')
}

const handleReset = () => {
  // Reset form fields
  select.value = null
  checkbox.value = false
  dialog.value = false // Close the dialog on reset
}
</script>
<style scoped>
  .searchbar{
    background-color: #FFEFE8;
  }
  .textfield{
    background-color: white;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
  }
</style>
