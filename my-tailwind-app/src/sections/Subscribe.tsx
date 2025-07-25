import {motion} from 'framer-motion'

const Subscribe = () => {
    return(
       <motion.div 
       initial = {{opacity : 0 , y:100}}
       whileInView={{opacity : 1 , y:0}}
       viewport={{amount:0.2 , once:true}}
       transition={{duration:1 , ease:'easeIn'}}
       className="max-container flex max-lg:flex-col  p-4 justify-center items-center gap-12">
         <h1 className="text-4xl lg:w-[30%] max-lg:w-full max-lg:text-center font-semibold font-montserrat">Sign Up For <span className="text-coral-red">Updates</span> & Newsletter</h1>
          <div className="shadow-xl p-3 rounded-full ring-1 max-lg:w-full ring-slate-200 flex justify-center items-center w-[40%] h-[90px]">
            <input type="text" 
            placeholder="subscribe@nike.com"
            className="input"/>
             <div>
            <button className="bg-violet-400 p-3 w-[100%] mr-[55px] rounded-full">Sign up </button>
          </div>
          </div>
         
         
       </motion.div>
    )
   }
   
   export default Subscribe