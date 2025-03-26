import React from "react";
import Part from "./Part";

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part name={part1.name} exercise={exercises[0]} />
      <Part name={part2.name} exercise={exercises[1]} />
      <Part name={part3.name} exercise={exercises[2]} />
    </div>
  );
};

export default Content;
