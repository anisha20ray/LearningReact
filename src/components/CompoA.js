import React,{useContext} from "react";
import CompoB from "./CompoB";
import UserContext from "../utils/UserContext";

const CompoA = () => {
    const user=useContext(UserContext);
  return (
  <div className="max-w-5xl m-auto">
    <h1>{user.name}</h1>
    <CompoB/>
    </div>
    );
};
export default CompoA;