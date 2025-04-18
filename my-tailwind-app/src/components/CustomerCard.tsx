
import { star } from "../assets/icons"

type CustomerCardProps = {
    imgURL : string;
    customerName : string
    rating: number
    feedback:string
}

const CustomerCard = ({imgURL , customerName , rating , feedback} : CustomerCardProps) => {

    const ratingStars =[]

    for(let i = 0 ; i < rating; i++){
       ratingStars.push(i)
    }

 return(
    <div className="flex flex-col max-sm:w-[70%] justify-center items-center border max-w-[45%] rounded-md shadow-md p-10 space-y-5">
        <img src={imgURL} className="w-[200px] h-[200px] rounded-full object-contain" alt="" />
        <p className="info-text w-[50%]">{feedback}</p>
        <div className="flex gap-5">
        {
          ratingStars.map((x) => <img src={star}/>)
        }
        </div>
        <h1 className="font-bold text-xl">{customerName}</h1>
    </div>
 )
}

export default CustomerCard