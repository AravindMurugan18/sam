function Contact(){
      const config={
            email:'aravindanandh58@gmail.com',
            phone:'7200512030'
      }
    return(
          <section className='flex flex-col  bg-primary px-5 py-32' id="contact">
               <div className='flex flex-col items-center text-white'>
            
                     <h1 className='text-4xl border-b-4 border-[#232561] mb-5 w-[140px] font-bold'>Contact</h1>
                     <p className='pb-5 ' >If you want to discuss more in details, please contact me </p>
                     <p className="py-2"><span className="font-bold">Email :</span>{config.email}</p>
                     <p className="py-2"><span className="font-bold">Phone no :</span>{config.phone}</p>
                     

                </div>
     
               
               

          </section>
    )
}
export default Contact;