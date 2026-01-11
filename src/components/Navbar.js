import { useState,useEffect,useContext } from "react";
import {Link} from "react-router-dom";//do not allow full page reload
import UserContext from "../utils/UserContext";
//named export
export const Navbar = () => {
  //let btnName="Light";
  const [btnName, setBtnName] =useState("Light");

const user=useContext(UserContext);
  console.log("Navbar user:",user);

  //case1:[]->empty array dependency means it will run only once after initial render
  //case2:[btnName]->it will run after every render when btnName changes
  //case3: no dependency array -> it will run after every render of navbar component
  useEffect(() => {
  }, []);
  return (
 <div className="flex items-center justify-between p-4 bg-gray-100 shadow-lg">
    <h1 className="text-2xl font-bold">AJIO</h1>
 <ul className="flex space-x-4 items-center">
    <li><Link to="/men">MEN</Link></li>
    <li><Link to="/women">WOMEN</Link></li>
    <li><Link to="/kids">KIDS</Link></li>
    <li><Link to="/home-living">HOME & LIVING</Link></li>
    <li><Link to="/about">ABOUT</Link></li> 
    <li><Link to="/grocery">GROCERY</Link></li>
    <li>CART</li>
    <li>{user.name}</li>
    <button className="bg-purple-600 px-6 py-1 rounded-md text-white font-semibold"
    onClick={()=>{
      btnName==="Light"?setBtnName("Dark"):setBtnName("Light");
 }}>
      {btnName}
    </button>
 </ul>
 </div>
  );
};
