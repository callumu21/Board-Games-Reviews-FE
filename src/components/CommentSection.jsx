import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import CommentCard from "./CommentCard";

export default function CommentSection() {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(review_id).then((comments) => setComments(comments.comments));
  }, [review_id]);

  if (comments.length > 0) {
    return (
      <section className="comments">
        <h2>Comments</h2>
        {comments.map((comment) => (
          <CommentCard comment={comment} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="comments">
        <h2>Comments</h2>
        <p>Nobody has commented yet</p>
      </section>
    );
  }
}
