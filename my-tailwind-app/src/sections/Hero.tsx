import Button from "../components/Button"
import {arrowRight} from '../assets/icons'
import { statistics, shoes} from "../constants/constants"
import { bigShoe1 , headerLogo} from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {motion} from 'framer-motion'






const Hero = () => {

   const leftref= useRef(null)
   const rightref = useRef(null)
   const isLeftInView = useInView(leftref , {
      once : true,
      amount : 0.2,
   })
   const isRightInView = useInView(rightref , {
      once:true,
      amount:0.2,
   })
   const [bigImg , setBigImg] = useState(bigShoe1)

    return(
       <section id="home" 
       className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container">
          <div ref={leftref} className={`relative flex flex-col justify-center items-start xl:w-2/5 w-full max-xl:padding-x pt-28 p-5 gap-10 left-24  z-10 transition-all duration-1000 
            ${isLeftInView ? "animate-slide-in-lr": "opacity-0" }`}>
            <p className="text-[26px] text-orange-600 mb-5" >Our Summer Collection</p>
            <h1 className="font-montserrat font-bold text-8xl bg-white w-full z-10 p-5 rounded-xl shadow-xl">
               <span className=" w-full">The New Arrival</span>
               <br />
               <div className="group flex items-center">
               <span className="text-orange-500 hover:text-violet-500 transition-all duration-1000">Nike </span>
               
                   <img src={headerLogo} alt="headerlogo" className="
                   absolute
                   opacity-0
                   group-hover:translate-x-[240px]
                   group-hover:opacity-100
                   transition-all
                   duration-1000
                   ease-in-out
                   
                   " />
               <span className="group-hover:translate-x-40 transition-all duration-1000" >
                  Shoes
               </span>
               </div>
            </h1>

            <p className="text-xl z-10 p-2 font-semibold sm:w-[80%] mt-5 mb-5 font-montserrat text-slate-400" >Discover Stylish Nike arrivals, quality comfort and innovation for your active life</p>
            
            <Button label="Shop now" className = "bg-violet-400" iconURL={arrowRight} 
        />
         
         <div className="w-[80%] h-36 mt-9 sm:mb-10 p-4 flex gap-16 justify-evenly flex-wrap  shadow-xl rounded-[20px] ">
            {
               statistics.map((stat,index) => (
                  <div  className=" flex flex-col p-2 w-[12%] h-26 justify-center items-center h-90 hover:w-[18%] hover:h-28 transition-all duration-1000">
                   <p className="text-4xl font-bold">{stat.value}</p>
                   <p className="small-text">{stat.label}</p>
                  </div>
               ))
            }
            
          </div >

          </div>


  
  

          <motion.div  
          initial = {{opacity : 0 , x : 100}}
          whileInView  = {{opacity : 1 , x : 0}}
          transition={{duration : 1 , ease : 'easeInOut'}}
         viewport={{once:true , amount: 0.2}}
          className="m-0 relative flex justify-center items-center xl:min-h-screen flex-1 bg-primary bg-hero bg-cover bg-center ">
  <img 
    src={bigImg} 
    alt="shoe1" 
    className="object-contain relative z-10  w-full h-[800px]" />
     
     <div className=" p-2 flex absolute -bottom-20 w-[70%] h-[20%] justify-center items-center gap-6">
      {shoes.map((shoe) => (
         <div> 
            <ShoeCard 
            imgURL={shoe}
            changeBigShoeImage ={(bigShowURL) =>setBigImg(bigShowURL)}
            bigShowImg = {bigImg}
            />
         </div>
      ))} 
     </div>

</motion.div>


          
       </section>
    )
   }
   
   export default Hero