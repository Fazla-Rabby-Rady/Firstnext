import Link from 'next/link'
import React from 'react'

const prots = [
  {
    id:1,
    url:'/portfolio/illustrations',
    title:'Illustrations',
  },
  {
    id:2,
    url:'/portfolio/websites',
    title:'Websites',
  },
  {
    id:3,
    url:'/portfolio/applications',
    title:'Application'
  }
]
const Portfolio = () => {
  return (
    <>
      <div className=" w-[100%] h-[50vh] space-y-8">
        <h1 className=" text-3xl font-semibold">Choose a gallery</h1>
        <div className=" w-[70%] min-h-[40vh] flex space-x-9">
          {prots.map((port) => (
            <Link
              key={port.id}
              href={port.url}
              className="p-8 w-[20rem] h-[25rem] ring-4 ring-[#bbb] rounded-md text-3xl font-semibold relative bg-cover odd:bg-illesterate even:bg-website hover:text-green-500"
            >
              <span className=" absolute bottom-5 right-[1rem]">
                {port.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio