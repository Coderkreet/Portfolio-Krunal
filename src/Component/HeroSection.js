import React, { useState } from 'react'
import "./Animation.css"
import "./SosialIcon.css"
import { Typewriter } from "react-simple-typewriter";
import img2 from './assets/avatar.5852f40fbb38aa284829fa3fb7722225.svg'
import darkProfile from './assets/image/DarkProfile.png'
import darkImg from './assets/image/about.aee0f771fbfc1e7b8fa8.png'
import img from "./assets/AnimationImg.gif";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import NavBar from './NavBar';
import { useTheme } from '../ThemeContext'

// import { useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";


const HeroSection = () => {
  const { isDark } = useTheme();
  const [showFrontend, setShowFrontend] = useState(true);
  const [showBackend, setShowBackend] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatEmail, setChatEmail] = useState("");
  const [chatSubmitted, setChatSubmitted] = useState(false);
  console.log("HeroSection rendering. isDark:", isDark, "Selected Image:", isDark ? "darkProfile" : "img2");

  // useEffect(()=>{

  //   Aos.init({
  //     duration:800,
  //     offset:2000,
  //     once:true
  //   });
  // })

  return (
    
    <div className="relative min-h-screen overflow-hidden">
        <NavBar/>

        {/* Floating Chat Widget (Bottom Left) */}
        <div className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-50 flex flex-col items-start font-sans">
          {isChatOpen && (
            <div className="mb-4 w-[320px] md:w-[360px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-left">
              {/* Header */}
              <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={isDark ? darkProfile : img2} alt="Krunal" className="w-10 h-10 rounded-full object-cover border-2 border-white/50" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm">Krunal Bende</h4>
                    <p className="text-xs text-sky-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span> Active Now
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-4 h-60 overflow-y-auto space-y-3 flex flex-col bg-slate-50 dark:bg-slate-900/50">
                {/* Greeting Message */}
                <div className="self-start max-w-[85%] bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700/50 text-sm text-slate-800 dark:text-slate-200 text-left">
                  <p>Hi there! 👋 I'm Krunal Bende.</p>
                  <p className="mt-1">Leave a message below, and I will get back to you as soon as possible!</p>
                </div>

                {chatSubmitted && (
                  <div className="self-center bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 p-3 rounded-xl text-xs text-center border border-green-100 dark:border-green-900/40">
                    🎉 Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </div>

              {/* Form Input */}
              {!chatSubmitted ? (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (chatMessage.trim()) {
                      setChatSubmitted(true);
                      setTimeout(() => {
                        setChatSubmitted(false);
                        setChatMessage("");
                        setChatEmail("");
                        setIsChatOpen(false);
                      }, 2500);
                    }
                  }}
                  className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2 text-left"
                >
                  <input
                    type="email"
                    placeholder="Your email (optional)"
                    value={chatEmail}
                    onChange={(e) => setChatEmail(e.target.value)}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      required
                      placeholder="Type a message..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="flex-1 text-sm px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                    <button
                      type="submit"
                      className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-lg transition-colors flex items-center justify-center focus:outline-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-3 text-center text-xs text-slate-400 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                  Closing chat...
                </div>
              )}
            </div>
          )}

          {/* Trigger Button */}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none group relative border border-white/20"
          >
            {isChatOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            )}
            
            {/* Quick tooltip indicator */}
            {!isChatOpen && (
              <span className="absolute left-16 bg-slate-900 text-white text-xs px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                Chat with me! 👋
              </span>
            )}
          </button>
        </div>

        {/* Floating Corner Folder Controls */}
        <div className="hidden md:flex flex-col gap-4 fixed bottom-10 right-10 z-50">
          
          {/* Frontend Folder */}
          <div className="relative floating-folder">
            <div
              onClick={() => {
                setShowFrontend(!showFrontend);
                setShowBackend(false);
              }}
              className="bg-themeCardBg border-2 border-themePrimary py-2 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center gap-3 hover:-translate-y-1 transition-all duration-300 select-none"
            >
              <svg
                className="text-yellow-500"
                width="25"
                height="25"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2 1.75H8.1L6.3 0H1.8C0.81 0 0 0.7875 0 1.75V12.25C0 13.2125 0.81 14 1.8 14H15.165L18 9.1875V3.5C18 2.5375 17.19 1.75 16.2 1.75Z"
                  fill="#FFA000"
                ></path>
                <path
                  d="M16.2 2H1.8C0.81 2 0 2.77143 0 3.71429V12.2857C0 13.2286 0.81 14 1.8 14H16.2C17.19 14 18 13.2286 18 12.2857V3.71429C18 2.77143 17.19 2 16.2 2Z"
                  fill="#FFCA28"
                ></path>
              </svg>
              <p className="font-semibold text-themeText">
                Frontend Structure
              </p>
            </div>

            {showFrontend && (
              <div className="absolute right-0 bottom-[60px] w-72 bg-white/20 dark:bg-slate-950/40 backdrop-blur-md border-2 border-themePrimary/40 rounded-md shadow-2xl z-50 transition-all duration-300">
                <ul className="p-4 space-y-1 text-themeTextMuted font-light text-left">
                  <li className="flex items-center gap-2">
                    <span>📁</span> <span className="ml-1 text-themeText font-semibold">src</span>
                  </li>
                  <li className="flex items-center gap-2 pl-4">
                    <span>📁</span> <span className="ml-1">app</span>
                  </li>
                  <li className="flex items-center gap-2 pl-8">
                    <span>📄</span> <span className="ml-1">layout.js</span>
                  </li>
                  <li className="flex items-center gap-2 pl-8">
                    <span>📄</span> <span className="ml-1">page.js</span>
                  </li>
                  <li className="flex items-center gap-2 pl-4">
                    <span>📁</span> <span className="ml-1">components</span>
                  </li>
                  <li className="flex items-center gap-2 pl-8">
                    <span>📄</span> <span className="ml-1">header.js</span>
                  </li>
                  <li className="flex items-center gap-2 pl-8">
                    <span>📄</span> <span className="ml-1">footer.js</span>
                  </li>
                  <li className="flex items-center gap-2 pl-4">
                    <span>📁</span> <span className="ml-1">styles</span>
                  </li>
                  <li className="flex items-center gap-2 pl-8">
                    <span>📄</span> <span className="ml-1">globals.css</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Backend Folder */}
          <div className="relative floating-folder-slow">
            <div
              onClick={() => {
                setShowBackend(!showBackend);
                setShowFrontend(false);
              }}
              className="bg-themeCardBg border-2 border-themePrimary py-2 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center gap-3 hover:-translate-y-1 transition-all duration-300 select-none"
            >
              <svg
                className="text-yellow-500"
                width="25"
                height="25"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2 1.75H8.1L6.3 0H1.8C0.81 0 0 0.7875 0 1.75V12.25C0 13.2125 0.81 14 1.8 14H15.165L18 9.1875V3.5C18 2.5375 17.19 1.75 16.2 1.75Z"
                  fill="#FFA000"
                ></path>
                <path
                  d="M16.2 2H1.8C0.81 2 0 2.77143 0 3.71429V12.2857C0 13.2286 0.81 14 1.8 14H16.2C17.19 14 18 13.2286 18 12.2857V3.71429C18 2.77143 17.19 2 16.2 2Z"
                  fill="#FFCA28"
                ></path>
              </svg>
              <p className="font-semibold text-themeText">
                Backend Structure
              </p>
            </div>

            {showBackend && (
              <div className="absolute right-0 bottom-[60px] w-72 bg-white/20 dark:bg-slate-950/40 backdrop-blur-md border-2 border-themePrimary/40 rounded-md shadow-2xl z-50 transition-all duration-300">
                <ul className="p-4 space-y-1 text-themeTextMuted font-light text-left">
                  <li className="flex items-center gap-2">
                    <span>📁</span> <span className="ml-1 text-themeText font-semibold">backend</span>
                  </li>
                  <li className="flex items-center gap-2 pl-4">
                    <span>📁</span> <span className="ml-1">config</span>
                  </li>
                  <li className="flex items-center gap-2 pl-8">
                    <span>📄</span> <span className="ml-1">db.js</span>
                  </li>
                  <li className="flex items-center gap-2 pl-4">
                    <span>📁</span> <span className="ml-1">controllers</span>
                  </li>
                  <li className="flex items-center gap-2 pl-8">
                    <span>📄</span> <span className="ml-1">userController.js</span>
                  </li>
                  <li className="flex items-center gap-2 pl-4">
                    <span>📁</span> <span className="ml-1">models</span>
                  </li>
                  <li className="flex items-center gap-2 pl-8">
                    <span>📄</span> <span className="ml-1">User.js</span>
                  </li>
                  <li className="flex items-center gap-2 pl-4">
                    <span>📁</span> <span className="ml-1">routes</span>
                  </li>
                  <li className="flex items-center gap-2 pl-8">
                    <span>📄</span> <span className="ml-1">userRoutes.js</span>
                  </li>
                  <li className="flex items-center gap-2 pl-4">
                    <span>📄</span> <span className="ml-1">server.js</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

      <div className='md:flex md:flex-row md:max-w-[1080px] md:w-full md:mx-auto md:justify-center'>
        <div data-Aos="fade-up" className=' md:flex heroSection  md:w-10/12 md:max-w-[1080px] md:items-center  md:justify-between  gap-x-10 mt-10 justify-center items-center '>
          <div className='md:w-[50rem] md:items-center md:justify-center md:gap-y-10 md:flex md:flex-col md:h-[35rem] flex flex-col gap-5 text-center '>
            <h1 className='md:text-[4rem] text-themePrimary font-bold text-3xl transition-colors duration-300'>Krunal Bende</h1>
            <h2 className="md:text-[2rem] md:font-bold text-themePrimary font-bold text-2xl transition-colors duration-300">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Front End Developer",
                  "React Developer",
                  "JavaScript Developer",
                  "Programmer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className='md:text-[1.3rem] md:font-bold text-themeTextMuted font-bold text-1xl transition-colors duration-300'>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>


            {/* Desktop and Tablet: Modern 3D Isometric Stacked Design */}
            <div className="hidden md:block">
              <div className="doodle-container">
                {/* GitHub */}
                <div className="tooltip-container">
                  <div className="tooltip">
                    <div className="profile">
                      <div className="user">
                        <div className="img">GH</div>
                        <div className="details">
                          <div className="name">Krunal Bende</div>
                          <div className="username">@Coderkreet</div>
                        </div>
                      </div>
                      <div className="about">10+ Repositories</div>
                    </div>
                  </div>
                  <div className="text">
                    <a className="icon link-github" target="_blank" href="https://github.com/Coderkreet" rel="noreferrer">
                      <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="githubSVG">
                          <BsGithub className="text-white text-xl" />
                        </span>
                      </div>
                      <div className="text">GitHub</div>
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="tooltip-container">
                  <div className="tooltip">
                    <div className="profile">
                      <div className="user">
                        <div className="img">IG</div>
                        <div className="details">
                          <div className="name">Krunal Bende</div>
                          <div className="username">@_kreet.16_x</div>
                        </div>
                      </div>
                      <div className="about">500+ Followers</div>
                    </div>
                  </div>
                  <div className="text">
                    <a className="icon link-instagram" target="_blank" href="https://www.instagram.com/_kreet.16_x/" rel="noreferrer">
                      <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="instagramSVG">
                          <BsInstagram className="text-white text-xl" />
                        </span>
                      </div>
                      <div className="text">Instagram</div>
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="tooltip-container">
                  <div className="tooltip">
                    <div className="profile">
                      <div className="user">
                        <div className="img">IN</div>
                        <div className="details">
                          <div className="name">Krunal Bende</div>
                          <div className="username">@krunal-bende</div>
                        </div>
                      </div>
                      <div className="about">500+ Connections</div>
                    </div>
                  </div>
                  <div className="text">
                    <a className="icon link-linkedin" target="_blank" href="https://www.linkedin.com/in/krunal-bende" rel="noreferrer">
                      <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="linkedinSVG">
                          <BsLinkedin className="text-white text-xl" />
                        </span>
                      </div>
                      <div className="text">LinkedIn</div>
                    </a>
                  </div>
                </div>

                {/* Mail */}
                <div className="tooltip-container">
                  <div className="tooltip">
                    <div className="profile">
                      <div className="user">
                        <div className="img">✉</div>
                        <div className="details">
                          <div className="name">Krunal Bende</div>
                          <div className="username">@krunalbende2</div>
                        </div>
                      </div>
                      <div className="about">Email Me</div>
                    </div>
                  </div>
                  <div className="text">
                    <a className="icon link-mail" target="_blank" href="mailto:krunalbende2@mail.com" rel="noreferrer">
                      <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="mailSVG">
                          <GrMail className="text-white text-xl" />
                        </span>
                      </div>
                      <div className="text">Gmail</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Simple Previous Design */}
            <div className="block md:hidden">
              <div className="card3 mx-auto">
                <a target='_blank' href='https://github.com/Coderkreet' className="social-link1" rel="noreferrer">
                  <BsGithub className='text-themePrimary transition-colors duration-300' />
                </a>
                <a target='_blank' href='https://www.instagram.com/_kreet.16_x/' className="social-link2" rel="noreferrer">
                  <BsInstagram className='text-themePrimary transition-colors duration-300' />
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/krunal-bende' className="social-link3" rel="noreferrer">
                  <BsLinkedin className='text-themePrimary transition-colors duration-300' />
                </a>
                <a target='_blank' href='mailto:krunalbende2@mail.com' className="social-link4" rel="noreferrer">
                  <GrMail className='text-themePrimary transition-colors duration-300' />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img key={isDark ? 'dark-hero' : 'light-hero'} className={` md:w-[680px] transition-all duration-500 ${isDark ? 'rounded-full shadow-[0_0_50px_rgba(56,189,248,0.5)] border-4 border-sky-400/30' : ''}`} src={isDark ? darkProfile : img} alt="" />
            {/* <a href="https://storyset.com/web">Web illustrations by Storyset</a> */}

          </div>
        </div>
      </div>




      {/* intro */}
      <div>
        <h1 data-Aos="fade-up" className='md:text-[2.4rem] md:max-w-[1080px] md:flex w-full mx-auto justify-center flex text-themePrimary font-bold text-2xl mt-5 transition-colors duration-300'>LET ME INTRODUCE MYSELF</h1>

        <div className='md:flex max-w-[1080px] w-full mx-auto justify-center'>
          <div className=' md:flex heroSection Bounce  md:w-[50rem] md:items-center md:gap-x-10  md:justify-between  '>
            <div data-Aos="fade-right" className='md:w-[40rem] md:text-[1.3rem] font-bold text-themeTextMuted justify-center gap-y-5 flex flex-col h-[35rem] text-center transition-colors duration-300'>
              <p>⚡ I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
              <p>⚡ Hello, I'm Krunal. I recently graduated as a software engineer and I'm eager to kickstart my career in the tech industry. With a
                strong foundation in software development and a passion for solving complex problems</p>
              <p>⚡ I'm enthusiastic about contributing my skills to real-world projects. My areas of interest include
                Web app , and I'm eager to learn and grow as a professional</p>
              <p>⚡ I believe that every challenge is an opportunity to
                learn something new, and I'm excited to be part of a dynamic team where I can collaborate and make a meaningful impact.</p>
            </div>
            <div data-Aos="fade-left" className='flex justify-center items-center'>
              <img key={isDark ? 'dark' : 'light'} data-Aos="fade-up" className='w-[20rem] h-[20rem] rounded-full object-cover transition-all duration-300' src={isDark ? darkProfile : img2} alt="" />
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default HeroSection
