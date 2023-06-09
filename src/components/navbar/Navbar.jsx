"use client"
import React from 'react'
import Link from "next/link"
import DarkModeToggle from '../darkmodetoggle/DarkModeToggle';
const items = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const Navbar = () => {
  return (
    <>
      <div className=" w-[100%] h-24 pl-24 pr-24 flex justify-between items-center">
        <div className=" text-xl font-bold">
          <Link href="/">Rady</Link>
        </div>
        <div className=" flex items-center space-x-5">
          <DarkModeToggle />
          {items.map((item) => (
            <Link key={item.id} href={item.url}>
              {item.title}
            </Link>
          ))}
          <button className=' p-2 border border-none bg-[#53c28b] text-white cursor-pointer rounded-sm' onClick={() => {console.log('hello')}}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default Navbar