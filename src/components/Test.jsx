import React from "react";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const doSomething = () => {
    console.log("ho");
    fetch("http://localhost:8000/tap");
  };
  return (
    <div
      onClick={() => {
        doSomething();
      }}
    >
      Test
    </div>
  );
};

export default Test;
