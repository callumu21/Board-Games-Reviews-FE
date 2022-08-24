import "../styles/Header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header>
      <Link to="/reviews">
        <div className="header__title">
          <p>Board Game Reviews</p>
        </div>
      </Link>
      <div className="header__user-info">
        <p>Welcome, {user.username}!</p>
        <img
          src={user.avatar_url}
          className="header__profile-pic"
          alt={`${user.username}`}
        />
      </div>
    </header>
  );
}
