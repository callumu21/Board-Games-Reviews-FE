import "../styles/VoteButton.css";
import { useState } from "react";
import { patchCommentVotes } from "../utils/api";

export default function ReviewVoteButton({ comment_id, votes }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [voteCounter, setVoteCounter] = useState(0);
  const [err, setErr] = useState(false);

  return (
    <div className="comment-card__votes flex-center">
      <p className="error-white">
        {err ? "It looks like your vote wasn't counted!" : ""}
      </p>
      <button
        className="votes__button"
        disabled={hasVoted}
        onClick={() => {
          setHasVoted((curr) => !curr);
          setVoteCounter((currCount) => currCount + 1);
          patchCommentVotes(comment_id, 1)
            .then(() => setErr(null))
            .catch((err) => {
              setHasVoted((curr) => !curr);
              setVoteCounter((currCount) => currCount - 1);
              setErr(true);
            });
        }}
      >
        <img
          className="votes__icon"
          src={hasVoted ? "/heart.png" : "/like-white.png"}
          alt="like button icon"
        />
      </button>
      <p>{votes + voteCounter}</p>
    </div>
  );
}
