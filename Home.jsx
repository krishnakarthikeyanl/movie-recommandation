// Home.jsx
import React from "react";

const Home = ({ fetchData }) => {
  return (
    <>
    <div className="search">
    <h1>
        “It's funny how the colors of the real world only seem really real when you watch them on a screen.”
        ― anthony burgess</h1>
      <div className="main">
        <h1>Search Movies By Genre</h1>
      </div>
      <div className="buttons">
        <button onClick={() => fetchData("drama")}>Drama</button>
        <button onClick={() => fetchData("animation")}>Animation</button>
        <button onClick={() => fetchData("mystery")}>Mystery</button>
        <button onClick={() => fetchData("horror")}>Horror</button>
        <button onClick={() => fetchData("comedy")}>Comedy</button>
        <button onClick={() => fetchData("western")}>Western</button>
       
      </div>
    </div>
    </>
  );
};

export default Home;
