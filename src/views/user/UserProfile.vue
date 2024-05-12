<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { userUpdateInfoService } from '@/api/user'

// pinia 用户数据
const {
  user: { username, nickname, email, id },
  getUser
} = useUserStore()
// 表单数据
const form = ref({
  username,
  nickname,
  email,
  id
})

// 获取用户信息

// 表单校验规则
const rules = {
  nickname: [
    { required: true, message: '請輸入用戶暱稱', trigger: 'blur' },
    {
      pattern: /^\S{2,10}$/,
      message: '暱稱必須是2-10位的非空字符',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '請輸入用戶郵箱', trigger: 'blur' },
    {
      type: 'email',
      message: '請輸入正確郵件地址',
      trigger: 'blur'
    }
  ]
}

const formRef = ref()

const onSumbit = async () => {
  // 等待校驗結果
  await formRef.value.validate()
  // 提交修改
  await userUpdateInfoService(form.value)
  // 通知user模塊進行數據更新
  getUser()
  // 提示用戶
  ElMessage.success('用戶訊息更新成功')
}
</script>

<template>
  <PageContainer title="基本資料">
    <el-row>
      <el-col :span="12">
        <el-form ref="formRef" :model="form" :rules="rules" label-width="100px" size="large">
          <el-form-item label="登入名稱">
            <el-input v-model="form.username" disabled></el-input>
          </el-form-item>
          <el-form-item label="用戶暱稱" prop="nickname">
            <el-input v-model="form.nickname"></el-input>
          </el-form-item>
          <el-form-item label="用戶郵箱" prop="email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSumbit">提交修改</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </PageContainer>
</template>
