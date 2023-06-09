import Button from '@/components/button/Button';
import Image from 'next/image'
import hero from 'public/hero.png'
export default function Home() {
  return (
    <>
      <div className=" w-[100%] h-[70vh] flex items-center ">
        <div className=" w-[50%] h-[60vh] lg:p-20 sm:pt-16 ml-5 mr-5 space-y-9">
          <h1 className=" text-6xl font-semibold">
            Better design for your digital products.
          </h1>
          <p className=" text-[24px] font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ab
            iusto corporis tempora temporibus soluta laudantium ipsa accusantium
            reiciendis at.
          </p>
          <div className=" w-[10rem]">
            <Button url="/portfolio" text="See My Works" />
          </div>
        </div>
        <div className=" w-[50%] object-cover">
          <Image src={hero} alt="hero" className=" w-[75%] " />
          {/* <Image src="https://assets8.lottiefiles.com/packages/lf20_phjobus6.json" width={500} height={500} /> */}
        </div>
      </div>
    </>
  );
}
