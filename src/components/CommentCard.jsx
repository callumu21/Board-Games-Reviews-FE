import { formatDate } from "../utils/formattingFunctions";

export default function CommentCard({
  comment: { author, created_at, votes, body, comment_id },
}) {
  return (
    <section className="comment-card">
      <div className="comment-card__author-info">
        <p>
          Written by {author} on {formatDate(created_at)}
        </p>
      </div>
      <div className="comment-card__body">
        <p>{body}</p>
      </div>
      <div className="comment-card__votes">
        <img
          className="comment-card__votes-icon"
          src="/like-white.png"
          alt="like button icon"
        />
        <p>{votes}</p>
      </div>
    </section>
  );
}
