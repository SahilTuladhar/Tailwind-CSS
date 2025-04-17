import { ButtonProps } from "../types"

const Button = ({label , iconURL , className} : ButtonProps) => {
   return(
    <>
    <button className={`bg-violet-400 p-4 mt-5 w-[40%] flex justify-center items-start shadow-xl rounded-xl gap-8 font-montserrat text-[20px] hover:border-violet-900 border-[3px] hover:scale-105 stransition-all duration-500 ${className}`}>
       <p className="max-md:hidden"> {label}</p>
    {
      iconURL? <img src={iconURL} alt="icon" 
      className="w-7 h-7 bg-"/>: null
    }
    </button>
    
    </>
   )
}

export default Button