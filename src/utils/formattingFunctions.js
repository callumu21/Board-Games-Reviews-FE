export const formatCategories = (slug) => {
  const slugWords = slug.split("-");
  slugWords[0] =
    slugWords[0][0].charAt(0).toUpperCase() + slugWords[0].slice(1);
  return slugWords.join(" ");
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toString().split(" ").slice(0, 5).join(" ");
};
