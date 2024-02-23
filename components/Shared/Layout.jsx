import { useRouter } from "next/router";
import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { ImFilm } from "react-icons/im";
import { MdOndemandVideo } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import Center from "./Center";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
  const [mobileNavOpen,setMobileNavOpen]=useState(false)
  const router=useRouter()
  return (
    <div>
     
        <Header/> 
        <div className="block md:hidden px-3 my-5 cursor-pointer mx-auto">
          <span onClick={()=>{
            setMobileNavOpen(!mobileNavOpen)
          }} className="bg-purple-700 flex items-center  gap-3 px-3 py-2 text-white font-bold">
            <CgMenuGridR className="text-lg"/>
            <span>See Menu</span></span>

            {/* dropdown */}
            <div className={`${mobileNavOpen ?"bg-purple-700 rounded shadow-lg px-12 py-12 mt-3":"opacity-0 px-0 py-0"} transition-all duration-300 ease-in-out absolute z-50 w-[94%] `}>
              <div className=" text-center font-bold">
                {/* nav */}
                <div onClick={()=>router.push("/")} className="my-5 border-b-2 border-black ">
                  <div className="flex items-center  gap-3">
                  <FaHome />
                    <span>Home</span>
                  </div>
                </div>
                <div  onClick={()=>router.push("/Movies")} className="my-5 border-b-2 border-black">
                  <div className="flex items-center  gap-3">
                  <ImFilm />
                    <span>Movies</span>
                  </div>
                </div>
                <div  onClick={()=>router.push("/WebSeries")} className="my-5 border-b-2 border-black">
                  <div className="flex items-center  gap-3">
                  <MdOndemandVideo />
                    <span>TV Series</span>
                  </div>
                </div>
                <div  onClick={()=>router.push("/Action")} className="my-5 border-b-2 border-black">
                  <div className="flex items-center  gap-3">
                  <FaCalendarAlt />
                    <span>Upcoming</span>
                  </div>
                </div>
                <div  onClick={()=>router.push("/WritingBlog")} className="my-5 border-b-2 border-black">
                  <div className="flex items-center  gap-3">
                  <TfiWrite />
                    <span>Write Blog</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <Navbar />
        <Center>{children}</Center>
        <Footer /> 
      
    </div>
  );
};

export default Layout;
