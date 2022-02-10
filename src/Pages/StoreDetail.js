import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";

const StoreDetail = () => {
  const navigate = useNavigate();
  const { store } = useParams();
  return (
    <div>
      <h1>This is Store Detail page of {store}</h1>
      <button onClick={() => navigate("/")}>Go back to Home</button>
    </div>
  );
};

export default StoreDetail;
