"use client"
import React, { useContext } from 'react'
import {BiSun} from 'react-icons/bi'
import {FaMoon} from 'react-icons/fa'
import { ThemeContext} from '../../../context/ThemeContext';
const DarkModeToggle = () => {
    // const mode="light";

    const {toggle,mode} = useContext(ThemeContext)
  return (
    <>
        <div className=" w-[20%] h-[2rem] p-2 flex justify-between items-center ring-1 ring-[#53c28b70] rounded-xl space-x-3 relative" 
            onClick={toggle}
        >
            <div className=" text-xl pl-2 text-orange-300"><FaMoon /></div>
            <div className=" text-xl text-orange-300"><BiSun /></div>
            <div className=" w-6 h-5 bg-[#53c28b] rounded-full absolute cursor-pointer left-0" 
                style={mode === "light" ? {left:0} : {left:"2rem"}}
            />
        </div>
    </>
  )
}

export default DarkModeToggle