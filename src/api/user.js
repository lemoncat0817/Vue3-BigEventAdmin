import request from '@/utils/request'

//  註冊接口
export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })

//  登入接口
export const userLoginService = ({ username, password }) =>
  request.post('/api/login', { username, password })

//  獲取用戶基本信息
export const userGetInfoService = () => request.get('/my/userinfo')

//  更新用戶基本信息
export const userUpdateInfoService = ({ id, nickname, email }) =>
  request.put('/my/userinfo', { id, nickname, email })

// 更新用戶頭像
export const userUpdateAvatarService = (avatar) =>
  request.patch('/my/update/avatar', { avatar })

// 更新用戶密碼
export const userUpdatePasswordService = ({ old_pwd, new_pwd, re_pwd }) => {
  request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })
}
