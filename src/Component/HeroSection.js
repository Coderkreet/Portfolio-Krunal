/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Animation.css"
import "./SosialIcon.css"
import img2 from './assets/avatar.5852f40fbb38aa284829fa3fb7722225.svg'
import  img  from "./assets/home-main.541f8179af8209ce03ccf2178fe62dbf.svg";
import {  BsGithub , BsInstagram , BsLinkedin} from "react-icons/bs";
import { GrMail} from "react-icons/gr";
import NavBar from './NavBar';
// import { useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";


const HeroSection = () => {

  // useEffect(()=>{

  //   Aos.init({
  //     duration:800,
  //     offset:2000,
  //     once:true
  //   });
  // })

  return (
    
    <div>
        <NavBar/>

        <div className='md:flex md:flex-row md:max-w-[1080px] md:w-full md:mx-auto md:justify-center'>
        <div data-Aos="fade-up" className= ' md:flex heroSection  md:w-10/12 md:max-w-[1080px] md:items-center  md:justify-between bg-[#edf9fe] gap-x-8 mt-10 justify-center items-center '>
    <div className='md:w-[40rem] md:items-center md:justify-center md:gap-y-10 md:flex md:flex-col md:h-[35rem] flex flex-col gap-5 text-center '>
        <h1 className='md:text-[4rem] text-[#001c55] font-bold text-4xl'>Krunal Bende</h1>
        <h2 className='md:text-[2rem] md:font-bold text-[#001c55] font-bold text-2xl'>Software Engineer</h2>
        <p className='md:text-[1.3rem] md:font-bold  text-[#7f8daa] font-bold text-1xl'>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>


<div class="card3 mx-auto">

  <a target='_blank' href='https://github.com/Coderkreet' class="social-link1 " rel="noreferrer">
  <BsGithub className='text-[#001c55]'/>

  </a>
  <a target='_blank' href='https://www.instagram.com/_kreet.16_x/' class="social-link2" rel="noreferrer">
 <BsInstagram className='text-[#001c55]'/>

     </a>
  <a target='_blank' href='https://www.linkedin.com/in/krunal-bende' class="social-link3" rel="noreferrer">
  <BsLinkedin className='text-[#001c55]'/>

  </a>
  <a target='_blank' href='mailto:krunalbende2@mail.com' class="social-link4" rel="noreferrer">
  <GrMail className='text-[#001c55]'/>

  </a>
</div>             
    </div>
<div>
    <img className=' md:w-[680px]' src={img} alt=""/>
</div>
</div>
        </div>




{/* intro */}
<div>
<h1 data-Aos="fade-up" className='md:text-[2.4rem] md:max-w-[1080px] md:flex w-full mx-auto justify-center flex text-[#001c55] font-bold text-2xl mt-5 '>LET ME INTRODUCE MYSELF</h1>

<div className='md:flex max-w-[1080px] w-full mx-auto justify-center'>
<div className= ' md:flex heroSection Bounce  md:w-[50rem] md:items-center md:gap-x-10  md:justify-between bg-[#edf9fe] '>
<div data-Aos ="fade-right" className='md:w-[40rem] md:text-[1.3rem] font-bold text-[#7f8daa] justify-center gap-y-5 flex flex-col h-[35rem] text-center '>
      <p>⚡ I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
      <p>⚡ Hello, I'm Krunal. I recently graduated as a software engineer and I'm eager to kickstart my career in the tech industry. With a
       strong foundation in software development and a passion for solving complex problems</p>
      <p>⚡ I'm enthusiastic about contributing my skills to real-world projects. My areas of interest include
         Web app , and I'm eager to learn and grow as a professional</p>
      <p>⚡ I believe that every challenge is an opportunity to 
        learn something new, and I'm excited to be part of a dynamic team where I can collaborate and make a meaningful impact.</p>
    </div>
    <div data-Aos ="fade-left" className='flex justify-center items-center'>
      <img data-Aos="fade-up" className='w-[20rem] h-[20rem]' src={img2} alt=""/>
    </div>
    </div>

</div>

    </div>


    </div>
  )
}

export default HeroSection
