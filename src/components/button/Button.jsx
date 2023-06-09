import Link from 'next/link'
import React from 'react'

const Button = ({text,url}) => {
  return (
    <>
      <div className=" p-4 flex justify-center items-center cursor-pointer text-slate-300 bg-[#53c28b] border-none rounded">
        <Link href={url}>
          <button>{text}</button>
        </Link>
      </div>
    </>
  );
}

export default Button