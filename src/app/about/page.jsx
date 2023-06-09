import Button from '@/components/button/Button';
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div className=" w-[100%] h-[70vh] relative">
            <Image
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="about"
              fill={true}
              className=" object-cover grayscale rounded"
            />
            <div className=" absolute bg-[#53c28b] text-white bottom-5 left-5 p-2 space-y-2">
              <h3 className=" text-4xl font-bold">Digital Storytellers</h3>
              <h4 className=" text-2xl font-semibold">
                Handcrafting award winning digital experiences
              </h4>
            </div>
          </div>
        </div>
        <div className=" w-[100%] min-h-[30vh] pt-12 flex justify-between space-x-14 ">
          <div className=" w-[50%] pr-20 space-y-3 text-justify">
            <h2 className=" text-3xl font-semibold pb-6">Who Are We?</h2>
            <p className=" text-lg font-medium pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              adipisci mollitia non, harum commodi maxime vero, ipsa optio
              numquam quidem minima voluptas laborum amet provident? Adipisci
              molestias hic excepturi atque!
            </p>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              voluptates voluptatibus, maiores delectus corrupti dolores.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ad minima, rem veritatis ea magni?
            </p>
          </div>
          <div className=" w-[50%] pr-20 text-justify">
            <h2 className=" text-3xl font-semibold pb-10">What We Do?</h2>
            <p className="text-lg font-medium pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              necessitatibus veritatis molestiae nam omnis inventore, pariatur
              est fugit ipsum. Ipsa!
            </p>
            <p className="text-lg font-medium pb-2">-Dynamic website</p>
            <p className="text-lg font-medium pb-2">-Fast and Handy</p>
            <p className="text-lg font-medium pb-4">-Mobile App</p>
            <div className=" w-[8rem]">
              <Button url="/contact" text="Contact" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About