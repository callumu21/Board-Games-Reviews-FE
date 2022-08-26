import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";
import SortAndFilter from "./SortAndFilter";

export default function CategoryReviews() {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const order = searchParams.get("order") || "desc";
  const sort_by = searchParams.get("sort_by") || "created_at";

  useEffect(() => {
    getReviews(order, sort_by, category).then(({ reviews }) => {
      setReviews(reviews);
    });
  }, [category, order, sort_by]);

  return (
    <main>
      <SortAndFilter />
      <ul className="reviews">
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.title} />;
        })}
      </ul>
    </main>
  );
}
