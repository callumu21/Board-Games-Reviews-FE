import "../styles/CommentSection.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import CommentCard from "./CommentCard";

export default function CommentSection() {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState(false);
  const [commentAdded, setCommentAdded] = useState(false);

  useEffect(() => {
    fetchComments(review_id).then((comments) => setComments(comments.comments));
    setCommentAdded(false);
  }, [review_id, commentAdded]);

  if (comments.length > 0) {
    return (
      <section className="comments">
        <div className="comments-header">
          <h2>Comments</h2>
        </div>
        {comments.map((comment) => (
          <CommentCard comment={comment} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="comments">
        <div className="comments-header">
          <h2>Comments</h2>
        </div>
        <p>Nobody has commented yet</p>
      </section>
    );
  }
}
