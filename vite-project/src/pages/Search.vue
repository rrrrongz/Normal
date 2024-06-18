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
      :items="filteredItems"
  />


</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import { showToast } from 'vant';

const searchText = ref('');
const onSearch = (val) => showToast(val);
const onCancel = () => showToast('取消');

//已选中的标签
const activeIds = ref([]);
const activeIndex = ref(0);


//标签列
const items = ref([
  {
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女' },

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
]);

//移除标签
const close = (active) => {
activeIds.value = activeIds.value.filter(item => {
  return item !== active
})
}
//利用计算属性写的
// 定义一个计算属性 filteredItems，它基于 items.value 和 searchText.value 进行计算
const filteredItems = computed(() =>
    // 使用 map 方法遍历 items.value 数组中的每一个 parentItem
    items.value.map(parentItem => {
      // 尝试获取 parentItem 的 children 属性，并使用 filter 方法过滤出 text 属性包含 searchText.value 的子项
      // 如果 parentItem 没有 children 属性或没有匹配的子项，filteredChildren 将是一个空数组 []
      const filteredChildren = parentItem.children?.filter(item => item.text.includes(searchText.value)) || [];

      // 创建一个新的对象，该对象包含 parentItem 的所有属性（使用展开语法 ...parentItem），
      // 但其 children 属性被替换为 filteredChildren（即过滤后的子项数组）
      return { ...parentItem, children: filteredChildren };
      // map 方法结束后，得到一个新的数组，该数组包含原始父项和它们过滤后的子项
    })
        // 使用 filter 方法再次遍历这个新数组，过滤出那些 children 属性长度大于 0 的父项
        // 这样做是为了移除那些没有匹配子项的父项
        .filter(parentItem => parentItem.children?.length > 0)
);

// 注释总结：
// 该代码首先通过遍历 items.value 数组中的每一个 parentItem，对每一个 parentItem 的 children 进行过滤，
// 保留 text 属性包含 searchText.value 的子项。然后，它创建一个新的数组，其中每个元素都是一个父项，
// 其 children 属性是过滤后的子项数组。最后，它再次过滤这个新数组，移除那些没有子项的父项，
// 最终得到的 filteredItems 是一个只包含有匹配子项的父项的数组。



</script>

<style scoped>

</style>