 const Product=({product}) => {  
          console.log(product);
          const {image, title, price,rating} =product;
    return (
        <div className="flex flex-col items-center justify-center h-96 border border-gray-600 rounded-md hover:shadow-lg hover:bg-gray-200 transition-shadow duration-300 p-4">
           <img className="w-32 h-44 object-contain" src={image}/>
            <h1>{title}</h1>
            <p>{rating?.rate} ratings</p>
            <p>Price: $ {price}</p> 
        </div> 
    )
        }
        export default Product;//default export