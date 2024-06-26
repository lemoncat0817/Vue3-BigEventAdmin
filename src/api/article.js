import request from '@/utils/request'
// 分類:獲取文章分類
export const artGetChannelsService = () => request.get('/my/cate/list')
// 分類:添加文章分類
export const artAddChannelService = (data) => request.post('/my/cate/add', data)
// 分類:编辑文章分类
export const artEditChannelService = (data) =>
  request.put('/my/cate/info', data)
// 分類:删除文章分类
export const artDelChannelService = (id) =>
  request.delete('/my/cate/del', { params: { id } })

// 文章:獲取文章列表
export const artGetListService = (params) =>
  request.get('/my/article/list', {
    params
  })

// 文章:添加文章
export const artPublishService = (data) => {
  request.post('/my/article/add', data)
}

// 文章:獲取文章詳情

export const artGetDetailService = (id) =>
  request.get('/my/article/info', { params: { id } })

// 文章:編輯文章接口
export const artEditService = (data) => request.put('/my/article/info', data)

// 文章:刪除文章
export const artDelService = (id) =>
  request.delete('/my/article/info', { params: { id } })
