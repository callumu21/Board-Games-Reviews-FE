import { useState, useContext } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "../contexts/User";

export default function NewComment({
  addComment,
  setAddComment,
  setCommentAdded,
  review_id,
}) {
  const [comment, setComment] = useState("");
  const { user } = useContext(UserContext);
  return (
    <section
      className="new-comment"
      style={{ display: addComment ? "block" : "none" }}
    >
      <form
        className="new-comment__form"
        onSubmit={(event) => {
          event.preventDefault();
          postComment(review_id, user, comment).then((newComment) => {
            setCommentAdded(true);
            setAddComment(false);
            setComment("");
          });
        }}
      >
        <textarea
          placeholder="Write your comment here"
          className="new-comment__input"
          maxLength="200"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        ></textarea>
        <button>Submit</button>
      </form>
    </section>
  );
}
