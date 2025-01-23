/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import  Contectimg from "../assets/Contect.svg";
import NavBar from '../NavBar';
import {  BsFillTelephoneInboundFill} from "react-icons/bs";
import "../SosialIcon.css"
import MyLogo from '../assets/image/MyLogo.png'
import Githhub from '../assets/social-media-Icon/Githhub.png'
import Insta from '../assets/social-media-Icon/Insta.png'
import Linkdin from '../assets/social-media-Icon/Linkdin.png'
import Whatsaap from '../assets/social-media-Icon/Whatsaap.png'
import Mail from '../assets/social-media-Icon/Mail.png'
const Contect = () => {
  return (
    <div>
      <NavBar/>
     
      <div data-Aos="fade-up" className='md:flex md:flex-row mt-10 md:max-w-[1080px] md:gap-x-20 md:w-full md:mx-auto flex-col justify-center'>
        <div className='flex justify-center items-center'>
      <img data-Aos="flip-left"  className='drop-shado2' src={MyLogo} width={"400px"} alt=""/>
        </div>

      <div className='flex flex-col md:w-[35rem] gap-y-10 mt-8 items-center'>
        <h1 className='md:text-[4rem] text-[2.5rem] text-[#001c55] font-bold'>Contect</h1>
      <p className='font-bold text-[1.3rem] text-center text-[#7f8daa]'>I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with  JavaScript,React,React-Native,NodeJS,ExpressJs Development.</p>


      <div class="card3 gap-4">
  <a  target='_blank' href='mailto:krunalbende2@mail.com' class="social-link1">
  <img src={Mail} width={"50rem"} alt=""/>
  </a>
  <a target='_blank' href='https://github.com/Coderkreet' class="social-link1">
  <img  src={Githhub} width={"50rem"} alt=""/>
  </a>
  <a target='_blank' href='https://www.instagram.com/_kreet.16_x/' class="social-link2">
  <img src={Insta} width={"50rem"} alt=""/>

     </a>
  <a target='_blank'  href='https://www.linkedin.com/in/krunal-bende' class="social-link3">
  <img src={Linkdin} width={"50rem"} alt=""/>
  </a>
  <a target='_blank' href='https://wa.link/shz4mn' class="social-link4">
   <img src={Whatsaap} width={"50rem"} alt=""/>
  </a>
      </div> 
      {/* resume btn */}
      <a target='_blank' href="https://drive.google.com/file/d/1ZHHuA49R3VBjXpWTIapDEqpdxaS1DJ_K/view?usp=drive_link">  <button className="m-10 cta">
  <span>  See My Resume</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
        </button> </a>
      </div>
      </div>
        
   


      <div data-Aos="fade-left" className='md:flex mt-10 max-w-[1080px] gap-x-20 w-full mx-auto justify-center'>
     <img src={Contectimg} alt="" width={500} />
      <div className='flex flex-col gap-10 text-center'>
        <h1 className='text-4xl text-[#001c55] font-extrabold'>Address</h1>
        <p className='font-bold text-[1.1rem] text-[#7f8daa]'>GT Road, T.A.- Sausar, Dist.- Chhindwara, Madhya Pradesh (M.P.) - 480106</p>
        <div className='flex justify-center items-center gap-x-4'>
        <BsFillTelephoneInboundFill className='text-[#001c55]'/> 
        <a href="tel:9300631627"> <p className='text-[#001c55] text-[1.2rem] '> <span className=' font-bold'>  Phone No. :</span> <button class="btn ml-[1.4rem]"> Click Here
</button></p> </a>
    
        </div>
      </div>


      </div>

      
    </div>
  )
}

export default Contect
