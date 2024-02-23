import { StateContext } from "@/ContextApi/StateContext/StateContext";
import HomeBanner from "@/components/HeroSection/HomeBanner";
import Articles from "@/components/LatestArticles/Articles";
import MoviesIntroSection from "@/components/MoviesEssentials/MoviesIntroSection";
import MoviesSubNav from "@/components/MoviesEssentials/MoviesSubNav";
import Layout from "@/components/Shared/Layout";
import Upcoming from "@/components/UpcomingEssentials/Upcoming";
import WebSeriesIntroSection from "@/components/WebSeriesEssentials/WebSeriesIntroSection";
import WebSeriesSubNav from "@/components/WebSeriesEssentials/WebSeriesSubNav";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Home() {

  const {isAuthenticate}=useContext(StateContext)
  const router=useRouter()
  // const [token,setToken]=useState("")
  // const router=useRouter()
 
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const ls = window.localStorage;
  //     const token = ls.getItem("token");
  //     setToken(token);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!token && typeof window !== "undefined") {
  //     router.push('/Auth/Registration');
  //     return
  //   }
  // }, [token, router]);

 


  
  return (
    <>
     <Layout>
      <HomeBanner />

      {/* advertise */}
      
        <div className="my-2 px-3 md:p-0">
          <img src="/image/homePageAds.png" alt="" />
        </div>
     
      <MoviesSubNav />
      <MoviesIntroSection />

      {/* advertise */}
      
      <div className="my-2 px-3 md:p-0">
          <img src="/image/homePageAds.png" alt="" />
        </div>
      
      <WebSeriesSubNav />
      <WebSeriesIntroSection />

     {/* advertise */}
      
     <div className="my-2 px-3 md:p-0">
          <img src="/image/homePageAds.png" alt="" />
        </div>
     
      <Upcoming />

      {/* advertise */}
     
        <div className="my-2 px-3 md:p-0">
          <img src="/image/homePageAds.png" alt="" />
        </div>
     
      <Articles/>
       {/* advertise */}
      
        <div className="my-2 px-3 md:p-0">
          <img src="/image/homePageAds.png" alt="" />
        </div>
      
     </Layout>
    </>
  );
}
