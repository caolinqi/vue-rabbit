import httpInstance from "../utils/https";

export const getCategoryAPI = () => {
  return httpInstance({
    url: "home/category/head",
  });
};
