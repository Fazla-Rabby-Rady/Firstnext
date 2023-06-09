import Image from 'next/image'
import React from 'react'
import user from '/public/blog1.jpg'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound()
  }
  return res.json();
}
const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <>
      <div className="pt-[5rem] pl-14">
        <div className="">
          <div className=" flex pb-[5rem]">
            <div className=" w-[50%] space-y-8 ">
              <h1 className=" text-4xl font-bold">
               {data.title}
              </h1>
              <p className=" text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quidem esse sequi incidunt, ex ratione. Ex, velit a facere
                provident assumenda natus quod mollitia quos, ducimus aliquid
                suscipit eaque rerum?
              </p>

              <div className=" flex  items-center space-x-5 pt-10">
                <Image src={user} alt="" className=" w-[3rem] rounded-[80%] ring-4" />
                <span className=' text-lg font-semibold'>John Doe</span>
              </div>
            </div>

            <div className=" w-[50%]">
              <Image
                src="https://img.freepik.com/free-photo/rabbit-with-pink-tongue-is-sitting-brown-background_1340-24078.jpg?w=1380&t=st=1686301079~exp=1686301679~hmac=7f2ace9ce47e2c09c64ed64f1f3df6257d14ebb64549e4245f21deb00365848a"
                alt=""
                width={650}
                height={250}
                className=" pl-16 rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" text-lg text-justify space-y-8 pb-[5rem]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae nam quo, suscipit officia saepe omnis assumenda, odit pariatur sequi quisquam ad veritatis ipsa voluptas laborum provident, iste necessitatibus. Natus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius
            in perferendis, mollitia aut provident quo! Cum accusantium quas
            minus odit rem maxime perferendis blanditiis ratione modi, culpa
            illo amet dolorum aperiam ullam deserunt assumenda. Nostrum sapiente
            corporis id numquam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos laudantium natus perferendis sed voluptatem et assumenda velit deleniti corporis ullam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            tempora in consequuntur similique voluptatum incidunt, tempore rem
            perferendis quaerat enim?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa aspernatur consequuntur cumque ex nesciunt rem odit error, praesentium amet, fuga rerum tempore laborum voluptates at. Eaque aperiam asperiores minus quo dolores cum tenetur ab quae sunt, perferendis quasi nisi at, molestias nesciunt rerum, facere sequi mollitia. Accusamus expedita dignissimos nostrum ex ducimus saepe, laboriosam eum iure soluta repudiandae possimus beatae reprehenderit itaque vitae ipsa? Nemo hic enim tempore modi reiciendis a nesciunt ipsa natus. Libero esse reprehenderit quam distinctio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed
            quibusdam quos, repellendus dolores cupiditate vitae nostrum neque
            at. Voluptates tenetur minima modi cumque odit rerum, illo,
            explicabo nulla quasi amet corrupti vero, assumenda iusto.
            Reiciendis a vitae eligendi assumenda veritatis adipisci, quia at
            laboriosam tenetur necessitatibus quod iusto quisquam natus laborum
            illo? Minus, perferendis.
          </p>
        </div>
      </div>
    </>
  );
}

export default BlogPost