<template>
  <v-card
    class="pa-2"
    flat
    height="100px"
  >
    <v-toolbar>
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>

      <v-btn>
        搜尋活動
      </v-btn>
      <v-dialog width="500">
  <template v-slot:activator="{ props }">
        <v-btn class="member"
            v-bind="props"
            @click="showPopup">
        <v-icon>mdi-filter-variant</v-icon>
            進階搜尋
        </v-btn>
    </template>

<template v-slot:default="{ isActive }">
  <v-card title="Dialog">
    <v-card-text>
            <VTextField label="活動地區"></VTextField>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        text="Close Dialog"
        @click="isActive.value = false"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
</v-dialog>
    </v-toolbar>
  </v-card>
</template>
<script></script>