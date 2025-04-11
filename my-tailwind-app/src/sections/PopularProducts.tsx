import { products } from "../constants/constants"
import ProductsCard from "../components/ProductsCard"

const PopularProducts = () => {
    return(
       <section id='products'
       className="max-container p-2 max-sm:mt-12 transform animate-slide-in-bttransition-all duration-1000">
         <div className=" flex flex-col justify-start items-center text-center p-1">
          <h2 className="text-[50px] font-montserrat font-semibold">Our <span className="text-coral-red"> Popular</span> Products</h2>
          <p className="text-xl z-10 p-2 font-semibold sm:w-[80%] mt-5 mb-5 font-montserrat text-slate-400">Experience top-notch quality and style with our sought after selections. Discover a world of comfort,desgin and value</p>
         </div> 
         <div className="  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 p-2 mt-2 gap-1 place-items-center ">
            {
               
               products.map((product) => (
                  <ProductsCard imgURL = {product.imgURL} price={product.price} name={product.name}/>
               ))
            }
         </div>
        
       </section>
    )
   }
   
   export default PopularProducts