import WebsiteImg1 from '../assets/crud.png';
import WebSiteImg2 from '../assets/to-do-list-text-on-notepad.jpg'
function Project(){
   const config={
      projects:[
         {
            image:WebsiteImg1,
            description:'Crud App',
            link:'https://aravindmurugan18.github.io/crud/'
         },
          {
            image:WebSiteImg2,
            description:'TodoList APP',
            link:'https://aravindmurugan18.github.io/todolist/'
         }
      // {
      //      image:WebSiteImg3,
      //       description:'A  website-blog',
      //       link:''
      // }
      ]
   }
   
    return(
        <section className="flex flex-col px-5 py-20 justify-center bg-primary text-white" id='project'>
           <div className="w-full">
            <div className="flex flex-col px-10 py-5">
            <h1 className='text-4xl  border-b-4 border-[#33379d] mb-5 w-[135px] font-bold'>Projects</h1>
            <p>These are some of my project</p>

            </div>
           </div>
           <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                  {config.projects.map((project)=>(
                          
                          <div className='relative'>
                       <img className='h-[300px] w-[600px] justify-items-center 'src={project.image} />
                     <div className='project-desc'>
                     <p className='text-center px-5 py-5'>{project.description}</p>
                     <div className='flex justify-center'>
                          <a className='btn' target='_blank' href={project.link}>view project</a>
                     </div>
                     </div>
                    
              
                  </div>

                  ))}
                   
            
                </div>
       
            </div>




        </section>
    )
}
export default Project;