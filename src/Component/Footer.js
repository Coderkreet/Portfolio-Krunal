/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {  BsGithub , BsInstagram , BsLinkedin} from "react-icons/bs";
import { GrMail} from "react-icons/gr";
import "./SosialIcon.css"


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col mt-10 justify-center items-center bg-themeFooterBg text-center p-6 transition-colors duration-300'>

      <div class="card3">

<a target='_blank' href='https://github.com/Coderkreet' class="social-link1 ">
<BsGithub className='text-themeTextMuted hover:text-themePrimary transition-colors duration-300'/>

</a>
<a target='_blank' href='https://www.instagram.com/_kreet.16_x/' class="social-link2">
<BsInstagram className='text-themeTextMuted hover:text-themePrimary transition-colors duration-300'/>

   </a>
<a target='_blank' href='https://www.linkedin.com/in/krunal-bende' class="social-link3">
<BsLinkedin className='text-themeTextMuted hover:text-themePrimary transition-colors duration-300'/>

</a>
<a target='_blank' href='mailto:krunalbende2@mail.com' class="social-link4">
<GrMail className='text-themeTextMuted hover:text-themePrimary transition-colors duration-300'/>

</a>
</div> 

        <h1 className='text-[1.1rem] font-bold text-themeTextMuted hover:text-themePrimary transition-colors duration-300'>Copyright @2023 | Designed With by Krunal/Kreet❤️</h1>

      </div>
    </div>
  )
}

export default Footer
