import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://board-games-backend-project.herokuapp.com/api/",
});

export const getReviews = async () => {
  const response = await gamesApi.get("reviews");
  return response.data;
};

export const getReviewsByCategory = async (category) => {
  const response = await gamesApi.get("reviews", {
    params: { category: category },
  });
  return response.data;
};

export const getReviewById = async (id) => {
  const response = await gamesApi.get(`reviews/${id}`);
  return response.data.review;
};

export const getCategories = async () => {
  const response = await gamesApi.get("categories");
  return response.data;
};
