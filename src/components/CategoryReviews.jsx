import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByCategory } from "../utils/api";
import ReviewCard from "./ReviewCard";
import Categories from "./Categories";

export default function CategoryReviews() {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getReviewsByCategory(category).then(({ reviews }) => {
      setReviews(reviews);
    });
  }, [category]);

  return (
    <main>
      <Categories />
      <ul className="reviews">
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.title} />;
        })}
      </ul>
    </main>
  );
}
