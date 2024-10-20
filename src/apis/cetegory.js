import httpInstance from "../utils/https";

export const getCategoryIdAPI = (params) =>
  httpInstance.get("/category", { params });
