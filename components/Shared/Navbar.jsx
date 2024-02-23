import { useRouter } from "next/router";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { GiPin } from "react-icons/gi";
import { ImFilm } from "react-icons/im";
import { MdOndemandVideo } from "react-icons/md";

import Center from "./Center";

const Navbar = () => {

  const router=useRouter()

  const {pathname}=router

  // console.log(pathname)
  return (
    <Center>
      <div className="hidden md:flex justify-evenly bg-white my-2 p-1">
        <div onClick={()=>router.push("/")} className={`flex items-center justify-center gap-4 cursor-pointer ${pathname==="/" ? "text-red-500":"hover:text-red-300"}  px-5 py-2 rounded-lg`}>
          <FaHome />
          <span className="text-[18px] font-semibold">Home</span>
        </div>
        <div
        onClick={()=>{
          router.push('/Movies')
        }}
        className={`flex items-center justify-center gap-4 cursor-pointer ${pathname.includes("/Movies") ? "text-red-500":"hover:text-red-300"}  px-5 py-2 rounded-lg`}>
          <ImFilm />
          <span className="text-[18px] font-semibold">Movies</span>
        </div>
        <div onClick={()=>{
          router.push('/Action')
        }} className={`flex items-center justify-center gap-4 cursor-pointer ${pathname.includes("/Action") ? "text-red-500":"hover:text-red-300"}  px-5 py-2 rounded-lg`}>
          <MdOndemandVideo />
          <span className="text-[18px] font-semibold">TV Series</span>
        </div>
        <div onClick={()=>{
          router.push('/WebSeries')
        }} className={`flex items-center justify-center gap-4 cursor-pointer ${pathname.includes("/WebSeries") ? "text-red-500":"hover:text-red-300"}  px-5 py-2 rounded-lg`}>
          <FaCalendarAlt />
          <span className="text-[18px] font-semibold">Upcoming</span>
        </div>
        
        <div className="flex items-center gap-4 cursor-pointer  px-5 py-2 rounded-lg">
          <GiPin />
          <span className="text-[18px] font-semibold">Top 250 Movies</span>
        </div>
      </div>
    </Center>
  );
};

export default Navbar;
