import "./App.css";
import Reviews from "./components/Reviews";
import Header from "./components/Header";
import { useState } from "react";
import { UserContext } from "./contexts/User";

function App() {
  const [user, setUser] = useState({
    username: "weegembump",
    name: "Gemma Bump",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <Reviews className="reviews" />
      </div>
    </UserContext.Provider>
  );
}

export default App;
