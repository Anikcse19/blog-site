import HomeBanner from "@/components/HeroSection/HomeBanner";
import Articles from "@/components/LatestArticles/Articles";
import MoviesIntroSection from "@/components/MoviesEssentials/MoviesIntroSection";
import MoviesSubNav from "@/components/MoviesEssentials/MoviesSubNav";
import Layout from "@/components/Shared/Layout";
import Upcoming from "@/components/UpcomingEssentials/Upcoming";
import WebSeriesIntroSection from "@/components/WebSeriesEssentials/WebSeriesIntroSection";
import WebSeriesSubNav from "@/components/WebSeriesEssentials/WebSeriesSubNav";

export default function Home() {
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
