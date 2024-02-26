// Utilities
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import UserRole from '@/enums/UserRole'
import { useApi } from '@/composable/axios'

export const useUserStore = defineStore('user', () => {
  const { apiAuth } = useApi()

  const _id = ref('')
  const name = ref('')
  const token = ref('')
  const account = ref('')
  const email = ref('')
  const cart = ref(0)
  const role = ref(UserRole.USER)
  const avatar = ref('')
  const phone = ref('')
  const birthday = ref('')

  const login = (data) => {
    if (data.token) {
      token.value = data.token
    }
    _id.value = data._id
    name.value = data.name
    account.value = data.account
    email.value = data.email
    cart.value = data.cart
    role.value = data.role
    avatar.value = data.avatar
    phone.value = data.phone
    birthday.value = data.birthday
  }

  const isLogin = computed(() => {
    return token.value.length > 0
  })

  const isAdmin = computed(() => {
    return role.value === UserRole.ADMIN
  })

  const getProfile = async () => {
    if (token.value.length === 0) return

    try {
      const { data } = await apiAuth.get('/users/me')
      login(data.result)
    } catch (error) {
      logout()
    }
  }

  const logout = () => {
    token.value = ''
    _id.value = ''
    account.value = ''
    email.value = ''
    avatar.value = ''
    phone.value = ''
    birthday.value = ''
    cart.value = 0
    role.value = UserRole.USER
  }

  return {
    _id,
    name,
    token,
    account,
    email,
    phone,
    birthday,
    cart,
    role,
    login,
    logout,
    isLogin,
    isAdmin,
    avatar,
    getProfile
  }
}, {
  persist: {
    key: '20240126',
    paths: ['token']
  }
})
