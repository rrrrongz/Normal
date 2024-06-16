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
  <slot name="content">
    <div>
      content
    </div>

  </slot>

  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user">个人</van-tabbar-item>

  </van-tabbar>

</template>

<script setup lang="ts">
import {showToast} from "vant";
import {ref} from "vue";

const onClickLeft = () => history.back();
const onClickRight = () => showToast('按钮');

const active = ref(0);
const onChange = (index) => showToast(`标签 ${index}`);
</script>

