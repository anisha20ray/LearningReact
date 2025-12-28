
import React from "react";
import ReactDOM from "react-dom/client";
//named import
import {Navbar} from "./components/Navbar";
//default import
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
      <div>
        <Navbar />
        <ProductCard/>
      </div>
  );
}   
const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(<App />);