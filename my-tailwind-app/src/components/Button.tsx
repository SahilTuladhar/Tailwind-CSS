import { ButtonProps } from "../types"

const Button = ({label , iconURL} : ButtonProps) => {
   return(
    <>
    <button className='bg-violet-400 p-4 mt-5 w-[30%] flex justify-center items-start shadow-xl rounded-xl gap-8 font-montserrat text-[20px] hover:border-violet-900 border-[3px] transition-all duration-500'>
       <p className="max-md:hidden"> {label}</p>
    <img src={iconURL} alt="icon" 
    className="w-7 h-7 bg-"/>
    </button>
    
    </>
   )
}

export default Button