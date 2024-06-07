import ResumeImg from'../assets/resume.jpg';
function Resume(){
     const config={
          link:'https://github.com/AravindMurugan18/pdf/blob/main/ARAVIND%20RESUME%20.pdf'
     }
   

    return(
          <section className='flex flex-col md:flex-row bg-secondary px-5' id='resume'>
               <div className='md:w-1/2 py-5 flex justify-end'>
                <img className='w-[300px]  ' src={ ResumeImg}/>
               </div>
               <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                     <h1 className='text-4xl  border-b-4 border-[#6367d2] mb-5 w-[140px] font-bold'>Resume</h1>
                     <p className='pb-5' >You can view my resume <a className='btn ' href={config.link} target='_blank'>Download</a> </p>
                    
                     
                </div>
               
               </div>

          </section>
    )
}
export default Resume;