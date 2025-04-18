
import { reviews } from "../constants/constants"
import CustomerCard from "../components/CustomerCard"

const CustomerReviews = () => {
 return(
    <section className="max-container flex flex-col text-center space-y-5 justify-center items-center">

      <h3 className="font-montserrat text-4xl font-bold text-center">
         What Our 
         <span className="text-coral-red"> Customers </span>
         Are Saying?
      </h3>
      <p className="info-text max-w-[40%] ">Hear genuine stories from out satisfied customers about their exceptional experience with us</p>
      <div className="flex flex-col gap-10 sm:flex-row justify-center items-center">
      {
         reviews.map((review) => (
            <CustomerCard key={review.customerName} {...review}/>
         ))
      }
      </div>

    </section>
 )
}

export default CustomerReviews