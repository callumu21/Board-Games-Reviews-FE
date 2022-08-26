import "../styles/PageNotFound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <section className="page-not-found">
      <h1>404!</h1>
      <p>
        Congratulations! You've ventured further into this site than anyone
        thought possible.
      </p>
      <p>Unfortunately, it doesn't look like there's anything here just yet.</p>
      <p>
        To escape this endless void, just press the button below and we'll do
        the rest.
      </p>
      <Link to="/reviews">
        <button className="page-not-found__btn">Take me home!</button>
      </Link>
    </section>
  );
}
