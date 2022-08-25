import "../styles/ReviewCard.css";
import { formatCategories, formatDate } from "../utils/formattingFunctions";
import { useNavigate } from "react-router-dom";
import ReviewEngagement from "../components/ReviewEngagement";

export default function ReviewCard({
  review: {
    review_id,
    owner,
    category,
    review_img_url,
    created_at,
    title,
    designer,
    votes,
    comment_count,
  },
}) {
  const navigate = useNavigate();

  return (
    <section className="review-card">
      <div className="review-card__title">
        <p>{title}</p>
      </div>
      <img src={review_img_url} className="review-card__img" alt="" />
      <div className="review-card__info">
        <p>Written by {owner}</p>
        <p>Published on {formatDate(created_at)}</p>
        <p>Category: {formatCategories(category)}</p>
        <p>Designed by {designer}</p>
      </div>
      <button
        className="review-card__btn"
        onClick={() => {
          navigate(`/reviews/${review_id}`);
        }}
      >
        Read more!
      </button>
      <ReviewEngagement
        comment_count={comment_count}
        votes={votes}
        review_id={review_id}
      />
    </section>
  );
}
