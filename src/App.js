import "./App.css";
import Reviews from "./components/Reviews";
import Header from "./components/Header";
import CategoryReviews from "./components/CategoryReviews";
import SingleReview from "./components/SingleReview";
import { useState } from "react";
import { UserContext } from "./contexts/User";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState({
    username: "weegembump",
    name: "Gemma Bump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/reviews" />} />
            <Route path="/reviews" element={<Reviews className="reviews" />} />
            <Route path="/reviews/:review_id" element={<SingleReview />} />
            <Route
              path="/reviews/category/:category"
              element={<CategoryReviews className="reviews" />}
            />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
