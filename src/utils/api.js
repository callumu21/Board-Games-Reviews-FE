import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://board-games-backend-project.herokuapp.com/api/",
});

export const getReviews = async () => {
  const reviews = await gamesApi.get("reviews");
  return reviews.data;
};

export const getReviewsByCategory = async (category) => {
  const reviews = await gamesApi.get("reviews", {
    params: { category: category },
  });
  return reviews.data;
};

export const getCategories = async () => {
  const categories = await gamesApi.get("categories");
  return categories.data;
};
