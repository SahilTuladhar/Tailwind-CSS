import { navLinks } from "../constants/constants"
import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"

const Navbar = () => {
 return(
    <header className="padding-x py-5 w-full z-10 absolute">
      <nav className="flex justify-between items-center max-container w-full ">
         <a href="/">
          <img src={headerLogo} 
          alt="Logo" 
          width={140}
          height={29}/>
         </a>
         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
           {
            navLinks.map((item) => (
               <a href={item.href} 
               className="font-montserrat leading-normal text-lg text-slate-gray"
               >  
               <div className="group block">
               <li key={item.label}>{item.label}
                  <hr className="border-t-2 border-purple-900 mt-2 -top-10 opacity-0 relative group-hover:translate-y-9 group-hover:opacity-85 transition-all duration-700 ease-in-out" />
                  </li>
               </div>
                  
               </a>
            ))
           }
         </ul>
         <div className='lg:hidden block'>
            <img src={hamburger} alt="drop down icon" height={25} width={25}  />
         </div>

      </nav>
    </header>
 )
}

export default Navbar