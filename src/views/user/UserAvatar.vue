<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { Plus, Upload } from '@element-plus/icons-vue'
import { ref } from 'vue'
// 基於store的數據，初始化imageUrl的初始值
import { useUserStore } from '@/stores'
import { userUpdateAvatarService } from '@/api/user'

const userStore = useUserStore()
const imageUrl = ref(userStore.user.user_pic)
const uploadRef = ref()

// 基於FileReader讀取圖片做預覽
const onSelectFile = (uploadFile) => {
  const reader = new FileReader()
  reader.readAsDataURL(uploadFile.raw)
  reader.onload = () => {
    imageUrl.value = reader.result // 將圖片的base64資料存入imageUrl
    console.log(imageUrl.value)
  }
}

const onUpdateAvatar = async () => {
  // 發送請求更新頭像
  await userUpdateAvatarService(imageUrl.value)
  // userStore 重新渲染
  await userStore.getUser()
  // 提示用戶
  ElMessage.success('頭像更新成功')
}
</script>

<template>
  <PageContainer title="更換頭像">
    <el-upload ref="uploadRef" style="margin-bottom: 20px" :auto-upload="false" class="avatar-uploader"
      :show-file-list="false" :on-change="onSelectFile">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon">
        <Plus />
      </el-icon>
    </el-upload>
    <el-button type="primary" @click="uploadRef.$el.querySelector('input').click()" :icon="Plus"
      size="large">選擇圖片</el-button>
    <el-button type="success" @click="onUpdateAvatar" :icon="Upload" size="large">上傳頭像</el-button>
  </PageContainer>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 278px;
      height: 278px;
      display: block;
    }

    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }

    .el-upload:hover {
      border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 278px;
      height: 278px;
      text-align: center;
    }
  }
}
</style>
