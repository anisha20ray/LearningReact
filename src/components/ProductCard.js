import { useState, useEffect } from "react";
//import {productList} from "../utils/Constant";//named import
import Product from "./Product";//default import
import Skeleton from"./Skeleton";//default import
import {Link} from "react-router-dom";//do not allow full page reload
const ProductCard = () => {
  //local state variable
  //const array=useState(productList);
  //const [listOfProduct,setListOfProduct ]=array;
  //console.log("array ->p="array);
  const [listOfProduct, setListOfProduct] = useState([]);//array destructuring
    const [filterProduct, setFilterProduct] = useState([]);
  const[searchText,setSearchText]=useState("");
  useEffect(() => {
    fetchData();
    const timer=setInterval(() => {
      console.log("fn component interval");
    }, 1000);

  return () => {
      //cleanup function
     clearInterval(timer); 
    }
  }, []);


  const fetchData = async () => {
      const data = await fetch('https://fakestoreapi.com/products');
      const resData = await data.json();
      setListOfProduct(resData);
      setFilterProduct(resData);
  };
  
  //conditional rendering
//if(listOfProduct.length===0){
 // return <Skeleton/>}
   return listOfProduct.length===0 ? <Skeleton/> : (
    <div>
      <div className="mt-10 flex mx-5 space-x-10">
       <div>
         <input className="border border-gray-7 p-2 rounded-sm" type="text"placeholder="Search Product" onChange={(e)=>setSearchText(e.target.value)} value={searchText}/>
        <button onClick={()=>{
          const filteredData=listOfProduct.filter((product)=>{
            return product.title.toLowerCase().includes(searchText.toLowerCase());
          })
          setFilterProduct(filteredData);
        }} className="bg-purple-600 px-6 py-2 rounded-sm text-white font-semibold">Search</button>
        </div>
        <button className="bg-purple-600 px-6 py-2 rounded-sm text-white font-semibold" 
      onClick={() => {
       const filteredProduct=listOfProduct.filter(product => product.rating.rate>=4.0);
        setListOfProduct(filteredProduct);
        }}>Top rated product</button>  
      </div>
      
        
    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 m-10">
      {
     filterProduct.map((product) => {
        return(
      <Link  key={product.id} to={`/product/${product.id}`}><Product product={product}/></Link>
    );
    })
    }
     </div>
        </div>
        )
      }

export default ProductCard;//default export