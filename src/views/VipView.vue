<template>
  <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-row">
      <v-tabs
v-model="tab"
direction="vertical"
color="primary"
>
        <v-tab value="option-1">
          <v-icon start>
            mdi-account
          </v-icon>
          已開團活動管理
        </v-tab>
        <v-tab value="option-2">
          <v-icon start>
            mdi-lock
          </v-icon>
          已報名活動
        </v-tab>
        <v-tab value="option-3">
          <v-icon start>
            mdi-access-point
          </v-icon>
          Option 3
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item value="option-1">
            <ActivityManageView />
        </v-window-item>
        <v-window-item value="option-2">
            <SignupActivityView />
        </v-window-item>
        <v-window-item value="option-3">
          <v-card flat>
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
  {{ name }}
</template>

<script setup>
import ActivityManageView from '@/components/member/ActivityManageView.vue'
import SignupActivityView from '@/components/member/SignupActivityView.vue'
import { ref } from 'vue'

const tab = ref('option-1')
const name = ref('')

</script>
