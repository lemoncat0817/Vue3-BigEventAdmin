<script setup>
import { artGetChannelsService } from '@/api/article.js'
import { ref } from 'vue'

const model = defineModel()
const channelList = ref([])
defineProps({ width: { type: String } })

const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data.data
}
getChannelList()
</script>

<template>
  <!-- label展示給用戶看的， value提交給後台的 -->
  <el-select :style="{ width }" v-model="model">
    <el-option v-for="channel in channelList" :key="channel.id" :label="channel.cate_name"
      :value="channel.id"></el-option>
  </el-select>
</template>
