import React from 'react'
import  projectimg from "../assets/image/project-management.png";
import NavBar from '../NavBar';
import "./ProjectCard.css"
import WeatherProject from '../assets/Projectimage/Weather.png'
import DevDetective from '../assets/Projectimage/DevDetective.png'
import eCom from '../assets/Projectimage/E-commerce.png'
import BrandBeet from '../assets/Projectimage/BrandBeet.png'
import CinemaSync from '../assets/Projectimage/CinemaSync.png'
import { Typewriter } from 'react-simple-typewriter';
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
const Project = () => {

  const MyProject =[
    {
      Name : "CinemaSync",
      Image : CinemaSync,
      dec : "CinemaSync is a dynamic movie website built using React and powered by the TMDB API. It allows users to explore detailed information about upcoming movies, including release dates, trailers, and ratings, all through a sleek and responsive interface.",
      GitLink : 'https://github.com/Coderkreet/CinemaSync',
      LiveLink : 'https://cinema-sync-seven.vercel.app/',
      Htmlicon : <FaHtml5/>,
      Cssicon : <FaCss3/>,
     iconjs : <IoLogoJavascript/>,
     iconreact : <FaReact/>

    },
    {
      Name : "Cartnevula",
      Image : eCom,
      dec : "CartNevula is a modern and responsive eCommerce website built using HTML, CSS, JavaScript, and React. It offers a seamless shopping experience with an intuitive interface, dynamic product displays, and fast performance",
      GitLink : 'https://github.com/Coderkreet/E-Commerce-App',
      LiveLink : 'https://peppy-concha-44d25d.netlify.app/',
      Htmlicon : <FaHtml5/>,
      Cssicon : <FaCss3/>,
     iconjs : <IoLogoJavascript/>,
     iconreact : <FaReact/>

    },
    {
      Name : "BrandBeet",
      Image : BrandBeet,
      dec : "The BrandBeet Website Clone is a visually stunning and interactive website built using HTML, CSS, JavaScript, and the GreenSock Animation Platform (GSAP). This project replicates the design and functionality of the original BrandBeet website, emphasizing sleek animations and seamless user experience.",
      GitLink : 'https://github.com/Coderkreet/BrandBeet',
      LiveLink : 'https://coderkreet.github.io/BrandBeet/',
      Htmlicon : <FaHtml5/>,
      Cssicon : <FaCss3/>,
     iconjs : <IoLogoJavascript/>
    },
{
  Name : "Weather",
  Image : WeatherProject,
  dec : "The Weather Web Application is a feature-rich and user-friendly platform designed to provide real-time weather updates for any location. Built using HTML, CSS, and JavaScript, this project leverages the OpenWeather API to fetch and display accurate weather data in a visually appealing and intuitive interface.",
  GitLink : 'https://coderkreet.github.io/WeatherApp/',
  LiveLink : 'https://coderkreet.github.io/WeatherApp/',
  Htmlicon : <FaHtml5/>,
  Cssicon : <FaCss3/>,
 iconjs : <IoLogoJavascript/>,
},
{
  Name : "DevDetective",
  Image : DevDetective,
  dec : "GitHub User Detective clearly states the purpose of the app, which is to investigate GitHub users or their activities.",
  GitLink : 'https://coderkreet.github.io/Githhub-User-Detective/',
  LiveLink : 'https://github.com/Coderkreet/Githhub-User-Detective',
  Htmlicon : <FaHtml5/>,
  Cssicon : <FaCss3/>,
 iconjs : <IoLogoJavascript/>,
},



  ]
  return (
    <div>
      <NavBar/>
      <div data-Aos="fade-up" className='flex md:flex-row md:mt-10 md:max-w-[1080px] gap-x-20 md:w-full md:mx-auto md:justify-center flex-col'>
      <img src={projectimg} width={"350px"} alt=""/>

      <div className='flex flex-col md:w-[35rem] md:gap-y-20 gap-y-10 mt-7 items-center'>
        <h1 className='md:text-[4rem] text-[2.4rem] text-[#001c55] font-bold'> 
            <Typewriter
                                 words={['Projects']}
                                 loop= "1" // Set to true for an infinite loop
                                 cursor
                                 cursorStyle="_"
                                 typeSpeed={70}
                                 deleteSpeed={50}
                                 delaySpeed={2000}
                               /> 
          </h1>
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
        <p className='text-[0.4rem]'> {item.dec} </p>
       <div className=' flex text-4xl text-[#edf9fe] gap-x-4 mx-auto '>
      <i> {item.Htmlicon} </i>
      <i> {item.Cssicon} </i>
      <i> {item.iconjs} </i>
      <i> {item.iconreact} </i>

       </div>
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
