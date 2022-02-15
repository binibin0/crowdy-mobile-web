import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: "900px" }}>
      <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", margin: "0 auto", paddingTop: "60px" }}>
        <div>
          This page is for <br />
          Crowdy's Map
        </div>
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          style={{
            //
            width: "340px",
            height: "80px",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px",
            marginTop: "60px",
            marginBottom: "40px",
            borderStyle: "none",
            borderRadius: "8px",
            backgroundColor: "white",
            color: "#00705b",
          }}
          onClick={() => {
            navigate("/twosomeSeohyeonRodeo");
          }}
        >
          Move to "/twosomeSeohyeonRodeo"
        </button>
        <button
          style={{
            //
            width: "340px",
            height: "80px",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px",
            marginBottom: "40px",
            borderStyle: "none",
            borderRadius: "8px",
            backgroundColor: "white",
            color: "#00705b",
          }}
          onClick={() => {
            navigate("/crowdy");
          }}
        >
          Move to "/crowdy"
        </button>
        <button
          style={{
            //
            width: "340px",
            height: "80px",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px",
            marginBottom: "40px",
            borderStyle: "none",
            borderRadius: "8px",
            backgroundColor: "white",
            color: "#00705b",
          }}
          onClick={() => {
            navigate("/survey");
          }}
        >
          Move to "/survey"
        </button>
        <button
          style={{
            //
            width: "340px",
            height: "80px",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px",
            marginBottom: "40px",
            borderStyle: "none",
            borderRadius: "8px",
            backgroundColor: "white",
            color: "#00705b",
          }}
          onClick={() => {
            navigate("/admin-login");
          }}
        >
          Move to "/admin-login"
        </button>
      </div>
    </div>
  );
};

export default Home;
