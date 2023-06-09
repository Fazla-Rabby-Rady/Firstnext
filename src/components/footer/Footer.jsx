import React from 'react'

import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";


const Footer = () => {
    let n = new Date().getFullYear();
  return (
    <>
      <div className=" h-24 flex justify-between items-center">
        <div className="">©{n} Rady. All rights reserved.</div>
        <div className=" flex justify-between items-center space-x-5 opacity-70">
          <BsFacebook className=' text-blue-400  w-5 h-5 cursor-pointer' />
          <BsInstagram className=' text-red-400 w-5 h-5 cursor-pointer' />
          <BsTwitter className=' text-blue-400 w-5 h-5 cursor-pointer' />
          <BsYoutube className=' text-red-600 w-6 h-6 cursor-pointer' />
        </div>
      </div>
    </>
  );
}

export default Footer