<template>
    <v-card class="pa-2" flat height="100px">
      <v-toolbar>
        <v-text-field hide-details prepend-icon="mdi-magnify" single-line></v-text-field>
        <v-btn>搜尋活動</v-btn>
    <v-btn
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
            <template>
  <form @submit.prevent="submit">

    <v-select
      v-model="select.value"
      :items="items"
      :error-messages="select.errorMessage.value"
      label="Select"
    ></v-select>

    <v-checkbox
      v-model="checkbox.value"
      :error-messages="checkbox.errorMessage.value"
      value="1"
      label="Option"
      type="checkbox"
    ></v-checkbox>

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
</template>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
      </v-toolbar>
    </v-card>

  </template>
  
  <script setup>
import { ref } from 'vue';

const dialog = ref(false);

const showPopup = () => {
  dialog.value = true;
};


const select = ref({
  value: null,
  errorMessage: '',
});

const checkbox = ref({
    value: { value: false }, // 改為初始化 value 字段
  errorMessage: '',
});

const items = ['Item 1', 'Item 2', 'Item 3']; // Replace with your actual items

const submit = () => {
  // Add your form submission logic here
  console.log('Form submitted');
};

const handleReset = () => {
  // Reset form fields
  name.value = '';
  phone.value = '';
  email.value = '';
  select.value = null;
  checkbox.value = false;
  dialog.value = false; // Close the dialog on reset
};
</script>
<style scoped>

</style>
  