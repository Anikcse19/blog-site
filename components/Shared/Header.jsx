import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaSignInAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

import Center from "./Center";

const Header = () => {
  const [openProfileDropDown, setOpenProfileDropDown] = useState(false);
  const [token,setToken]=useState("")
  useEffect(()=>{
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const token = ls?.getItem("token");
    setToken(token)
  },[])
  const router = useRouter();
  return (
    <div className="bg-white py-2">
      <Center>
        <div className="flex justify-between items-center mx-3 md:mx-0">
          {/* logo */}
          <div onClick={() => router.push("/")} className="">
            <img className="w-[100px] md:w-full" src="/image/logo.png" alt="" />
            {/* <h1>IMBD MOVIES</h1> */}
          </div>
          {/* search bar */}
          <div className="w-[40%] md:flex items-center border border-black rounded-md overflow-hidden hidden">
            <input
              className="px-3 outline-none w-full"
              type="text"
              placeholder="Search here"
            />
            <span className="bg-red-600 px-4 py-2 text-white">
              <IoSearch className="text-xl" />
            </span>
          </div>
          {/*profile button  */}
          <div className="relative">
            <span
              onClick={() => setOpenProfileDropDown(!openProfileDropDown)}
              className="text-2xl md:text-4xl cursor-pointer"
            >
              <CgProfile />
            </span>

            {/* dropdown */}
            <div
              className={`${
                openProfileDropDown
                  ? "bg-black text-white   px-12 py-5  w-[200px] z-50"
                  : "opacity-0 px-0 py-0"
              } absolute right-0 top-12 transition-all duration-300 `}
            >
              <div className="flex flex-col gap-8">
                <div onClick={()=>router.push('/Dashboard/AllBlogs')} className="flex items-center gap-4 cursor-pointer hover:text-purple-500 border-b-2 pb-2 hover:border-purple-500">
                  <span>
                    <MdDashboard />
                  </span>
                  <span>Dashboard</span>
                </div>
                {
                  token ?( 
                  <div onClick={()=>{
                    localStorage.removeItem("token")
                    router.push("/Auth/Login")
                  }} className="flex  items-center gap-4 cursor-pointer hover:text-purple-500 border-b-2 pb-2 hover:border-purple-500">
                  <span>
                    <FaSignInAlt />
                  </span>
                  <span>LogOut</span>
                </div>
                ):(
                <div onClick={()=>router.push('/Auth/Login')} className="flex  items-center gap-4 cursor-pointer hover:text-purple-500 border-b-2 pb-2 hover:border-purple-500">
                  <span>
                    <FaSignInAlt />
                  </span>
                  <span>Sign in</span>
                </div>
                )
                }
                
               
              </div>
            </div>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Header;

{
  /* <div>
            <Link
              href=""
              className="bg-red-600 px-3 py-1 md:px-6 md:py-2 rounded md:rounded-md text-white text-base md:text-lg font-bold">
              Sign in
            </Link>
          </div> */
}
