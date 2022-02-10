import * as React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [store, setStore] = React.useState("");
  const navigate = useNavigate();
  const onChange = (event) => {
    setStore(event.target.value);
  };
  return (
    <div>
      <h1>This page is for Crowdy's Map</h1>
      <form>
        <input value={store} onChange={onChange} type="text" placeholder="type any store"></input>
        <button
          onClick={() => {
            navigate("/" + store);
          }}
        >
          {" "}
          Move to page
        </button>
      </form>
    </div>
  );
};

export default Home;
