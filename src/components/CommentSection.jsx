import "../styles/CommentSection.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";

export default function CommentSection() {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState(false);
  const [commentAdded, setCommentAdded] = useState(false);
  const [deleteComment, setDeleteComment] = useState(false);

  console.log(deleteComment);
  useEffect(() => {
    fetchComments(review_id).then((comments) => setComments(comments.comments));
    setCommentAdded(false);
    setDeleteComment(false);
  }, [review_id, commentAdded, deleteComment]);

  if (comments.length > 0) {
    return (
      <section className="comments">
        <div className="comments-header">
          <h2>Comments</h2>
          <button
            className="comments-header__btn"
            onClick={() => {
              setAddComment((curr) => !curr);
            }}
          >
            {addComment ? "Exit Comment" : "Add Comment"}
          </button>
        </div>
        <NewComment
          addComment={addComment}
          setAddComment={setAddComment}
          setCommentAdded={setCommentAdded}
          review_id={review_id}
        />
        {comments.map((comment) => (
          <CommentCard
            comment={comment}
            deleteComment={deleteComment}
            setDeleteComment={setDeleteComment}
          />
        ))}
      </section>
    );
  } else {
    return (
      <section className="comments">
        <div className="comments-header">
          <h2>Comments</h2>
          <button
            className="comments-header__btn"
            onClick={() => {
              setAddComment((curr) => !curr);
            }}
          >
            {addComment ? "Exit Comment" : "Add Comment"}
          </button>
        </div>
        <p style={{ display: addComment ? "none" : "block" }}>
          Nobody has commented yet
        </p>
        <NewComment
          addComment={addComment}
          setAddComment={setAddComment}
          setCommentAdded={setCommentAdded}
          review_id={review_id}
        />
      </section>
    );
  }
}
