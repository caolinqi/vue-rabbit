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
