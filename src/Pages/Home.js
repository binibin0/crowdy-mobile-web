import * as React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This page is for Crowdy's Map</h1>
      <input type="text" placeholder="type any store"></input>
      <button
        onClick={() => {
          navigate("/twosomeSeohyeonRodeo");
        }}
      >
        Move to page
      </button>
    </div>
  );
};

export default Home;
