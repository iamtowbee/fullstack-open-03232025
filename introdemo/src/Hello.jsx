import React from "react";

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      Hello {props.name}, you are {props.age} years old.
    </div>
  );
};

export default Hello;
