import { a } from 'framer-motion/dist/types.d-B50aGbjN'
import {footerLogo} from '../assets/images'
import {socialMedia} from '../constants/constants'
import { footerLinks } from '../constants/constants'

const Footer = () => {
    return(
   <footer className="max-container -mt-[50px] ">
      <div className=" p-2 flex justify-around items-start flex-wrap , max-lg:flex-col gap-5">
     <div className='flex flex-col gap-6 max-w-[40%] p-2 '>
     <img src={footerLogo} alt=""
     height={46}
     width={150} className='' />
      <p className='text-white max-w-[100%]'>
         Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size in Store. Get Rewards
      </p>

      <div className='flex gap-2 justify-start items-center'>
     {
      socialMedia.map((icon) => (
         <div className='rounded-full bg-white w-[35px] h-[35px] flex justify-center items-center'>
            <img src={icon.src} alt={icon.alt} height={24} width={24} />
         </div>
      ))
     }
     </div>

     </div>

     <div className='flex  p-2 w-[50%] justify-start gap-24'>
         {
           footerLinks.map((section) => (
            <div className='flex flex-col  p-2 justify-start items-center gap-5' >
            
             <h1 className='text-white text-2xl font-bold'>{section.title}</h1>

             <ul className='space-y-3 flex flex-col items-center justify-evenly'>
               {
                  section.links.map((link) => (

                     <a href={link.link}>
                        <li className='text-sm text-slate-300'>{link.name}</li>
                     </a>
 
                  ))
               }
             </ul>


            </div>
           ))
         }
     </div>

     
      </div>
   </footer>   
 
  )
   }
   
   export default Footer