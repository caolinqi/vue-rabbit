import { defineStore } from "pinia";
import { ref } from "vue";
import { getCategoryAPI } from "../apis/layout";
//导航列表的数据的管理
export const useCategoryStore = defineStore("category", () => {
  // 导航列表的state
  const categoryList = ref([]);
  // 导航列表的action
  const getCategory = async () => {
    const res = await getCategoryAPI();
    console.log(res);
    categoryList.value = res.result;
  };
  return { categoryList, getCategory };
});
