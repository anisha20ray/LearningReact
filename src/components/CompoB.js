import React from "react";
import CompoC from "./CompoC";
const CompoB = () => {
  return (
  <div>
    <h1>Component B</h1>
    <CompoC/>
    </div>
    );
};
export default CompoB;

// we can pass data from CompoA to CompoC via props drilling using CompoB as a middleman
// props drilling-> passing props from one component to another to reach the desired component
//props drilling is not a good approach when there are many nested components because it makes the code hard to maintain
// to avoid props drilling we use context api or state management libraries like redux, mobx etc
// but for now props drilling is fine for small applications
// also we can use useContext hook to avoid props drilling
//props always flow from parent to child components not from child to parent