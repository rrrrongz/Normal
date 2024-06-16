<template>
  <van-nav-bar
      title="标题"
      fixed
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
<!--  路由组件-->
    <router-view>

    </router-view>
<!--  启用路由模式-->
  <van-tabbar route @change="onChange">
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="team">个人</van-tabbar-item>
  </van-tabbar>

</template>

<script setup lang="ts">
import {showToast} from "vant";
import {ref} from "vue";

const onClickLeft = () => history.back();
const onClickRight = () => showToast('按钮');

// const active = ref(0);
const onChange = (index) => showToast(`标签 ${index}`);
</script>

