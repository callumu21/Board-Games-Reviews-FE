import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";
import Categories from "./Categories";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <main>
      <Categories />
      <ul className="reviews">
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
      </ul>
    </main>
  );
}
