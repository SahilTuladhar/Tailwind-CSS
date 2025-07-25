import { CustomerReviews , Footer , Hero , Navbar, PopularProducts , Services , SpecialOffer , Subscribe , SuperQuality } from '../files';


const HomePage =  () => {  

    return(
        <main className='relative '>
      <Navbar/>
      <section className='xl: padding-l wide:padding-r padding-b max-w-full'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>

      <section className='padding flex justify-center items-center'>
        <SuperQuality/>
      </section>

      <section className='padding-x py-10'>
        <Services/>
      </section>

      <section className='padding'>
        <SpecialOffer/>
      </section>
      
      <section className='bg-pale-blue padding'>
      <CustomerReviews/>
      </section>

      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>

      <section className='bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
    )
}

export default HomePage