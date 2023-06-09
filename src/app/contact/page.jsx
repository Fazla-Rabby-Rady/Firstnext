import React from 'react'
import Image from 'next/image';
import Button from '@/components/button/Button';
import contact from 'public/contact.png'
const Contact = () => {
  return (
    <>
      <div className=" w-[100%] min-h-[60vh]">
        <h1 className=" text-5xl font-bold text-center pt-4">
          Let's Keep in Touch
        </h1>
        <div className="  flex justify-between items-center pt-5">
          <div className=" w-[50%] p-10">
            <Image src={contact} alt="" className=" w-[90%] pl-[12rem] object-contain" />
          </div>
          <form action="" className=" w-[50%] p-14 pr-[15rem] flex flex-col space-y-5 ">
            <input
              type="text"
              placeholder="name"
              className="bg-transparent border-none outline-none text-[#bbb] ring-1 ring-[#bbb] p-4"
            />
            <input
              type="email"
              placeholder="email"
              name=""
              id=""
              className="bg-transparent border-none outline-none text-[#bbb] ring-1 ring-[#bbb] p-4"
            />
            <textarea
              name=""
              placeholder=" message"
              id=""
              cols="30"
              rows="10"
              className="bg-transparent border-none outline-none text-[#bbb] ring-1 ring-[#bbb] p-4"
            ></textarea>
            <div className=" w-[5rem] pt-3">
              <Button url="#" text="Send" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact