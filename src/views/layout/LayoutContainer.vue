<!-- layout/LayoutContainer.vue -->
<script setup>
import {
  Management,
  Promotion,
  UserFilled,
  User,
  Crop,
  EditPen,
  SwitchButton,
  CaretBottom
} from '@element-plus/icons-vue'
import avatar from '@/assets/default.png'
import { useUserStore } from '@/stores'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()
onMounted(() => {
  userStore.getUser()
})

const handleCommand = async (key) => {
  if (key === 'logout') {
    // 退出操作
    await ElMessageBox.confirm('你確認要進行退出嗎', '溫馨提示', {
      type: 'warning',
      confirmButtonText: '確認',
      cancelButtonText: '取消'
    })
    // 清除本地的數據(token + user信息)
    userStore.removeToken()
    userStore.setUser({})
    router.push('/login')
  } else {
    router.push(`/user/${key}`)
  }
}
</script>

<template>
  <!-- 容器 -->
  <el-container class="layout-container">
    <!-- 左侧 -->
    <el-aside width="200px">
      <!-- logo -->
      <div class="el-aside__logo"></div>
      <!-- 菜单项 -->
      <el-menu active-text-color="#ffd04b" background-color="#232323" :default-active="$route.path" text-color="#fff"
        router>
        <!-- 一级菜单 -->
        <el-menu-item index="/article/channel">
          <el-icon>
            <Management />
          </el-icon>
          <span>文章分類</span>
        </el-menu-item>
        <el-menu-item index="/article/manage">
          <el-icon>
            <Promotion />
          </el-icon>
          <span>文章管理</span>
        </el-menu-item>
        <!-- 带有二级菜单的一级菜单 -->
        <el-sub-menu index="/user">
          <!-- 一级 -->
          <template #title>
            <el-icon>
              <UserFilled />
            </el-icon>
            <span>個人中心</span>
          </template>
          <!-- 二级 -->
          <el-menu-item index="/user/profile">
            <el-icon>
              <User />
            </el-icon>
            <span>基本資料</span>
          </el-menu-item>
          <!-- 二级 -->
          <el-menu-item index="/user/avatar">
            <el-icon>
              <Crop />
            </el-icon>
            <span>更換頭像</span>
          </el-menu-item>
          <!-- 二级 -->
          <el-menu-item index="/user/password">
            <el-icon>
              <EditPen />
            </el-icon>
            <span>重置密碼</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <!-- 最左 -->
        <div>
          當前用戶：
          <strong>
            {{ userStore.user.nickname || userStore.user.username }}
          </strong>
        </div>
        <!-- 最右 -->
        <el-dropdown placement="bottom-end" @command="handleCommand">
          <span class="el-dropdown__box">
            <el-avatar :src="userStore.user.user_pic || avatar" />
            <el-icon>
              <CaretBottom />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="profile" :icon="User">
                基本資料
              </el-dropdown-item>
              <el-dropdown-item command="avatar" :icon="Crop">
                更換頭像
              </el-dropdown-item>
              <el-dropdown-item command="password" :icon="EditPen">
                重置密碼
              </el-dropdown-item>
              <el-dropdown-item command="logout" :icon="SwitchButton">
                退出登入
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <!-- 主要内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>大事件 ©2024 Created by 檸檬</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;

  .el-aside {
    background-color: #232323;

    &__logo {
      height: 120px;
      background: url('@/assets/logo.png') no-repeat center / 120px auto;
    }

    .el-menu {
      border-right: none;
    }
  }

  .el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;

    .el-dropdown__box {
      display: flex;
      align-items: center;

      .el-icon {
        color: #999;
        margin-left: 10px;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
  }

  .el-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
}
</style>
