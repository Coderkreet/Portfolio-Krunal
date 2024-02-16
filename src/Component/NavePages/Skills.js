import React from 'react'
import Knowledge from '../assets/logo/pngwing.com.png'
import NavBar from '../NavBar'
import "aos/dist/aos.css";
import "./SkillCard.css"
import Cpp from '../assets/IconSkill/C++.png'
import C from '../assets/IconSkill/C.png'
import Css from '../assets/IconSkill/Css.png'
import Html from '../assets/IconSkill/Html.png'
import Java from '../assets/IconSkill/Java.png'
import JavaScript from '../assets/IconSkill/JavaScript.png'
import MongoDB from '../assets/IconSkill/MongoDb.png'
import Nodejs from '../assets/IconSkill/Nodejs.png'
import Python from '../assets/IconSkill/Python.png'
import Reactjs from '../assets/IconSkill/Reactjs.png'
import Git from '../assets/IconSkill/Git.png'
import GithHub from '../assets/IconSkill/GithHub.png'
import Docker from '../assets/IconSkill/Docker.png'
import sass from '../assets/IconSkill/sass.png'



const Skills = () => {
 
  return (
    <div>
     <NavBar/>
     {/* Knowledge */}
     <div className='md:flex md:max-w-[1080px] md:mb-0 md:w-full md:mx-auto md:justify-center '>
        <div className= ' md:flex flex-col heroSection  md:w-10/12 md:max-w-[1080px] md:items-center  md:justify-between bg-[#edf9fe]'>

        <div data-aos="zoom-in" className='mt-[-10px]'>
          <img width={"400px"} src={Knowledge} alt=""/>
        <h1 data-Aos="fade-up" className='md:text-[2.4rem] text-[1.5rem] flex justify-center text-[#001c55] font-bold '>What Knowledge I Have ?</h1>
    </div>
    <div className='md:w-[60rem] md:mt-20 mt-6 md:justify-center gap-y-6 text-center flex flex-col md:h-[35rem]  '>
    <p data-aos = "fade-right" className='text-[#001c55] text-[20px] '> <span className='font-semibold '>⚡Problem Solving:</span> Adept at analyzing complex problems and devising innovative solutions. Enjoy tackling challenges through logical thinking and creative coding techniques.</p>
    <p data-aos = "fade-left" className='text-[#001c55] text-[20px] '> <span className='font-semibold '>⚡Web Development:</span> Skilled in front-end development using HTML, CSS, and JavaScript. Familiar with modern frameworks like React and Angular for building dynamic and responsive web applications.</p>
    <p data-aos = "fade-right" className='text-[#001c55] text-[20px] '> <span className='font-semibold '>⚡Database Management:</span>  Knowledgeable in database design and management using SQL & MongoDB. Able to create and optimize queries, ensuring efficient data retrieval and storage.</p>
    <p data-aos = "fade-left" className='text-[#001c55] text-[20px] '> <span className='font-semibold '>⚡Version Control:</span>  Experienced in using Git for version control and collaborating effectively with development teams. Comfortable with platforms like GitHub and Bitbucket.</p>
    <p data-aos = "fade-right" className='text-[#001c55] text-[20px] '> <span className='font-semibold '>⚡Object-Oriented Design (OOD):</span>  Strong understanding of OOD principles, allowing for the creation of modular, extensible, and well-structured software applications.</p>
    <p data-aos = "fade-left" className='text-[#001c55] text-[20px] '> <span className='font-semibold '>⚡Software Development Life Cycle (SDLC):</span>  Familiar with the various phases of SDLC, from requirement analysis to testing and deployment. Committed to delivering high-quality software on time.</p>
    </div>
    </div>
     </div>


{/* Professional Skillset */}

    <h1 data-Aos="fade-up" className='md:text-[2.4rem] text-[1.8rem] mt-10 flex justify-center text-[#001c55] font-bold'>Professional Skillset</h1>
<div className='flex md:max-w-[1080px] md:w-full md:mx-auto justify-center mt-10'>

  <div data-Aos="fade-up" className='flex md:gap-x-20 md:mt-10 md:gap-y-20 md:w-[60rem] flex-wrap w-full justify-center gap-x-4 gap-y-10'>
    
  <div  data-Aos="flip-right" class="card2">
 <img src={C} alt=""/>
</div>

  <div data-Aos="-left"  class="card2">
 <img src={Cpp} alt=""/>
</div>

  <div data-Aos="flip-up"  class="card2">
  <img src={Html} alt=""/>
</div>

  <div data-Aos="flip-down"  class="card2">
 <img src={Css} alt=""/>
</div>

  <div data-Aos="flip-up"  class="card2">
  <img src={JavaScript} alt=""/>
</div>

  <div data-Aos="flip-left"  class="card2">
  <img src={MongoDB} alt=""/>
</div>

  <div  data-Aos="flip-doen" class="card2">
  <img src={Nodejs} alt=""/>
</div>

  <div  data-Aos="flip-up" class="card2">
  <img src={Reactjs} alt=""/>
</div>

  <div data-Aos="flip-down"  class="card2">
  <img src={Python} alt=""/>
</div>

  <div data-Aos="flip-up"  class="card2">
  <img src={Java} alt=""/>
</div>
  <div data-Aos="flip-up"  class="card2">
  <img src={Git} alt=""/>
</div>
  <div data-Aos="flip-up"  class="card2">
  <img src={GithHub} alt=""/>
</div>
  <div data-Aos="flip-up"  class="card2">
  <img src={Docker} alt=""/>
</div>
  <div data-Aos="flip-up"  class="card2">
  <img src={sass} alt=""/>
</div>

  </div>

</div>
    </div>
  )
}

export default Skills
