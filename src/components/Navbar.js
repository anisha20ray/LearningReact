import { useState,useEffect } from "react";
import {Link} from "react-router-dom";//do not allow full page reload
//named export
export const Navbar = () => {
  //let btnName="Light";
  const [btnName, setBtnName] =useState("Light");
  //case1:[]->empty array dependency means it will run only once after initial render
  //case2:[btnName]->it will run after every render when btnName changes
  //case3: no dependency array -> it will run after every render of navbar component
  useEffect(() => {
  }, []);
  return (
 <div className="navbar" style={{
  "display":"flex",
  "justifyContent":"space-between",
  "borderBottom":"1px solid black",
  "backgroundColor":"lightblue",
}}>
    <h1>AJIO</h1>
 <ul className="nav-items">
    <li><Link to="/men">MEN</Link></li>
    <li><Link to="/women">WOMEN</Link></li>
    <li><Link to="/kids">KIDS</Link></li>
    <li><Link to="/home-living">HOME & LIVING</Link></li>
    <li><Link to="/about">ABOUT</Link></li> 
    <li><Link to="/cart">CART</Link></li>
    <button onClick={()=>{
      btnName==="Light"?setBtnName("Dark"):setBtnName("Light");
 }}>
      {btnName}
    </button>
 </ul>
 </div>
  );
};
