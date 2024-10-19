import httpInstance from "../utils/https";
//轮播图api
export const getbannerAPI = () => {
  return httpInstance({
    url: "/home/banner",
  });
};

//新鲜好物api
export const getNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};

//人气推荐api
export const getHotAPI = () => {
  return httpInstance({
    url: "/home/hot",
  });
};

//全部分类(包含推荐商品)
export const getStoreAPI = () => {
  return httpInstance({
    url: "/home/goods",
  });
};
