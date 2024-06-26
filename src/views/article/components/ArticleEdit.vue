<script setup>
import { ref, nextTick } from 'vue'
import ChannelSelect from './ChannelSelect.vue'
import { Plus } from '@element-plus/icons-vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import {
  artPublishService,
  artGetDetailService,
  artEditService
} from '@/api/article.js'
import { baseURL } from '@/utils/request'
import axios from 'axios'

const visibleDrawer = ref(false)

const defaultForm = ref({
  title: '',
  cate_id: '',
  content: '',
  cover_img: '',
  state: ''
})

const formModel = ref({
  ...defaultForm.value
})

const emit = defineEmits(['success'])
const onPublish = async (state) => {
  formModel.value.state = state
  //接口需要的是formData ，
  //我們需要將普通物件轉換成 formData物件
  const fd = new FormData()
  for (let key in formModel.value) {
    fd.append(key, formModel.value[key])
  }

  // 發請求
  if (formModel.value.id) {
    // 編輯操作
    await artEditService(fd)
    ElMessage.success('修改成功')
    visibleDrawer.value = false
    emit('success', 'edit')
  } else {
    // 添加操作
    await artPublishService(fd)
    ElMessage.success('添加成功')
    visibleDrawer.value = false
    emit('success', 'add')
  }
}

const editorRef = ref()
const open = async (row) => {
  visibleDrawer.value = true

  if (row.id) {
    const res = await artGetDetailService(row.id)
    formModel.value = res.data.data
    //  圖片需要單獨處理
    imgUrl.value = baseURL + formModel.value.cover_img
    // 注意:提交給後台，需要的數據格式，是file物件格式
    // 需要將網絡圖片地址轉換成file物件儲存起來
    const file = await imageUrlToFile(imgUrl.value, formModel.value.cover_img)
    formModel.value.cover_img = file
  } else {
    formModel.value = {
      ...defaultForm.value
    }
    imgUrl.value = ''
    nextTick(() => {
      editorRef.value.setHTML('')
    })
  }
}

// 将网络图片地址转换为File对象
async function imageUrlToFile(url, fileName) {
  try {
    // 第一步：使用axios获取网络图片数据
    const response = await axios.get(url, { responseType: 'arraybuffer' })
    const imageData = response.data

    // 第二步：将图片数据转换为Blob对象
    const blob = new Blob([imageData], {
      type: response.headers['content-type']
    })

    // 第三步：创建一个新的File对象
    const file = new File([blob], fileName, { type: blob.type })

    return file
  } catch (error) {
    console.error('将图片转换为File对象时发生错误:', error)
    throw error
  }
}

//  圖片上傳相關邏輯
const imgUrl = ref('')
const onSelectFile = (uploadFile) => {
  imgUrl.value = URL.createObjectURL(uploadFile.raw) //預覽圖片
  formModel.value.cover_img = uploadFile.raw
}

defineExpose({ open })
</script>

<template>
  <!-- 抽屉 -->`
  <el-drawer v-model="visibleDrawer" :title="formModel.id ? '編輯文章' : '添加文章'" direction="rtl" size="40%">
    <!-- 发表文章表单 -->
    <el-form ref="formRef" :model="formModel" label-width="100px">
      <el-form-item label="文章標題" prop="title">
        <el-input v-model="formModel.title" placeholder="請輸入標題"></el-input>
      </el-form-item>
      <el-form-item label="文章分類" prop="cate_id">
        <channel-select v-model="formModel.cate_id" width="100%" />
      </el-form-item>
      <el-form-item label="文章封面" prop="cover_img">
        <!-- 此處需要關閉element-plus的自動上傳不需要配置action等參數 
          只需要做前端的本地預覽圖片即可，無需在提交之前上傳圖片
          語法: URL.createObjectURL(...)創建本地預覽的地址,來預覽
        -->
        <el-upload class="avatar-uploader" :show-file-list="false" :auto-upload="false" :on-change="onSelectFile">
          <img v-if="imgUrl" :src="imgUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <div class="editor">
          <QuillEditor ref="editorRef" content-type="html" v-model:content="formModel.content" theme="snow">
          </QuillEditor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="onPublish('已发布')" type="primary">發布</el-button>
        <el-button @click="onPublish('草稿')" type="info">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
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
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}

.editor {
  width: 100%;

  :deep(.ql-editor) {
    min-height: 200px;
  }
}
</style>
