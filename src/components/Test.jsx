import React from "react";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const url = "https://testdevapi.kdev.co.in";
  //   const url = "http://localhost:8500";
  const doSomething = () => {
    console.log("ho");
    fetch(url);
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
