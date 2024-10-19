import httpInstance from "../utils/https";

export const getbannerAPI = () => {
  return httpInstance({
    url: "/home/banner",
  });
};
