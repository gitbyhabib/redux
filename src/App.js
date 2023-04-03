import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/header";
import Home from "./component/home";
import Movie from "./component/movie";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div className="App">
        <Header></Header>

        <h3>Hello from Main Redux</h3>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movie />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
