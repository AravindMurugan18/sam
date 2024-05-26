import AboutImg from'../assets/about.png';
function About(){
     const config={
          line1:'Hi, My name is Aravind M. I am Full stack developer.I built beautiful website with React.js and Tailwind CSS',
          line2:'I am proficient in Front-end skills like HTML,CSS,JavaScript,React.js and many more.',
          line3:'In Back-end I Know Node.js,Java,SpringBoot,Hibernate'
     }
    return(
          <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
               <div className='md:w-1/2 py-5'>
                <img  src={ AboutImg}/>
               </div>
               <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                     <h1 className='text-4xl  border-b-4 border-[#6367d2] mb-5 w-[170px] font-bold'>About Me</h1>
                     <p className='pb-5' > {config.line1}</p>
                     <p className='pb-5'>{config.line2}</p>
                     <p className='pb-10'>{config.line3}</p>
                     
                </div>
               
               </div>

          </section>
    )
}
export default About;