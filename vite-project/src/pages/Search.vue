<template>

    <form action="/">
      <van-search
          v-model="searchText"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
      />
    </form>
  <van-divider content-position="left">已选标签</van-divider>
<!--  这里就van-row 得和 van-col 配合用 一个是行 一个是 列-->
  <van-row :gutter="[20, 20]">
    <van-col v-for=" active in activeIds ">
      <van-tag  closeable size="small" type="primary" @close="close(active)">
        {{ active }}
      </van-tag>
    </van-col>
  </van-row>

  <van-divider content-position="left">未选标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="items"
  />


</template>

<script setup lang="ts">
import { ref } from 'vue';
import { showToast } from 'vant';

const searchText = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => showToast('取消');

//已选中的标签
const activeIds = ref([]);
const activeIndex = ref(0);


//标签列
const items = [
  {
    text: '浙江',
    children: [
      { text: '杭州', id: 1 },
      { text: '温州', id: 2 },
      { text: '宁波', id: 3, disabled: true },
    ],
  },
  {
    text: '江苏',
    children: [
      { text: '南京', id: 4 },
      { text: '无锡', id: 5 },
      { text: '徐州', id: 6 },
    ],
  },
  { text: '福建', disabled: true },
];

//移除标签
const close = (active) => {
activeIds.value = activeIds.value.filter(item => {
  return item !== active
})
}

</script>

<style scoped>

</style>