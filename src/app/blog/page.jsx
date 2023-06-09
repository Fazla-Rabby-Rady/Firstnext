import Button from '@/components/button/Button';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache:"no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData()

  return (
    <>
      <div className="">
        {data.map((item) => (
          <Link href="/blog/textId" key={item.id}>
            <div className=" flex items-center  mt-5 mb-28 odd:flex-row-reverse">
              <div className=" w-[70%] space-y-6">
                <h2 className=" text-4xl font-bold">{item.title}</h2>
                <p className=" text-lg text-justify pr-36">
                  {item.body}
                </p>
              </div>
              <div className=" w-[30%] object-cover">
                <Image
                  src="https://img.freepik.com/premium-vector/gradient-lo-fi-illustration_52683-83564.jpg?w=826"
                  alt=""
                  width={400}
                  height={100}
                  className=" pl-20"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Blog