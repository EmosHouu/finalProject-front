// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify Composables
import { createVuetify } from 'vuetify'

// Locale imports
// import { zhHant } from 'vuetify/locale'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6'
        }
      }
    }
  }
  // 設置locale
  // locale: {
  //   locale: 'zhHant', // 設置預設語言為繁體中文
  //   messages: { zhHant }// 引入繁體中文的訊息
  // }
})
