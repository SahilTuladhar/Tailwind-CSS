import { ProductCardProps } from "../types"
import {star} from '../assets/icons'
 
const ProductsCard = ({imgURL , price , name} : ProductCardProps) => {

    return(

             <div className=" shadow-xl rounded-xl p-3 max-lg:mb-5 lg:w-[75%] flex flex-1 max-m:w-full flex-col w-72 space-y-3 hover:scale-110 transition-all duration-1000">
              <img src={imgURL} alt="" 
              className="w-full h-full mb-5 mt-3"/>
                    <div className="flex justify-start gap-4"> 
                    <img src={star} alt="" className="w-[20px] h-[20px] object-cover"/>
                    <p className="small-text">4.5</p>
                    </div>
                    <p className="text-lg font-montserrat"> {name}</p>
                    <p className="text-md text-slate-600">{price}</p>
                </div>
    )

}

export default ProductsCard