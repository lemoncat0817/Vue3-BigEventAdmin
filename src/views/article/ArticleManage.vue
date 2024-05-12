<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { Delete, Edit } from '@element-plus/icons-vue'
import { ref } from 'vue'
import ChannelSelect from './components/ChannelSelect.vue'
import { artGetListService, artDelService } from '@/api/article.js'
import ArticleEdit from './components/ArticleEdit.vue'
import { formatTime } from '@/utils/format.js'

// 暂时使用的假数据
const articleList = ref([]) //文章列表
const total = ref(0) //總條數
const loading = ref(false)

const params = ref({
  pagenum: 1, //  當前頁
  pagesize: 5, //當前生效的每頁條數
  cate_id: '',
  state: ''
})

//基於params參數，獲取文章列表
const getArticleList = async () => {
  loading.value = true
  const res = await artGetListService(params.value)
  articleList.value = res.data.data
  total.value = res.data.total
  loading.value = false
}
getArticleList()

//  處理分頁邏輯
const onSizeChange = (size) => {
  params.value.pagenum = 1
  params.value.pagesize = size
  getArticleList()
}

const onCurrentChange = (page) => {
  //  更新當前頁
  params.value.pagenum = page
  //  基於最新的當前頁，渲染數據
  getArticleList()
}

//  搜索邏輯=>按照最新的條件重新檢索，從第一頁開始展示
const onSearch = () => {
  params.value.pagenum = 1
  getArticleList()
}
//  重置邏輯
const onReset = () => {
  params.value.pagenum = 1
  params.value.cate_id = ''
  params.value.state = ''
  getArticleList()
}

const articleEditRef = ref()
//  添加邏輯
const onAddArticle = () => {
  articleEditRef.value.open({})
}

//  編輯邏輯
const onEditArticle = (row) => {
  articleEditRef.value.open(row)
}
//  刪除邏輯
const onDeleteArticle = async (row) => {
  await ElMessageBox.confirm(`是否刪除文章${row.title}嗎`, '溫馨提示', {
    type: 'warning',
    confirmButtonText: '確認',
    cancelButtonText: '取消'
  })
  await artDelService(row.id)
  ElMessage.success('刪除成功')
  getArticleList()
}

// 添加或者編輯成功的回調
const onSuccess = (type) => {
  if (type === 'add') {
    // 添加完毕，更新跳转到渲染最后一页；编辑完毕，渲染当前页
    const lastPage = Math.ceil((total.value + 1) / params.value.pagesize)
    params.value.pagenum = lastPage
  }
  setTimeout(() => {
    getArticleList()
  }, 500)
}
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button type="primary" @click="onAddArticle">添加文章</el-button>
    </template>
    <!-- 表單區域 -->
    <el-form inline>
      <el-form-item label="文章分類:">
        <ChannelSelect width="200px" v-model="params.cate_id"></ChannelSelect>
      </el-form-item>
      <el-form-item label="發布狀態:">
        <!-- 這裡後台標記發布狀態，就是通過中文標記的，已發布/草稿 -->
        <el-select style="width: 200px" v-model="params.state">
          <el-option label="已發布" value="已发布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSearch" type="primary">搜索</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格區域 -->
    <el-table v-loading="loading" :data="articleList" style="width: 100%">
      <el-table-column label="文章標題" prop="title" width="400">
        <template #default="{ row }">
          <el-link type="primary" :underline="false">{{ row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="分類" prop="cate_name"></el-table-column>
      <el-table-column label="發表時間" prop="pub_date">
        <template #default="{ row }">
          {{ formatTime(row.pub_date) }}
        </template>
      </el-table-column>
      <el-table-column label="狀態" prop="state"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button circle plain type="primary" :icon="Edit" @click="onEditArticle(row)"></el-button>
          <el-button circle plain type="danger" :icon="Delete" @click="onDeleteArticle(row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分頁區域 -->
    <el-pagination v-model:current-page="params.pagenum" v-model:page-size="params.pagesize" :page-sizes="[2, 3, 5, 10]"
      :background="true" layout="jumper,total, sizes, prev, pager, next" :total="total" @size-change="onSizeChange"
      @current-change="onCurrentChange" style="margin-top: 20px; justify-content: flex-end" />
    <!-- 添加編輯的抽屜 -->
    <ArticleEdit ref="articleEditRef" @success="onSuccess"></ArticleEdit>
  </PageContainer>
</template>

<style lang="scss" scoped></style>
