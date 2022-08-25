import "../styles/VoteButton.css";
import { useState } from "react";
import { patchVotes } from "../utils/api";

export default function VoteButton({ review_id, votes, setErr }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [voteCounter, setVoteCounter] = useState(0);

  return (
    <div className="votes flex-center">
      <button
        className="votes__button"
        disabled={hasVoted}
        onClick={() => {
          setHasVoted((curr) => !curr);
          setVoteCounter((currCount) => currCount + 1);
          patchVotes(review_id, 1)
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
          src={hasVoted ? "/heart.png" : "/like.png"}
          alt="like button icon"
        />
      </button>
      <p>{votes + voteCounter}</p>
    </div>
  );
}
