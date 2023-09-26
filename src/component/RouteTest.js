import React from "react";
import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <div>
      <Link to={"/"}>Comeback Home</Link>
      <br />
      <Link to={"/diary"}>Go to Diary</Link>
      <br />
      <Link to={"/edit"}>Go to Edit</Link>
      <br />
      <Link to={"/new"}>Go to New</Link>
    </div>
  );
};

export default RouteTest;
