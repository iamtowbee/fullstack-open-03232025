import React from "react";

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises:{" "}
      {parts.reduce((sum, parts) => sum + parts.exercises, 0)}
    </p>
  );
};

export default Total;