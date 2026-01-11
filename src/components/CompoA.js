import React from "react";
import CompoB from "./CompoB";
const CompoA = () => {
    const user={
        name:"Anisha Ray",
        email:"anisha@gmail.com"
    }
  return (
  <div className="max-w-5xl m-auto">
    <h1>Component A</h1>
    <CompoB user={user}/>
    </div>
    );
};
export default CompoA;