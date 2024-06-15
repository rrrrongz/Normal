

<template>
  <van-nav-bar
      title="标题"
      fixed = true
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>

  </van-nav-bar>

</template>

<script setup lang="ts">
import {showToast} from "vant";

const onClickLeft = () => history.back();
const onClickRight = () => showToast('按钮');
</script>

