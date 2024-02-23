import { NavContext } from "@/ContextApi/NavContext/NavContext"
import { useRouter } from "next/router"
import { useContext } from "react"

const DashboardSidebarMobile = () => {
    const router=useRouter()
    const {setIsMobileNavOpen}=useContext(NavContext)

  return (
    <div className="bg-slate-900  py-6 min-h-screen px-6 w-full flex fixed z-50 flex-col gap-10 ">
         {/* right nav start */}
         <div className="text-white font-bold flex flex-col items-center gap-3">
          <div onClick={() => {router.push("/")
        setIsMobileNavOpen(false)}} className="border border-green-500 px-2 py-2 cursor-pointer" >
            <span className="tracking-widest text-xl font-bold text-yellow-300">IMDB</span><span className="tracking-widest text-xl font-bold text-red-600"> MOVIES</span>
            {/* <h1>IMBD MOVIES</h1> */}
          </div>
          
        </div>
        {/* left nav start*/}
        <div className="flex flex-col justify-between gap-4 text-white font-semibold">
        
          <div onClick={()=>{router.push('/Dashboard/AllBlogs')
           setIsMobileNavOpen(false)}} className={
            `${router.pathname.includes("/AllBlogs") && "text-green-300 bg-stone-500 border-l-8 border-green-500 rounded"}  cursor-pointer px-6 py-1`
          }>
            <span>All Blogs</span>
          </div>
          <div onClick={()=>{router.push('/Dashboard/AddNewBlog')
           setIsMobileNavOpen(false)}}  className={
            `${router.pathname.includes("/AddNewBlog") && "text-green-300 bg-stone-500 border-l-8 border-green-500  rounded"}  cursor-pointer px-6 py-1`
          }>
            <span>Add New Blog</span>
          </div>
          <div onClick={()=>{router.push('/Dashboard/Genres')
           setIsMobileNavOpen(false)}}   className={
            `${router.pathname.includes("/Genres") && "text-green-300 bg-stone-500 border-l-8 border-green-500  rounded"}  cursor-pointer px-6 py-1`
          }>
            <span>Genres</span>
          </div>
          
        </div>
        {/* left nav end */}

       
        {/* right nav end */}
      </div>
  )
}

export default DashboardSidebarMobile
