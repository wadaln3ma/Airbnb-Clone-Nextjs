import Image from "next/image"
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'

const Header = ()=>{
  return (
    <header className="sticky top-0 z-50 p-5 md:px-10 bg-white shadow-md grid grid-cols-3">
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image alt=""
               src={'/images/airbnb-logo.png'}
               layout="fill"
               objectPosition="left"
               objectFit="contain"/>
      </div>

      <div className="flex md:border-2 md:shadow-sm py-2 rounded-full">
        <input type="text" placeholder="Start your search"
               className="outline-none flex-grow bg-transparent pl-5 placeholder-gray-400 text-sm text-gray-600" />
        <SearchIcon className="hidden md:inline-flex md:mx-2 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline-flex cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 p-2 border-2 rounded-full items-center">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
)}

export default Header
