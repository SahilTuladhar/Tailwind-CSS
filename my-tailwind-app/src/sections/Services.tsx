import { services } from "../constants/constants"
import ServiceCard from "../components/ServiceCard"
import {motion} from 'framer-motion'

const Services = () => {
    return(
      <motion.div 
      initial = {{opacity: 0 , y : 100}}
      whileInView={{opacity :100 , y: 0}}
      transition={{duration : 0.75, ease : 'easeIn'}}
      viewport={{once : true , amount : 0.2}}
      className="max-container flex flex-col justify-center items-center  gap-9 p-4 -mt-24">
          <h1 className=" p-5 text-center capitalize font-montserrat font-semibold text-8xl  z-50">Our
                  <span className="text-coral-red"> Services </span>
                  </h1>
           <div className="flex items-center justify-between gap-9 ">
           {services.map((service) => (
            <ServiceCard  key={service.label}
            {...service}
            />
         ))}
           </div>
      </motion.div>
       
    )
   }
   
   export default Services