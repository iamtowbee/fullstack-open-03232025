import React from "react";

const Total = ({ exercises }) => {
  return <p>Number of exercises {exercises.reduce((a, b) => a + b)}</p>;
};

export default Total;
