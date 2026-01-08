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
      <div style={{marginTop:"10px"}}>
        <input type="text"placeholder="Search Product" onChange={(e)=>setSearchText(e.target.value)} value={searchText}/>
        <button onClick={()=>{
          const filteredData=listOfProduct.filter((product)=>{
            return product.title.toLowerCase().includes(searchText.toLowerCase());
          })
          setFilterProduct(filteredData);
        }}>Search</button>
      </div>
      <button onClick={() => {
      
       const filteredProduct=listOfProduct.filter(product => product.rating.rate>=4.0);
        setListOfProduct(filteredProduct);
        }} style={{marginTop:"10px"}}>Top rated product</button>  
    <div className="product_card">
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