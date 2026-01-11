 const Product=({product}) => {  
          console.log(product);
          const {image, title, price,rating} =product;
    return (
        <div className="flex flex-col items-center justify-center h-96 border border-gray-600 rounded-sm hover:shadow-lg hover:bg-gray-200 transition-shadow duration-300 p-4">
           <img className="w-32 h-40 object-contain" src={image}/>
            <h1>{title}</h1>
            <p>{rating?.rate} ratings</p>
            <p>Price: $ {price}</p> 
        </div> 
    )
        }
        export default Product;//default export

       export const HOF=(Product)=>{
            return (props)=>{
                return (
                <div>
                    <span className="absolute bg-indigo-700 text-white px-4 py-1 rounded-sm">Best Seller</span>
                    <Product {...props}/>
                </div>
                )
            }
        }
        //const HOFComponenet=HOF(Product); 
        //<Component product={product}/>
        //  //this HOF is a higher order function component