import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-container">
      <h1>Something went wrong</h1>
      <h2>{err.status + " : " + err.statusText}</h2>
      <h3>{"ERROR - " + err.error.message}</h3>
     
    </div>
  );
};

export default Error;
