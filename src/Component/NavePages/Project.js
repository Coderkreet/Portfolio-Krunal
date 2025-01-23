import React from 'react'
import  projectimg from "../assets/image/project-management.png";
import NavBar from '../NavBar';
import "./ProjectCard.css"
import WeatherProject from '../assets/Projectimage/Weather.png'
import DevDetective from '../assets/Projectimage/DevDetective.png'
import eCom from '../assets/Projectimage/E-commerce.png'
import BrandBeet from '../assets/Projectimage/BrandBeet.png'
const Project = () => {

  const MyProject =[
    {
      Name : "Cartnevula",
      Image : eCom,
      dec : "GitHub User Detective clearly states the purpose of the app, which is to investigate GitHub users or their activities.",
      GitLink : 'https://github.com/Coderkreet/E-Commerce-App',
      LiveLink : 'https://peppy-concha-44d25d.netlify.app/'
    },
    {
      Name : "BrandBeet",
      Image : BrandBeet,
      dec : "GitHub User Detective clearly states the purpose of the app, which is to investigate GitHub users or their activities.",
      GitLink : 'https://github.com/Coderkreet/BrandBeet',
      LiveLink : 'https://coderkreet.github.io/BrandBeet/'
    },
{
  Name : "Weather",
  Image : WeatherProject,
  dec : "Your Personal Forecast indicates that the app offers personalized weather updates tailored to the users location or preferences.",
  GitLink : 'https://coderkreet.github.io/WeatherApp/',
  LiveLink : 'https://coderkreet.github.io/WeatherApp/'
},
{
  Name : "DevDetective",
  Image : DevDetective,
  dec : "GitHub User Detective clearly states the purpose of the app, which is to investigate GitHub users or their activities.",
  GitLink : 'https://coderkreet.github.io/Githhub-User-Detective/',
  LiveLink : 'https://github.com/Coderkreet/Githhub-User-Detective'
},



  ]
  return (
    <div>
      <NavBar/>
      <div data-Aos="fade-up" className='flex md:flex-row md:mt-10 md:max-w-[1080px] gap-x-20 md:w-full md:mx-auto md:justify-center flex-col'>
      <img src={projectimg} width={"350px"} alt=""/>

      <div className='flex flex-col md:w-[35rem] md:gap-y-20 gap-y-10 mt-7 items-center'>
        <h1 className='md:text-[4rem] text-[2.4rem] text-[#001c55] font-bold'>Projects</h1>
      <p className='font-bold  text-[1.3rem] text-center text-[#7f8daa]'>My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science
         projects and deploy them to web applications using cloud infrastructure.</p>
      </div>

      </div>
    

<h1 data-Aos="fade-up" className='text-[2.4rem] mt-10 flex justify-center text-[#001c55] font-bold '>My Recent Works</h1>
<div className='md:flex flex-col mt-10 max-w-[1080px] gap-x-20 w-full mx-auto justify-center'>
  <div className=' text-[1.3rem] font-bold text-[#7f8daa] text-center justify-center flex  '>
    <p>Here are a few projects I've worked on recently.</p>
  </div>

  <div className='flex gap-10 flex-wrap justify-center mt-10'>
    
{
  MyProject.map((item)=>(
    <div class="cardBox">
    <img className='w-full h-full object-cover' src={item.Image} alt=""/>
    <div class="card">
      <span2 class="text"> {item.Name}</span2>
      <div class="content flex flex-col gap-10 justify-end">
        <p> {item.dec} </p>
        <div className='flex gap-9 justify-center'>
     <a href={item.LiveLink}>
            <button class="button">
    Live Demo
  </button>
     </a>
  
  <a href={item.GitLink}>
    <button class="button" >
    Gith Hub
  </button>
  </a>
   </div>
   </div>
    </div>
  </div>
  ))
}

  </div>
</div>

   
    </div>
  )
}

export default Project
