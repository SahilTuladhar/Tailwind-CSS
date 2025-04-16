import {arrowRight} from '../assets/icons'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
import {motion} from 'framer-motion'

const SuperQuality= () => {
    return(
      <section id="about-us" className='flex items-center justify-center max-container'>
         <div className="flex max-lg:flex-col max-lg:justify-center justify-between items-center w-[85%] border p-2 ">
               <motion.div 
               initial={{opacity:0 , x : -100}}
               whileInView={{opacity: 1 , x : 0}}
               transition={{duration : 1 , ease : 'easeInOut'}}
               viewport={{once : true , amount : 0.2}}
               className="flex-1 justify-center items-center space-y-7 leading-6 ">
                  <h1 className=" p-5 shadow-xl rounded-xl capitalize font-montserrat font-semibold text-8xl w-[100%] z-50">We provide you 
                     <span className="text-coral-red"> super quality </span>
                     shoes</h1>
                     <p className='max-sm:max-w-sm text-2xl p-3 font-semibold border sm:w-[90%] mt-5 mb-5 font-montserrat text-slate-400'> Ensuring Premium comfort and style, our meticulously creafted footwear is designed to elvate you experience, providing you with unmatched quality, innovation and a touch of elegance</p>
                     <p className='max-sm:max-w-sm text-2xl z-10 p-2 font-semibold sm:w-[90%] mt-5 mb-5 font-montserrat text-slate-400'>Our dedictation to detail and excellence ensures your satisfaction</p>
                     <Button label="More Details" iconURL={arrowRight}/>
               </motion.div>
               <motion.div 
               initial={{opacity:0 , x : 100}}
               whileInView={{opacity: 1 , x : 0}}
               transition={{duration : 1 , ease : 'easeInOut'}}
               viewport={{once : true , amount : 0.2}}
               className="flex-1 flex justify-center items-center border">
                  <img src={shoe8} alt="shoe8" className='w-[1200px] h-[1000px] object-contain hover:scale-105 transition-all duration-1000' />
               </motion.div>
         </div>

      </section>
    )
   }
   
   export default SuperQuality