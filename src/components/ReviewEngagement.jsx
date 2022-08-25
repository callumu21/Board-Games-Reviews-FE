import ReviewVoteButton from "../components/ReviewVoteButton";
import { useState } from "react";

export default function ReviewEngagement({ comment_count, votes, review_id }) {
  const [err, setErr] = useState(null);

  return (
    <>
      <div className="review-card__engagement-stats">
        <div className="review-card__engagement-stats-labels">
          <div className="review-card__comment flex-center">
            <img
              className="review-card__icon"
              src="/comment.png"
              alt="comment button icon"
            ></img>
            <p>{comment_count}</p>
          </div>
          <ReviewVoteButton
            votes={votes}
            review_id={review_id}
            setErr={setErr}
          />
        </div>
      </div>
      <p className="review-card__engagement-stats-error error">
        {err ? "It looks like your vote wasn't counted!" : ""}
      </p>
    </>
  );
}
