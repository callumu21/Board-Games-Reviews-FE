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
  const [err, setErr] = useState("");
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
          if (comment.length > 4 && addComment) {
            setAddComment(false);
            setErr("");
            postComment(review_id, user, comment)
              .then((newComment) => {
                setCommentAdded(true);
                setComment("");
              })
              .catch(() => {
                setErr(
                  "Looks like your comment didn't send. Please try again in a minute."
                );
              });
          } else {
            setErr("Comments should be at least five characters long!");
          }
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
        <div className="new-comment__submit">
          <p className="error-white">{err}</p>
          <button className="new-comment__submit-btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
