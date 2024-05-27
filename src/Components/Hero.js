import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineInstagram,AiFillLinkedin } from "react-icons/ai";


function Hero(){
    const config={
        subtitle:'Im a Full-stack developer ',
        social:{
            facebook:'https://m.facebook.com/login/?locale=en_GB',
            insta:'https://www.instagram.com/_a_r_a_v_i_n_d_18/Aravind@18/',
            twitter:'https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D',
            linkdin:'https://in.linkedin.com/'
        }
    }
    return(
        
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-5xl font-hero-font'>Hi ,<br/> Im Aravind M
         <p className='text-2xl'>{config.subtitle}</p>
         </h1>
        <div className='flex py-10'>
            <a href={config.social.twitter} target='_blank' className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
            <a href={config.social.facebook} target='_blank' className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
            <a href={config.social.insta} target='_blank' className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
            <a href={config.social.linkdin} target='_blank' className=' hover:text-white'><AiFillLinkedin size={40}/></a>
        </div>


            </div>
            
        
         <img className='md:w-1/3 ' src={HeroImg}></img>


        </section>
        
    )
}
export default Hero;