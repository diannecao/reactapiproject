// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Gear from "./Gear"; 
import Splatfest from "./Splatfest"; 
import "./App.css";

function App() {
  const [active, setActive] = useState("");
  const handleButtonClick = (buttonName) => {
    setActive((prevActive) => (prevActive === buttonName ? "" : buttonName));
  };

  return (
    <>
    <Router>
      <div>
        <div className="banner">
          <div className="navbar">
            <h1>Splatoon 3</h1>
            <ul>
              <li>
                 <Link
                  to="/"
                  className={`btn ${active === "home" ? "active" : ""}`}
                  onClick={() => handleButtonClick("home")}
                >
                  Maps
                </Link>
              </li>
              <li>
              <Link
                  to="/gear"
                  className={`btn ${active === "gear" ? "active" : ""}`}
                  onClick={() => handleButtonClick("gear")}
                >
                  My Gear
                </Link>
              </li>
              <li>
              <Link
                  to="/splatfest"
                  className={`btn ${active === "splatfest" ? "active" : ""}`}
                  onClick={() => handleButtonClick("splatfest")}
                >
                  Splatfest
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Routes>
  <Route path="/gear" element={<Gear />} />
  <Route path="/splatfest" element={<Splatfest />} />
  <Route path="/" element={<Home />} />
</Routes>

      </div>
    </Router>
    <body>
 
</body>

    </>
    
  );
}

export default App;
