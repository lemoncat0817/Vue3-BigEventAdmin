<script setup>
import { userRegisterService, userLoginService } from '@/api/user'
import { User, Lock } from '@element-plus/icons-vue'
import { ref, watch, onMounted } from 'vue'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
import { Base64 } from 'js-base64'
import Cookies from 'js-cookie'
const isRegister = ref(false) // 是否注册
const form = ref()

// 整個的用於提交的form數據物件
const formModel = ref({
  username: '159357',
  password: '159357',
  repassword: ''
})
// 整個表單的校驗規則
// 1.非空校驗 required: true message消息提示, trigger觸發校驗的時機 blur change
// 2.長度校驗 min:xx, max:xx
// 3.正則校驗 pattern:正則規則
// 4.自定義校驗 => 自己寫邏輯校驗 (校驗函數)
//   validator: (rule, value, callback)
//   (1) rule 當前校驗規則相關的信息
//   (2) value 所校驗的表單元素目前的表單值
//   (3) callback 無論成功還是失敗， 都需要callback回調
//       - callback() 校驗成功
//       - callback(new Error(錯誤信息)) 校驗失敗
const rules = {
  username: [
    { required: true, message: '請輸入用戶名', trigger: 'blur' },
    { min: 5, max: 10, message: '用戶名必須是5-10位的字串', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密碼必須是 6-15位 的非空字串',
      trigger: 'blur'
    }
  ],
  repassword: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密碼必須是 6-15位 的非空字串',
      trigger: 'blur'
    },
    {
      validator: (rule, value, callback) => {
        //  判斷 value 和 當前 form 中收集的 password 是否一致
        if (value !== formModel.value.password) {
          callback(new Error('兩次輸入密碼不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

const register = async () => {
  //  註冊成功之前,先進行校驗,校驗成功 -> 請求， 校驗失敗 -> 自動提示
  await form.value.validate()
  await userRegisterService(formModel.value)
  ElMessage.success('註冊成功')
  isRegister.value = false
}

const userStore = useUserStore()
const router = useRouter()

//    切換的時候，重置表單內容
watch(isRegister, () => {
  formModel.value = {
    username: '',
    password: '',
    repassword: ''
  }
})

// 記住密碼
const isRemember = ref(false) // 是否记住账号密码

// 登录
const login = async () => {
  await form.value.validate()

  const loading = ElLoading.service({
    lock: true,
    text: '登入中',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  const res = await userLoginService(formModel.value)
  loading.close()

  // 如果记住密码
  if (isRemember.value) {
    // 转码
    const { username, password } = formModel.value
    const localForm = {
      username: Base64.encode(username),
      password: Base64.encode(password)
    }
    // 存到 Cookies
    Cookies.set('LOCAL_KEY', JSON.stringify(localForm))
  } else {
    Cookies.remove('LOCAL_KEY')
  }

  userStore.setToken(res.data.token)
  ElMessage.success('登录成功')
  router.push('/')
}

// 查询是否存了用户名和密码
onMounted(() => {
  const localForm = Cookies.get('LOCAL_KEY')
  if (localForm) {
    isRemember.value = true
    // 解码回填
    try {
      const { username, password } = JSON.parse(localForm)
      formModel.value.username = Base64.decode(username)
      formModel.value.password = Base64.decode(password)
    } catch (error) {
      console.error('本地数据解析失败~', error)
    }
  } else {
    isRemember.value = false
  }
})
</script>

<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg"></el-col>
    <el-col :span="6" :offset="3" class="form">
      <!-- 注册表单 -->
      <el-form :model="formModel" :rules="rules" ref="form" size="large" autocomplete="off" v-if="isRegister">
        <el-form-item>
          <h1>註冊</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="formModel.username" :prefix-icon="User" placeholder="請輸入用戶名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formModel.password" :prefix-icon="Lock" type="password" placeholder="請輸入密碼"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input v-model="formModel.repassword" :prefix-icon="Lock" type="password" placeholder="請再次輸入密碼"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="register" class="button" type="primary" auto-insert-space>
            註冊
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = false">
            ← 返回
          </el-link>
        </el-form-item>
      </el-form>

      <!-- 登录表单 -->
      <el-form :model="formModel" :rules="rules" ref="form" size="large" autocomplete="off" v-else>
        <el-form-item>
          <h1>登入</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="formModel.username" :prefix-icon="User" placeholder="請輸入用戶名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formModel.password" name="password" :prefix-icon="Lock" type="password"
            placeholder="請輸入密碼"></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox v-model="isRemember">記住我</el-checkbox>
            <el-link type="primary" :underline="false">忘記密碼？</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" class="button" type="primary" auto-insert-space>登入</el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = true">
            註冊 →
          </el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;

  .bg {
    background:
      url('@/assets/logo2.png') no-repeat 60% center / 240px auto,
      url('@/assets/login_bg.jpg') no-repeat center / cover;
    border-radius: 0 20px 20px 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;

    .title {
      margin: 0 auto;
    }

    .button {
      width: 100%;
    }

    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
