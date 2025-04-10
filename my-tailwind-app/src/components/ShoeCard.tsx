import { statistics, shoes} from "../constants/constants"

import { ShoeCardProps } from "../types"

const ShoeCard = ({imgURL , changeBigShoeImage , bigShowImg} : ShoeCardProps) => {
    
    const handleClick = () => {
        if (bigShowImg !== imgURL.bigShoe){
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    
    return(
        <div className={`border-[3px] rounded-xl shadow-xl 
              ${bigShowImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
        cursor-pointer max-sm:flex-1
        transition-all
        duration-700
        `      
         }
         onClick={handleClick}
         >
            <div className="flex justify-center items-start bg-center bg-card bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img src={imgURL.thumbnail} alt="shoe colelction" 
                height={127}
                width={103}
                className="object-contain h-[157px] w-[130px]"/>
            </div>
        </div>
    )
}

export default ShoeCard

//       
