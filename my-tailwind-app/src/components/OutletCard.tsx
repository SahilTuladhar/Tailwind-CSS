import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faClock, faContactBook, faEnvelope, faEnvelopeCircleCheck, faPhone, faTimeline } from '@fortawesome/free-solid-svg-icons'; // Example icon
import { time } from 'console';
import { useRef, useState , useEffect } from 'react';
import { IParallax } from '@react-spring/parallax';
import { useSpring, animated } from '@react-spring/web';

interface OutletCardProps {
    locationName : string,
    description : string,
    image : string,
    alt : string,
    index: number,
    city: string,
    email: string,
    contact: string,
    time: string
    isActive: boolean
 

}

const OutletCard = ( {locationName , time , image , alt , city , email , contact , isActive} : OutletCardProps) => {

  const props = useSpring( {
    opacity : isActive ? 1 : 0,
    scale : isActive ? 1 : 0.9,
    config : {tension : 200 , friction : 20}
  }
)

 

 return(
   <animated.div 
   className="border flex gap-3 rounded-2xl w-[55%] h-[100%] shadow-xl"
   style={{ 
    ...props,
    position: 'absolute',
    margin : 'auto',
    backgroundColor: 'whitesmoke'
   } as any}
  >

    <div className="flex p-10 flex-col w-[75%] h-full items-start justify-start gap-4 mt-12">
    <h1 className="text-4xl">{locationName}</h1>
    <h2 className="text-blue-700">{city}</h2>
    <div className='flex flex-col gap-6'>
    <div className='flex gap-4  '>
    <FontAwesomeIcon icon={faEnvelope} className='text-[23px]' style={{color: "#c9c8cb",}} />
    <p className='font-montserrat'>{email}</p>
    </div>
    <div className='flex gap-4  '>
    <FontAwesomeIcon icon={faPhone} className='text-[23px]' style={{color: "#c9c8cb",}} />
    <p className='font-montserrat'>{contact}</p>
    </div>
    <div className='flex gap-4  '>
    <FontAwesomeIcon icon={faClock} className='text-[23px]' style={{color: "#c9c8cb",}} />
    <p className='font-montserrat'>{time}</p>
    </div>
   
    
    </div>
   
    
    </div>

    <div className="border border-red-200 w-full h-full">
    <img src={image} className='w-full h-full object-cover rounded-lg shadow-lg' alt={alt} />
    </div>
     
   
     

   </animated.div>
 )
}

export default OutletCard