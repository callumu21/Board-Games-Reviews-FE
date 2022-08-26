import "../styles/CommentSection.css";
import { formatDate } from "../utils/formattingFunctions";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { confirmAlert } from "react-confirm-alert";
import "../styles/ConfirmAlert.css";
import { removeComment } from "../utils/api";

export default function CommentCard({
  comment: { author, created_at, votes, body, comment_id },
  deleteComment,
  setDeleteComment,
}) {
  const { user } = useContext(UserContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    if (!deleteComment) {
      confirmAlert({
        title: "Deletions cannot be undone",
        message: "Are you sure to delete this comment?",
        buttons: [
          {
            label: "Yes",
            onClick: () => {
              if (!isDeleting) {
                setIsDeleting(true);
                setDeleteComment(true);
                removeComment(comment_id).then(() => setIsDeleting(false));
              }
            },
          },
          {
            label: "No",
            onClick: () => {},
          },
        ],
      });
    }
  };

  return (
    <section className="comment-card">
      <div className="comment-card__author-info">
        <div className="comment-card__author-text">
          <p>Written by {author}</p>
          <p>on {formatDate(created_at)}</p>
        </div>
        <button
          className="comment-card__delete-btn"
          style={{ display: user.username === author ? "block" : "none" }}
          onClick={handleDelete}
        >
          Delete
        </button>
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
