import SingleReviewCard from "./SingleReviewCard";
import CommentSection from "./CommentSection";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import PageNotFound from "./PageNotFound";

export default function IndividualReview() {
  const [review, setReview] = useState();
  const { review_id } = useParams();
  const [err, setErr] = useState(false);

  useEffect(() => {
    getReviewById(review_id)
      .then((review) => setReview(review))
      .catch(() => setErr(true));
  }, [review_id]);

  if (err) return <PageNotFound />;
  if (review) {
    return (
      <main className="individual-review">
        <SingleReviewCard review={review} />
        <CommentSection review={review} />
      </main>
    );
  } else return <p className="loading-message">Fetching review...</p>;
}
