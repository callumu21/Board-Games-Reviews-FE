import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";
import SortAndFilter from "./SortAndFilter";
import { useSearchParams } from "react-router-dom";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const order = searchParams.get("order") || "desc";
  const sort_by = searchParams.get("sort_by") || "created_at";

  useEffect(() => {
    getReviews(order, sort_by).then(({ reviews }) => {
      setReviews(reviews);
    });
  }, [order, sort_by]);

  if (reviews.length === 0)
    return <p className="loading-message">Loading reviews...</p>;

  return (
    <main>
      <SortAndFilter setSearchParams={setSearchParams} />
      <ul className="reviews">
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
      </ul>
    </main>
  );
}
