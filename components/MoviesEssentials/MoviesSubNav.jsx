import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";


const baseUrl='https://blogtest.emdb.online/api'
const token1="3|dmp1jetJrpMmz8HSUQGnamVheomzQl2Lpu20X29scd3cac73"

const MoviesSubNav = () => {
  const [openMoviesSubNav,setOpenMoviesSubNav]=useState(false)
  const [genres,setGenres]=useState([])

  useEffect(()=>{
    const ls=typeof window!="undefined"?window.localStorage:null
    const token=ls?.getItem("token")


    //get genres
    axios.get(`${baseUrl}/genres`,{
      headers:{
        Authorization:` Bearer ${token1}`
      }
    }).then(res=>setGenres(res.data.genres))


  },[])

 
  return (
    // <Center>
    <div className="flex items-center justify-between my-2 border-b-2 border-red-600 mx-3 md:mx-0">
      <div className="bg-red-600 px-3 py-2 text-white font-bold">Movies</div>
      {/* for mobile version  */}
      <div className="block md:hidden relative">
        <div onClick={()=>setOpenMoviesSubNav(!openMoviesSubNav)} className="flex gap-2 items-center">
          {
            openMoviesSubNav? (

              <IoIosArrowBack className="text-purple-500 font-semibold text-lg"/>
            ):(

              <IoIosArrowDown className="text-purple-500 font-semibold text-lg"/>
            )
          }
          <span className="font-semibold text-purple-500">See Options</span>
        </div>
          {/* dropdown */}
          <div className={`${openMoviesSubNav ? "bg-black opacity-80 py-5 px-16 rounded-md ":"px-0 py-0 opacity-0"} transition-all duration-500 ease-in-out absolute top-8 right-0 z-50`}>
            {/* all navs */}
              <div className="flex flex-col justify-start items-start gap-4 ">
                {
                  genres.map((genre,i)=>(
                    <div className="border-b-2 border-white " key={i}>
                      <span className="text-white font-bold ">{genre?.title}</span>
                    </div>
                  ))
                }
              </div>
          </div>
      </div>

      {/* big screen nav */}
      <div className="hidden flex-grow px-12 py-2 md:flex justify-between md:justify-evenly  items-center gap-2">
        {genres.map((genre, index) => (
          <Link className="font-[500]" key={index} href="">
            {genre?.title}
          </Link>
        ))}
      </div>
    </div>
    // </Center>
  );
};

export default MoviesSubNav;
