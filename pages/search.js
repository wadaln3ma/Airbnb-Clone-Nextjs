import Header from "../components/Header"
import Footer from "../components/Footer"
import CardInfoItem from '../components/CardInfoItem'
import {useRouter} from "next/router"
import { format } from 'date-fns'
import axios from "axios"
import Map from "../components/Map"

const Search = ({ data })=>{
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy")

  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} Guests`}/>

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">300+ Stays - {range} - for {noOfGuests} Guests</p>
          <h1 className="text-3xl mt-2 mb-6 font-semibold">Stays in {location}</h1>

          <div className="hidden lg:inline-flex text-gray-800 space-x-3 mb-5 whitespace-nowrap">
            <p className="button">Canelation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          {data.map((item, i) => <CardInfoItem key={i} item={item} />)}
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map places={data}/>
        </section>
      </main>

      <Footer />
    </div>
)}

export default Search

export const getServerSideProps = async ()=>{
  const URL = 'https://links.papareact.com/isz'

  const { data } = await axios(URL)

  return {
    props:{
      data,
    }
  }

}
