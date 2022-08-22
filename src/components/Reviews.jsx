import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <>
      <ul className="reviews">
        {reviews.map((review) => {
          return <ReviewCard review={review} />;
        })}
      </ul>
    </>
  );
}
