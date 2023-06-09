import Button from '@/components/button/Button'
import Image from 'next/image'
import React from 'react'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (cat) => {
  const data = items[cat]
  if(data){
    return data
  }
  return notFound()
}

const Category = ({params}) => {
  const data = getData(params.category)
  return (
    <>
      <div className="">
        <h1 className=" text-2xl text-green-500">{params.category}</h1>
        {data.map((item) => (
          <div className=" flex items-center space-x-16 mt-12 mb-28 odd:flex-row-reverse" key={item.id}>
            <div className=" w-[50%] space-y-6">
              <h2 className=" text-3xl font-semibold">{item.title}</h2>
              <p className=" text-lg pr-16 text-justify">
                {item.desc}
              </p>
              <div className=" w-[8rem]">
                <Button url="" text="See More" />
              </div>
            </div>
            <div className=" w-[50%] object-cover">
              <Image
                src={item.image}
                alt=""
                width={500}
                height={250}
                className=' rounded-xl'
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category