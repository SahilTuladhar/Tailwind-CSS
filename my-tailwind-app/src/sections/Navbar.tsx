import { navLinks } from "../constants/constants"
import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"

const Navbar = () => {
 return(
    <header className="border-black border-2 padding-x py-5 w-full z-10 absolute ">
      <nav className="flex justify-between items-center max-container w-full">
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
                  <li key={item.label}>{item.label}</li>
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