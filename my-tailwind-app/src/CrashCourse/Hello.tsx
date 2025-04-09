import { useEffect } from "react";

const Hello = () => {

   useEffect(() => {
      // Wait until the component mounts
      const toggleDark = document.getElementById('toggleDark');
  
      // Ensure the element exists before adding the event listener
      if (toggleDark) {
        const handleDarkModeToggle = () => {
          if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
          } else {
            document.documentElement.classList.add('dark');
          }
          alert("Dark mode toggled!");
        };
  
        toggleDark.addEventListener('click', handleDarkModeToggle);
  
        // Cleanup the event listener when the component unmounts
        return () => {
          toggleDark.removeEventListener('click', handleDarkModeToggle);
        };
      }
    }, []);
  

 return(
    <>
        <h1 className='text-center text-blue-800'>Hello World</h1>

         <div className="w-full h-20 bg-violet-200 rounded-md my-4 pd-2 flex justify-center items-center border-violet-600 border-4">
            <p className="text-center font-mono font-extrabold text-[15px]">This is the div</p>
           
         </div>

         <div className="fixed h-16 w-16 bg-red-600 top-0 left-0 z-50"></div>
         
         <div className="md:flex w-100 m-10 justify-evenly md:columns-gap-4" >

<div className="h-12 w-12 sm:w-4 md:w-8 bg-blue-500 rounded-full"></div>
<div className="h-12 w-12 sm:w-4 md:w-8 bg-blue-500 rounded-full"></div>
<div className="h-12 w-12 sm:w-4 md:w-8 bg-blue-500 rounded-full"></div>
<div className="h-12 w-12 sm:w-4 md:w-8 bg-blue-500 rounded-full"></div>

</div>

<div className="grid grid-cols-3 gap-2 mt-3">
   <div className="h-11 w-100 rounded-full bg-violet-600"></div>
   <div className="h-11 w-100 rounded-full bg-violet-600"></div>
   <div className="h-11 w-100 rounded-full bg-violet-600"></div>
   <div className="h-11 w-100 rounded-full bg-violet-600"></div>
   <div className="h-11 w-100 rounded-full bg-violet-600"></div>
   <div className="h-11 w-100 rounded-full bg-violet-600"></div>
</div>

{/* <div className="md:block hidden"> 
 <p>I will appear for resolution greater than x</p>
</div> */}

<div className="text-center flex flex-col justify-center items-center gap-y-2  mt-5 md:flex-row md:gap-x-2" >
   <p>
      I will appear for resolution less than x
   </p>

   <button className="buttonStyle">Click Me</button>
</div>

<ul className="mt-5 space-y-2 text-center flex flex-col items-center">
   <li className="p-2 w-[90%] bg-white rounded-lg first:bg-indigo-400 hover:opacity-80 hover:border-violet-800 border-2 transition-all duration-300 ">Item 1</li>
   <li className="p-2 w-[90%] bg-white rounded-lg first:bg-indigo-400 odd:bg-green-400 even:bg-red-300 hover:opacity-80 hover:border-violet-800 border-2 transition-all duration-300" >Item 2</li>
   <li className="p-2 w-[90%] bg-white rounded-lg first:bg-indigo-400 odd:bg-green-400 even:bg-red-300 hover:opacity-80 hover:border-violet-800 border-2 transition-all duration-300" >Item 3</li>
   <li className="p-2 w-[90%] bg-white rounded-lg first:bg-indigo-400 odd:bg-green-400 even:bg-red-300 hover:opacity-80 hover:border-violet-800 border-2 transition-all duration-300" >Item 4</li>
   <li className="p-2 w-[90%] bg-white rounded-lg first:bg-indigo-400 odd:bg-green-400 even:bg-red-300 hover:opacity-80 hover:border-violet-800 border-2 transition-all duration-300" >Item 5</li>
   <li className="p-2 w-[90%] bg-white rounded-lg first:bg-indigo-400 odd:bg-green-400 even:bg-red-300 hover:opacity-80 hover:border-violet-800 border-2 transition-all duration-300" >Item 6</li>
   
</ul>

<div className="m-10 rounded-lg p-5 space-y-3 shadow-xl ring-1 ring-slate-900/5 dark:bg-gray-800s">
   <h3>
     This is the text element
   </h3>

   <p>This is an even longer text element</p>

   <button id="ToggleDark" 
   // className="bg-violet-400 rounded-lg p-2 w-[30%]"
   className="buttonStyle"
   onClick={() => document.body.classList.toggle('dark')}
   >Toggle the Mode</button>
</div>

<div>
   <p className= " text-center p-4 text-2xl text-chestnut">This test has Chestnet Color</p>
</div>



    </>
 )
}

export default Hello