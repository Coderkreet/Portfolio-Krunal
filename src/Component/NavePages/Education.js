import React from 'react'
import edu from '../assets/Education.svg'
import NavBar from '../NavBar'
import freecodecamp from "../assets/logo/ikqra03zdnggljdu5vv0.webp";
import Hackerrank from "../assets/logo/download.png";
import leetcode from "../assets/logo/Leetcode.svg";
import Udemy from "../assets/logo/udemy-3.svg";
import Rcc from '../assets/logo/RCC_logo.png';
import Oriental from '../assets/logo/Oriental.png';
import "../Education.css"
import Javascript from "../assets/Certifcations/JavaScriptcer.jpg"
import Taiwind from "../assets/Certifcations/TailwindCssc.jpg"
import Webdesign from "../assets/Certifcations/WebDesign.png"
import Reactjscer from "../assets/Certifcations/ReactJS.jpg"

const Education = () => {
  return (
    <div>
      <NavBar/>
      
      <div className='md:flex max-w-[1080px] w-full mx-auto justify-center'>
        
    
    <div data-Aos="fade-up" className= 'flex md:flex-row md:heroSection md:w-10/12 md:max-w-[1080px] md:items-center md:justify-between bg-[#edf9fe]   flex-col gap-y-6 justify-center items-center'>
      <img className='md:w-[30rem] w-[20rem]'  src={edu} alt=""/>
      <div className='md:w-[40rem] md:justify-center md:gap-y-10 flex flex-col justify-center  text-center items-center gap-6'>
        <h1 className='md:text-[4rem] text-[#001c55] font-bold text-[2.5rem]'>Education</h1>
        <p className='md:text-[2rem] font-bold text-[#001c55] text-[1.2rem]'>Basic Qualification and Certifcations</p>
        <div className='flex gap-x-6'>
         <a href="https://www.hackerrank.com/"><img src={Hackerrank} className='rounded-md hover:scale-110' width="50rem" alt=""/></a> 
         <a href="https://www.freecodecamp.org/"><img src={freecodecamp} className='rounded-md hover:scale-110' width="45rem" alt=""/></a> 
         <a href="https://leetcode.com/"><img src={leetcode} className='rounded-md hover:scale-110' width="50rem" alt=""/></a> 
         <a href="https://www.udemy.com/"><img src={Udemy} className='rounded-md hover:scale-110' width="25rem" alt=""/></a> 
        </div>

      </div>
      </div>
    </div>
      {/* Education Qualification*/}
      <div>
    <h1 data-Aos="fade-up" className='md:text-[2.4rem] md:m-[70px] flex justify-center text-[#001c55] font-extrabold mt-20 text-[1.5rem]'>Education Qualifications</h1>

{/* MCA */}
      <div className= ' md:flex md:flex-row md:gap-x-5 md:mb-4 md:max-w-[1080px] md:w-full md:mx-auto md:justify-center flex flex-col justify-center items-center'>
        <div data-Aos ="flip-left" className='md:my-auto drop-shado md:w-[400px] w-[15rem]'>
        <img src={Oriental} alt=""/>
        </div>
      <div data-Aos ="fade-left" className= 'BorderShado md:w-[1792px] flex flex-col gap-y-10 '>
        <div className='flex flex-col gap-3 bg-[#8ecaf2] rounded-t-[20px] justify-center items-center  text-center after:opacity-[46.7%]'>
          <div className='mt-6 flex flex-col gap-y-6 '>
          <h2 className='md:text-[1.6rem] text-[1.1rem] font-bold md:font-semibold text-[#001c55]'>Oriental Institute of Science and Technology Bhopal</h2>
        <h3 className='md:text-[1.2rem] font-semibold text-[#001c55]'>Master of Computer Applications</h3>
        <p className='text-[1.6rem] font-semibold text-[#001c55]'>2023 - 2025</p>
          </div>
       
        </div>
        <div className='flex flex-col gap-y-7 p-2'>
      <p className='text-[#001c55] md:text-xl '>⚡ I am studying basic software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.</p>
      <p className='text-[#001c55] md:text-xl '>⚡ Apart from this, I have done courses C++ , HTML&CSS , Java , JavaScript , React.</p>
      <p className='text-[#001c55] md:text-xl '>⚡On the Other hand ,  I also have a good knowledge of hardware and networking</p>
        </div>
        <div className='mb-3'>
        <div className='bg-[#8ecaf2] h-[40px] w-[100px] mx-auto flex justify-center items-center rounded-md'>
          <a href="https://oistbpl.com/">Visit Website</a>
        </div>
        </div>
      </div>

      </div>
{/* Bca */}

<div className= 'md:flex md:flex-row md:gap-x-5 md:mb-4 md:max-w-[1080px] md:w-full md:mx-auto md:justify-center flex flex-col justify-center items-center'>
        <div data-Aos ="flip-left" className='md:my-auto drop-shado md:w-[400px] w-[15rem]'>
        <img src={Rcc} width="" height="" alt=""/>
        </div>
      <div data-Aos ="fade-left" className= 'BorderShado md:w-[1792px] flex flex-col gap-y-10'>
        <div className='flex flex-col gap-3 bg-[#8ecaf2] rounded-t-[20px] justify-center items-center  after:opacity-[46.7%]'>
          <div className='mt-6 flex flex-col gap-y-6 text-center'>
          <h2 className='md:text-[1.6rem] text-[1.1rem] font-bold md:font-semibold text-[#001c55]'>Revnath Choure College RCC Nagpur</h2>
        <h3 className='md:text-[1.2rem] font-semibold text-[#001c55]'>Bachelor of Computer Applications</h3>
        <p className='text-[1.6rem] font-semibold text-[#001c55]'>2020 - 2023</p>
          </div>

        </div>
        <div className='flex flex-col gap-y-7 p-2'>
      <p className='text-[#001c55] md:text-xl '>⚡ I have studied basic Computer subjects like MS Office , Linux, DS, DBMS, OS, C, C++ AI etc.</p>
      <p className='text-[#001c55] md:text-xl '>⚡ Apart from this, I have done Some Computer Langauges C, C++ , HTML & CSS , Computer hardware.</p>
      <p className='text-[#001c55] md:text-xl '>⚡On the Other hand ,  I also have a good knowledge of Windows Operating System</p>
        </div>
        <div className='mb-3'>
        <div className='bg-[#8ecaf2] h-[40px] w-[100px] mx-auto flex justify-center items-center rounded-md'>
          <a href="https://www.rccsaoner.com/">Visit Website</a>
        </div>
        </div>
      </div>

 </div>
 </div>

 {/* Certifcations */}

<div>
<h1 data-Aos="fade-up" className='text-[2.4rem] m-[70px] flex justify-center text-[#001c55] font-bold'>Certifcations</h1>
<div data-Aos="fade-up" className=' flex flex-col gap-6 justify-center items-center'>
<div data-Aos="fade-up"  className='border border-[#001c55]  rounded-lg  md:h-[40rem] md:w-[60rem] '>
<img src={Webdesign}  className=' w-full h-full object-fill' alt=""/>
</div>
<div  data-Aos="fade-up" className='border border-[#001c55]  rounded-lg  md:h-[40rem] md:w-[60rem] '>
<img src={Reactjscer}  className=' border-[#0e182c]  border-[1.2rem] w-full h-full object-fill' alt=""/>
</div>
<div  data-Aos="fade-up" className='border border-[#001c55]  rounded-lg  md:h-[40rem] md:w-[60rem] '>
<img src={Javascript}  className=' border-[#0e182c]  border-[1.2rem] w-full h-full object-fill' alt=""/>
</div>


</div>


</div>







    </div>
  )
}

export default Education
