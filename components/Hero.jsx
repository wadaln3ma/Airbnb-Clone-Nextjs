import Image from "next/image"

const Hero = ()=>{
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700]">
      <Image alt="" src="/images/banner.jpg"
        layout="fill"
        objectFit="cover" />
      <div className="absolute w-full text-center top-1/2">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-400 font-bold bg-white px-10 py-4 my-3 rounded-full shadow-md hover:shadow-xlg active:scale-90 transition duration-150">
          {"I'm flexible"}
        </button>
      </div>
    </div>
)}

export default Hero
