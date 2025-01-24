import "./App.css";
import HeroSection from "./Component/HeroSection";
import {Routes ,Route} from 'react-router-dom'
import Education from "./Component/NavePages/Education";
import Skills from "./Component/NavePages/Skills";
import Project from './Component/NavePages/Project'
import Contact from './Component/NavePages/Contect'
import Footer from "./Component/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "./Component/SosialIcon.css";
import { IoIosChatbubbles } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

function App() {

const [isOpen,setIsOpen] = useState(true)

  useEffect(()=>{

    Aos.init({
      duration:800,
      offset:150,
      once:true
    });
  })

  function handelopen(){
    setIsOpen(!isOpen);
  }
  
  var buttonText = isOpen ? <IoIosChatbubbles  className='text-2xl text-[3.4rem] text-[#001c55] font-bold' /> : <MdOutlineClose className='text-2xl  text-[3.4rem] text-[#001c55] font-bold'/>;


  return (
  <div data-Aos = "fade-up" className=" relative overflow-hidden">
   
{/* <NavBar/> */}



   <div className="md:p-[0] p-[20px]">
        <Routes>
<Route path='/' element={<HeroSection/>}/>
<Route path='/MasterPortFolio2' element={<HeroSection/>}/>
<Route path='/Education' element={<Education/>}/>
<Route path='/Skills' element={<Skills/>}/>
<Route path='/Project' element={<Project/>}/>
<Route path='/Contact' element={<Contact/>}/>
</Routes>
   </div>
  
<Footer/>
  </div>
  );
}

export default App;
