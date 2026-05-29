import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "aos/dist/aos.css";
import { FaHamburger } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { BsSun, BsMoonStars } from 'react-icons/bs'
import { useTheme } from '../ThemeContext'

const NavBar = () => {
  const [open , setOpen] = useState(true)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation();

  function heandlemanu() {
    setOpen(!open);
  }
 
  var buttonText = open ? (
    <FaHamburger className='text-2xl text-themePrimary font-bold transition-colors duration-300' />
  ) : (
    <GrClose className='text-2xl text-themePrimary font-bold transition-colors duration-300' />
  );

  return (
    <div data-Aos="fade-down" className='NavBar lg:w-10/12 lg:max-w-[1080px] lg:mx-auto flex lg:justify-center lg:items-center'>
      <nav className='lg:flex lg:max-w-[1080px] w-full lg:w-full p-3 lg:p-5 justify-between lg:justify-between items-center'>
        <div className='flex justify-between items-center w-full lg:w-auto'>
          <Link to={'/'}>
            <li id='Fname' className='lg:text-[2rem] lg:text-3xl lg:font-extralight font-bold text-[1.3rem] text-themePrimary list-none transition-colors duration-300'>
              <b className='font-bold'>&lt;KrunalBende /&gt;</b>
            </li>
          </Link>
          <div className='flex items-center gap-x-4 lg:hidden'>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-themeNavHover text-themePrimary transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {isDark ? <BsSun className="text-2xl text-yellow-400" /> : <BsMoonStars className="text-xl" />}
            </button>
            <button onClick={heandlemanu}>{buttonText}</button>
          </div>
        </div>

        <ul className={`lg:flex text-[1.2rem] cursor-pointer items-center gap-x-6 transition-all duration-300 ${open ? "hidden lg:flex" : "block mt-4 lg:mt-0"}`}>
          <Link to={"/"}>
            <li className={`p-3 rounded-md hover:bg-themeNavHover hover:text-themePrimary transition-all duration-200 hover:font-bold ${location.pathname === '/' ? "font-bold text-themePrimary" : "text-themeText"}`}>
              Home
            </li>
          </Link>
          <Link to={"/Education"} id='Education'>
            <li className={`p-3 rounded-md hover:bg-themeNavHover hover:text-themePrimary transition-all duration-200 hover:font-bold ${location.pathname === '/Education' ? "font-bold text-themePrimary" : "text-themeText"}`}>
              Education
            </li>
          </Link>
          <Link to={"/Skills"} id='Skills'>
            <li className={`p-3 rounded-md hover:bg-themeNavHover hover:text-themePrimary transition-all duration-200 hover:font-bold ${location.pathname === '/Skills' ? "font-bold text-themePrimary" : "text-themeText"}`}>
              Skills
            </li>
          </Link>
          <Link to={'/Project'}>
            <li className={`p-3 rounded-md hover:bg-themeNavHover hover:text-themePrimary transition-all duration-200 hover:font-bold ${location.pathname === '/Project' ? "font-bold text-themePrimary" : "text-themeText"}`}>
              Project
            </li>
          </Link>
          <Link to={"/Contact"}>
            <li className={`p-3 rounded-md hover:bg-themeNavHover hover:text-themePrimary transition-all duration-200 hover:font-bold ${location.pathname === '/Contact' ? "font-bold text-themePrimary" : "text-themeText"}`}>
              Contact Me
            </li>
          </Link>
          <li className="hidden lg:block list-none">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-themeNavHover text-themePrimary transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {isDark ? <BsSun className="text-2xl text-yellow-400" /> : <BsMoonStars className="text-xl" />}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar

