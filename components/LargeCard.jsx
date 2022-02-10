import Image from "next/image"
const LargeCard = ({ title, img, description, btnText })=>{
  return (
    <div className="relative cursor-pointer py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image alt="" src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl w-64 mb-3">{ title }</h3>
        <p>{ description }</p>
        <button className="text-sm text-white bg-gray-900 mt-5 px-4 py-2 rounded-lg">{ btnText }</button>
      </div>
    </div>
)}

export default LargeCard
