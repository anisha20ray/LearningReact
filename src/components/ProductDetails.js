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
       <div className="max-w-5xl mx-auto mt-10">
        <div className="border border-gray-600 rounded-sm p-6">
           <img className="w-32" src={image}/>
            <h1 className="font-bold text-xl">{title}</h1>
            <p className="font-bold text-gray-700">{rating?.rate} ratings</p>
            <p className="font-bold text-gray-700">Price: $ {price}</p> 
            <p>{description}</p>
        </div> 
       </div> 
    )
};
export default ProductDetails;