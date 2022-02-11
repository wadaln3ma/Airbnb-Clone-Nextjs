import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const CardInfoItem = ({ item })=>{
  const { img, location, title, description, star, price, total } = item
  return (
    <div className="flex border-b cursor-pointer py-7 px-2 pr-4 hover:scale-105 hover:opacity-80 hover:shadow-lg transition transform duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image alt="" src={img} layout="fill" objectFit="cover" className="rounded-2xl"/>
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>
            {location}
          </p>
          <HeartIcon className="h-7 cursor-pointer"/>
        </div>
        
        <h4 className="text-xl">{ title }</h4>
        <div className="w-10 border-b pt-2"/>
        <p className="text-gray-500 pt-2 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400"/>
            {star}
          </p>
          <div>
            <p className="tex-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="font-extralight text-right">{total}</p>
          </div>
        </div>

      </div>
    </div>
)}

export default CardInfoItem

