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

export const patchVotes = async (review_id, voteChange) => {
  const response = await gamesApi.patch(`reviews/${review_id}`, {
    inc_votes: voteChange,
  });
  return response.data;
};

export const fetchComments = async (review_id) => {
  const response = await gamesApi.get(`reviews/${review_id}/comments`);
  return response.data;
};

export const postComment = async (review_id, user, comment) => {
  const response = await gamesApi.post(`reviews/${review_id}/comments`, {
    username: user.username,
    body: comment,
  });
  return response.data;
};
