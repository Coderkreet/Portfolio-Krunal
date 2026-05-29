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
import { BsBriefcaseFill } from 'react-icons/bs';
const Project = () => {
  const getMonthsDiff = (start, end) => {
    return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
  };

  const calculateCurrentJobDuration = () => {
    const start = new Date("2025-07-01");
    const end = new Date();
    const totalMonths = getMonthsDiff(start, end);
    const y = Math.floor(totalMonths / 12);
    const m = totalMonths % 12;
    let res = "";
    if (y > 0) res += `${y} yr${y > 1 ? "s" : ""}`;
    if (m > 0) res += `${res ? " " : ""}${m} mo${m > 1 ? "s" : ""}`;
    return res || "0 mos";
  };

  const calculateTotalExperience = () => {
    const lockeneStart = new Date("2024-10-01");
    const lockeneEnd = new Date("2025-01-31");
    const nexaStart = new Date("2025-01-01");
    const nexaEnd = new Date("2025-06-30");
    const eduproStart = new Date("2025-07-01");
    const currentDate = new Date();

    const lockeneMonths = getMonthsDiff(lockeneStart, lockeneEnd);
    const nexaMonths = getMonthsDiff(nexaStart, nexaEnd);
    const eduproMonths = getMonthsDiff(eduproStart, currentDate);

    // Subtract 1 month to account for the Jan 2025 overlap
    const totalMonths = lockeneMonths + nexaMonths + eduproMonths - 1;
    const y = Math.floor(totalMonths / 12);
    const m = totalMonths % 12;

    let res = "";
    if (y > 0) res += `${y} Year${y > 1 ? "s" : ""}`;
    if (m > 0) res += `${res ? " " : ""}${m} Month${m > 1 ? "s" : ""}`;
    return res || "0 Months";
  };

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
        <h1 className='md:text-[3.3rem] text-[2.4rem] text-themePrimary font-bold transition-colors duration-300'> 
            <Typewriter
                                 words={['Experience & Projects']}
                                 loop= "1" // Set to true for an infinite loop
                                 cursor
                                 cursorStyle="_"
                                 typeSpeed={70}
                                 deleteSpeed={50}
                                 delaySpeed={2000}
                               /> 
          </h1>
      <p className='font-bold  text-[1.3rem] text-center text-themeTextMuted transition-colors duration-300'>My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science
         projects and deploy them to web applications using cloud infrastructure.</p>
      </div>

      </div>

      {/* Professional Experience Section */}
      <div className="mt-20 max-w-[1080px] w-full mx-auto px-4 md:px-0">
        <h1 data-Aos="fade-up" className="text-[2.4rem] flex flex-col md:flex-row items-center justify-center gap-4 text-themePrimary font-bold mb-10 transition-colors duration-300">
          Professional Experience
          <span className="px-4 py-1 text-[1.1rem] bg-themePrimary/15 text-themePrimary rounded-full border border-themePrimary/20 transition-colors duration-300">
            Total: {calculateTotalExperience()}
          </span>
        </h1>

        <div className="relative border-l-4 border-themePrimary/40 ml-4 md:ml-10 py-2 flex flex-col gap-10">
          {[
            {
              role: "Web Developer",
              company: "Edupro Hub Pvt. Ltd.",
              duration: `Jul 2025 - Present (${calculateCurrentJobDuration()})`,
              location: "Indore, Madhya Pradesh (On-site)",
              points: [
                "Developed a scalable online Exam Portal with real-time monitoring and seamless exam flow.",
                "Implemented advanced proctoring using face detection, object tracking, and activity monitoring.",
                "Integrated real-time communication via Socket.io and MediaSoup for low-latency supervision.",
                "Built secure workflows: student authentication, re-login, pause/resume sessions, and live dashboards.",
                "Collaborated with backend + AI teams to ensure high availability, security, and platform performance."
              ]
            },
            {
              role: "Frontend Developer",
              company: "Nexa Chain",
              duration: "Jan 2025 - Jun 2025",
              location: "Bhopal, Madhya Pradesh (On-site)",
              points: [
                "Built responsive UI for an E-commerce platform and an Investment App using React & Tailwind CSS.",
                "Designed clean, accessible layouts with strong focus on mobile-first UX.",
                "Improved performance via optimized component structure and reusable UI patterns.",
                "Enhanced design consistency using advanced styling, accessibility improvements, and pixel-perfect layouts."
              ]
            },
            {
              role: "Frontend Developer Intern",
              company: "LOCKENE",
              duration: "Oct 2024 - Jan 2025",
              location: "Nagpur, Maharashtra (On-site)",
              points: [
                "Built interactive React components improving UI engagement and user flow.",
                "Optimized rendering and state management to boost app performance.",
                "Developed responsive layouts using Bootstrap and integrated REST APIs.",
                "Built a full Cafe Management System: game booking, inventory, sales tracking, and staff workflows."
              ]
            }
          ].map((exp, idx) => (
            <div key={idx} data-Aos="fade-up" className="relative pl-8 md:pl-12 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[14px] top-1.5 w-6 h-6 rounded-full bg-themeBg border-4 border-themePrimary flex items-center justify-center transition-all duration-300 group-hover:scale-120 group-hover:bg-themePrimary">
                <BsBriefcaseFill className="text-[10px] text-themePrimary group-hover:text-themeBg transition-colors duration-300" />
              </div>

              {/* Experience Card */}
              <div className="BorderShado bg-themeCardBg border border-themePrimary/10 p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 hover:border-themePrimary hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-themePrimary transition-colors duration-300">
                      {exp.role}
                    </h2>
                    <h3 className="text-lg font-semibold text-themeText/80 transition-colors duration-300">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="inline-block px-3 py-1 text-sm font-bold bg-themePrimary/10 text-themePrimary rounded-full transition-colors duration-300">
                      {exp.duration}
                    </span>
                    <p className="text-sm text-themeTextMuted mt-1 transition-colors duration-300">
                      {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="list-disc list-outside ml-4 mt-2 flex flex-col gap-2 text-themeText/95 transition-colors duration-300">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-[1.05rem] leading-relaxed">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

<h1 data-Aos="fade-up" className='text-[2.4rem] mt-20 flex justify-center text-themePrimary font-bold transition-colors duration-300'>My Recent Works</h1>
<div className='md:flex flex-col mt-10 max-w-[1080px] gap-x-20 w-full mx-auto justify-center'>
  <div className=' text-[1.3rem] font-bold text-themeTextMuted text-center justify-center flex transition-colors duration-300'>
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
