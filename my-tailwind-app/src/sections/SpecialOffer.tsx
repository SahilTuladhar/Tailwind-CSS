import {arrowRight} from '../assets/icons'
import Button from '../components/Button'
import {motion} from 'framer-motion'
import { offer } from '../assets/images'

const SpecialOffer = () => {
    return(
      <section id="about-us" className='flex items-center justify-center max-container '>
      <div className="flex flex-col justify-center items-center w-[85%] gap-12">
            <motion.div 
            initial={{opacity:0 , x : -100}}
            whileInView={{opacity: 1 , x : 0}}
            transition={{duration : 1 , ease : 'easeInOut'}}
            viewport={{once : true , amount : 0.2}}
            className="flex-1 flex  flex-col justify-center items-center space-y-7 leading-6 ">
               <h1 className=" p-5 text-center capitalize font-montserrat font-semibold text-8xl  z-50">Special
                  <span className="text-coral-red"> Offer </span>
                  </h1>
                  <p className='max-sm:max-w-sm text-2xl p-3 font-semibold  sm:w-[90%] mt-5 mb-5 font-montserrat text-slate-400'> Ensuring Premium comfort and style, our meticulously creafted footwear is designed to elvate you experience, providing you with unmatched quality, innovation and a touch of elegance</p>
                  <p className='max-sm:max-w-sm text-2xl z-10 p-2 font-semibold sm:w-[90%] mt-5 mb-5 font-montserrat text-slate-400'>Our dedictation to detail and excellence ensures your satisfaction</p>
                  <div className='flex w-full items-center justify-center gap-5'>
                  <Button label="More Details" className = 'w-[20%]' iconURL={arrowRight}/>
                  <Button label="Learn More"  className = 'w-[20%] bg-transparent border-2 border-violet-500'/>
                  </div>
                  
            </motion.div>
            <motion.div 
            initial={{opacity:0 , x : -100}}
            whileInView={{opacity: 1 , x : 0}}
            transition={{duration : 1 , ease : 'easeInOut'}}
            viewport={{once : true , amount : 0.2}}
            className="flex-1 flex justify-center items-center ">
               <img src={offer} alt="shoe8" className='w-[1200px] h-[1000px] object-contain ' />
            </motion.div>
      </div>

   </section>
    )
   }
   
   export default SpecialOffer