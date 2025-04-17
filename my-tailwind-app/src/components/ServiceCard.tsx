import {motion} from 'framer-motion'

type ServiceCardType = {
    imgURL : string
    label : string
    subtext: string
    addText : string
}


const ServiceCard = ({imgURL , label , subtext , addText} : ServiceCardType) => {

    return(
     <div 
   
     className="w-full sm:w-[350px] sm:w-min-[350px] px-10 py-14 rounded-[20px] shadow-3xl flex flex-col justify-center items-start gap-5">
     <div className="w-[50px] h-[50px] group flex justify-center items-center rounded-full shadow-xl bg-coral-red hover:w-[150px] hover:justify-around transition-all duration-700">
        <img width={27} src={imgURL} alt="" className="
        group-hover:translate-x-8
        transition-all
        duration-700
        ease-in-out"/>
        <p className="
        absolute
        opacity-0
        -translate-x-7
        group-hover:-translate-x-4
        group-hover:opacity-100
        transition-all
        duration-700
        ease-in
        text-white-400
        font-semibold
        ">
            {addText}
        </p>
     </div>
     <div className="flex flex-col p-2 gap-5">
        <h1 className="text-2xl font-montserrat font-semibold">{label}</h1>
        <p className="text-md opacity-50">{subtext}</p>
     </div>
     </div>
    )

}

export default ServiceCard