import Image from "next/image"

const MediumCard = ({ item })=>{
  const { img, title } = item
  return (
    <div className="cursor-pointer transition transform duration-300 ease-out hover:scale-105">
      <div className="relative w-80 h-80">
        <Image alt="" src={img} layout="fill" className="rounded-xl"/>
      </div>
      <h3 className="text-2xl mt-3">{ title }</h3>
    </div>
)}

export default MediumCard
