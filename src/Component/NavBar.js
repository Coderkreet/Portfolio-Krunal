import React, { useState } from 'react'
// import Education from './NavePages/Education'
import {Link,useLocation} from 'react-router-dom'


import "aos/dist/aos.css";
// import HeroSection from './HeroSection'
import {FaHamburger} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'

const NavBar = () => {
  const [open , setOpen] = useState(true)

  const location = useLocation();
  console.log(location.pathname);

  function heandlemanu() {
    setOpen(!open);
  }
 
  var buttonText = open ? <FaHamburger  className='text-2xl  text-[#001c55] font-bold' /> : <GrClose className='text-2xl  text-[#001c55] font-bold'/>;

  function handleclickanimation() {

      }
  return (
    <div data-Aos = "fade-down" className='NavBar lg:w-10/12  lg:max-w-[1080px]  lg:mx-auto flex bg-[#edf9fe] lg:justify-center lg:items-center'>
  <nav className='lg:flex lg:max-w-[1080px]  w-full lg:w-full p-3  lg:p-5  justify-between bg-[#edf9fe] lg:justify-between'>
          <div className='flex justify-between'>
          <Link to={'/'}>
     <li id='Fname' className=' lg:text-[2rem] lg:text-3xl lg:font-extralight font-bold text-[1.3rem] text-[#001c55]' > <b className='font-bold'>&lt;KrunalBende /&gt;</b>  </li>
     </Link>   
     <button className='lg:hidden' onClick={heandlemanu}>{open} {buttonText} </button>
 
  
        </div>
     
          
        <ul onClick={handleclickanimation}  className={`lg:flex text-[1.2rem] cursor-pointer items-center  gap-x-6 ${open ? "hidden":"block translate-x-20 transition-all duration-200"}`}>
        <Link to={"/"} >  <li className={` p-3 hover:bg-[rgb(166,225,250)] translate-100 hover:font-bold ${location.pathname==='/'&&"font-bold"}`} >Home </li> </Link>
        <Link to={"/Education"} id='Education' >  <li className={` p-3 hover:bg-[rgb(166,225,250)] translate-100 hover:font-bold ${location.pathname==='/Education'&&"font-bold"}`} >Education </li> </Link>
    <Link to={"/Skills"} id='Skills'> <li className={`p-3 hover:bg-[rgb(166,225,250)] translate-100 hover:font-bold ${location.pathname==='/Skills'&&"font-bold"}`} >Skills</li> </Link>
    <Link to={'/Project'}> <li className={` p-3 hover:bg-[rgb(166,225,250)] translate-100 hover:font-bold ${location.pathname==='/Project'&&"font-bold"}`} >Project</li> </Link>
    <Link to={"/Contect"}>  <li className={`p-3 hover:bg-[rgb(166,225,250)] translate-100 hover:font-bold ${location.pathname==='/Contect'&&"font-bold"}`} >Contect Me</li> </Link>
    </ul>
   

  </nav>


  
    </div>
  )
}

export default NavBar
