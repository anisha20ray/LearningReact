import {productList} from "../utils/Constant";//named import
import Product from "./Product";//default import
const ProductCard = () => {
  return (
    <div className="product_card">
      {
      productList.map((product) => {
        return(
      <Product  key={product.id} product={product}/>
    )
    })
    }
        </div>
        )
        }

export default ProductCard;//default export