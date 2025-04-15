import { products } from "../constants/constants"
import { motion } from "framer-motion"
import ProductsCard from "../components/ProductsCard"

const PopularProducts = () => {
    return(

      <motion.section 
      id = 'popularProducts'
      initial ={{opacity: 0 , y: 100}}
      whileInView={{opacity : 1 , y : 0}}
      transition={{duration : 1 , ease: 'easeInOut'}}
      viewport={{once:false , amount: 0.2}}
      className="max-container p-2 max-sm:mt-12"
      >
         
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
     
      </motion.section>
      
    )
   }
   
   export default PopularProducts