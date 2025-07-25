import {IParallax , Parallax , ParallaxLayer} from '@react-spring/parallax'
import OutletCard from '../components/OutletCard'
import { useState , useRef , useEffect } from 'react'
import { ourLocations } from '../constants/constants'


const Outlets = () => {
    
    const [activeSlide , setactiveSlide ] = useState(0)
    const parallaxRef = useRef<IParallax | null>(null)
    const stickyDivRef = useRef<HTMLDivElement | null>(null)
     
    //useEffect for selecting the active slide
    
    useEffect(() => {
      
      //access the parallax container
      const parallexContainer = parallaxRef.current?.container.current;
      if (!parallexContainer) return;
  
      let scrolltTimeout: NodeJS.Timeout| undefined;
  
      const handleScroll = () => {
        clearTimeout(scrolltTimeout)
        scrolltTimeout = setTimeout( () => {
  
          const scrollTop = parallexContainer.scrollTop
          const containerHeight = parallexContainer.clientHeight
          const currentSlide = Math.round(scrollTop / containerHeight);
        //   const currentSlide = Math.floor(scrollTop / containerHeight) - 1;
          
         if(currentSlide > 2){
            setactiveSlide(2)
         }else{
            setactiveSlide(currentSlide)
         }
          
        } , 100)
      }
  
      parallexContainer.addEventListener('scroll' , handleScroll)
  
      //initial call 
  
      handleScroll()
  
      // proper closing the event handler
  
      return () => {
        parallexContainer.removeEventListener('scroll' , handleScroll)
        clearTimeout(scrolltTimeout)
      }
  
    } , [])
    
  
    // function to scroll to an offset
  
    const scrollToOffset = (offset : number) => {
    if(parallaxRef.current){
      parallaxRef.current.scrollTo(offset)
    }
    }
  
    //useEffect to implement the snap scroll featureme
  
    useEffect(() => {
      const container = parallaxRef.current?.container.current
  
      if(!container) return; 
  
      let scrollTimeout : NodeJS.Timeout | undefined
  
      const handleSnapScroll = () => {
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
  
          const scrollPosition = container.scrollTop;
          const containerHeight = container.clientHeight;
          const slideIndex = Math.round(scrollPosition / containerHeight);
        //   const slideIndex = Math.floor(currentOffset) - 1;
          
        if (slideIndex > 2){
            scrollToOffset(2)
        }else{
            scrollToOffset(slideIndex )
        }
      
  
        } , 150)


        container.addEventListener('scroll' , handleSnapScroll)

        return () => {
          container.removeEventListener('scroll' , handleSnapScroll)
          clearTimeout(scrollTimeout)
        }
  
      }
  
    } , [])

    return(
       <>
        <div 
        className="max-container space-y-3 flex flex-col justify-center items-center h-full mb-20 ">
            <h1 className="p-5 text-8xl capitalize font-montserrat font-semibold">Our <span className="text-coral-red">Locations</span></h1>

            <div className='w-full h-[600px] overflow-hidden  relative '>
            <Parallax ref = {parallaxRef} pages={3} className='h-full w-full ' >
                <ParallaxLayer
                offset={0}
                speed={1.5}
                className='flex justify-center items-center w-full h-[60%] gap-5  '
                sticky={{start:0 , end:2}}
                >
                  {
                    ourLocations.map((loc , index) => (
                       <OutletCard 
                       locationName={loc.location} 
                       image={loc.src} 
                       alt={loc.alt} 
                       index = {index}
                       description={loc.desc}
                       city={loc.city}
                       email= {loc.email}
                       contact={loc.contact}
                       time={loc.time}
                       isActive = {index === activeSlide}
                       
                       />
                    ))
                  }
                    
                </ParallaxLayer>

                {
                    ourLocations.map((loc , index) => (
                        <ParallaxLayer 
                        key={index}
                        offset={loc.offset}
                        speed={1.5}
                        className='h-screen'
                        />
                    ))
                }
            </Parallax>
            </div>

        </div>
       </>
    )
}

export default Outlets