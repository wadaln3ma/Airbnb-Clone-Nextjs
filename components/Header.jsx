import Image from "next/image"
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import {useState} from "react"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {DateRangePicker} from "react-date-range"

const Header = ()=>{
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1) 

  const selectionRange = {
    startDate,
    endDate,
    key: "selection"
  }

  const handleSelect = (ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = ()=>{
    setSearchInput('')
  }

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
               value={searchInput}
               onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker ranges={[selectionRange]}
                           minDate={new Date()}
                           rangeColors={["#FD5B61"]}
                           onChange={handleSelect}/>

          <div className="flex items-center border-b mb-4">
            <h2 className="flex-grow text-2xl font-semibold">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input type="number" 
                   className="w-12 pl-2 text-red-400 outline-none"
                   value={noOfGuests}
                   min={1}
                   onChange={e => setNoOfGuests(e.target.value)} />
          </div>
          <div className="flex justify-around">
            <button onClick={resetInput} className="text-gray-500">Cancel</button>
            <button className="text-red-400">Search</button>
          </div>
          
        </div>
      )}
    </header>
)}

export default Header
