<script setup>
import { onMounted, ref, watch } from "vue";
import { getCategoryIdAPI } from "../../apis/cetegory";
import { getbannerAPI } from "../../apis/home";
import { useRoute } from "vue-router";
import GoodsItem from "../Home/components/GoodsItem.vue";

// 获取路由对象实例，用于访问路由参数
const route = useRoute();

// 存储分类数据的响应结果
const categoryId = ref({});

// 定义获取分类数据的异步函数
const getCategoryIdData = async () => {
  // 调用 API 获取分类数据，并将结果存储到 categoryId 中
  const res = await getCategoryIdAPI({ id: route.params.id });
  categoryId.value = res.result;
};
const bannerList = ref([]);
const getBannerList = async () => {
  const res = await getbannerAPI("2");
  bannerList.value = res.result;
};

// 在组件挂载时调用 getCategoryIdData 以获取初始数据
onMounted(() => {
  getCategoryIdData(), getBannerList();
});

// 监听变化，并在变化时重新获取分类数据(这一步超级重要！！！！)
watch(() => {
  getCategoryIdData();
});
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryId.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in categoryId.children" :key="i.id">
            <RouterLink to="/">
              <img :src="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="item in categoryId.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0, auto;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
