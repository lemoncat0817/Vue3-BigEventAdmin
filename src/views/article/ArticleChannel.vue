<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { artGetChannelsService, artDelChannelService } from '../../api/article'
import ChannelEdit from './components/ChannelEdit.vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import { ref } from 'vue'
const channelList = ref([])
const loading = ref(false)
const dialog = ref()

const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
}

getChannelList()

const onEditChannel = (row) => {
  dialog.value.open(row)
}

const onDelChannel = async (row) => {
  console.log(row)
  await ElMessageBox.confirm(`你確認要刪除${row.cate_name}嗎`, '溫馨提示', {
    type: 'warning',
    confirmButtonText: '確認',
    cancelButtonText: '取消'
  })
  await artDelChannelService(row.id)
  ElMessage.success('刪除成功')
  getChannelList()
}

const onAddChannel = () => {
  dialog.value.open({})
}

const onSuccess = () => {
  getChannelList()
}
</script>

<template>
  <PageContainer title="文章分類">
    <template #extra>
      <el-button @click="onAddChannel">添加分類</el-button>
    </template>
    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column type="index" width="100" label="序號"></el-table-column>
      <el-table-column prop="cate_name" label="分類名稱"></el-table-column>
      <el-table-column prop="cate_alias" label="分類別名"></el-table-column>
      <el-table-column width="100" label="操作">
        <template #default="{ row, $index }">
          <el-button :icon="Edit" circle type="primary" plain @click="onEditChannel(row, $index)">
          </el-button>
          <el-button :icon="Delete" circle type="danger" plain @click="onDelChannel(row, $index)">
          </el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="沒有數據"></el-empty>
      </template>
    </el-table>
    <ChannelEdit ref="dialog" @success="onSuccess"></ChannelEdit>
  </PageContainer>
</template>

<style lang="scss" scoped></style>
