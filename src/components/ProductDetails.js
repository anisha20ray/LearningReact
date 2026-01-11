import { useState,useEffect } from "react";   
import Skeleton from"./Skeleton";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../Hook/useGetSingleProduct";
 const ProductDetails=()=>{
    const {productId}=useParams();
    useGetSingleProduct(productId);
    const singleProduct=useGetSingleProduct(productId); 
    
   if(singleProduct===null){
        return <Skeleton/>
    }
   const{image,title,description,price,rating}=singleProduct;

    return (
       <div className="product">
           <img className="product_img" src={image}/>
            <h1>{title}</h1>
            <p>{rating?.rate} ratings</p>
            <p>Price: $ {price}</p> 
            <p>{description}</p>
        </div>  
    )
};
export default ProductDetails;