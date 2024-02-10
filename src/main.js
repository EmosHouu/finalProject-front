// main.js

// Vue
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import vuetify from '@/plugins/vuetify' // 确保路径正确

// 其他插件
import { registerPlugins } from '@/plugins'

const app = createApp(App)

// 注册Vuetify
app.use(vuetify)

// 注册其他插件
registerPlugins(app)

app.mount('#app')
