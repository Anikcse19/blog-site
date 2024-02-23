import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SectionSlider from "../Slider/SectionSlider";


const baseUrl = "https://blogtest.emdb.online/api";
const token1="3|dmp1jetJrpMmz8HSUQGnamVheomzQl2Lpu20X29scd3cac73"

const WebSeriesIntroSection = () => {
  const [isHover, setIshover] = useState({
    value: null,
    state: false,
  });

  const [webSeries, setWebSeries] = useState([]);
  const [suggestionWebSeries, setSuggetionWebSeries] = useState([]);

  const router=useRouter()

  useEffect(() => {
    const ls = typeof window != "undefined" ? window.localStorage : null;
    const token = ls?.getItem("token");

    //get bannerSlider articles
    axios
      .get(`${baseUrl}/articles?category_id=2`, {
        headers: {
          Authorization: ` Bearer ${token1}`,
        },
      })
      .then((res) => setWebSeries(res.data.articles));

   

    // get suggestions articles
    axios
      .get(`${baseUrl}/films/suggestions?category_id=2`, {
        headers: {
          Authorization: ` Bearer ${token1}`,
        },
      })
      .then((res) => setSuggetionWebSeries(res.data.films));
  }, []);

  const reverseSuggestionWebSeries = suggestionWebSeries.slice().reverse();


  
  return (
    // <Center>
      <div className="my-2 flex flex-col md:flex-row items-center justify-between gap-3 px-3 md:p-0">
        {/* slider */}
        <div className="w-[100%] md:w-[60%] bg-white p-3 md:p-2 rounded">
          {/* <SectionCarousel slides={slides}/> */}
          {
            !webSeries.length>0 && 
            <div className="h-[550px] w-full bg-gray-400 animate-pulse"/>
            
          }
          <SectionSlider slides={webSeries}/>
        </div>



        {/* suggestion */}
        <div className="w-[100%] md:w-[40%] px-3 md:p-0 flex flex-col gap-2">
        {
          !suggestionWebSeries.length>0 && <div className="w-full h-[550px] animate-pulse ">
            <div className="w-full bg-gray-400 h-full">
             
            </div>
          </div>
        }
          {reverseSuggestionWebSeries.map((suggestionWebSeries) => (
             <div
             key={suggestionWebSeries.id}
             style={{
               boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
             }}
             onMouseEnter={() =>
               setIshover({ value: suggestionWebSeries.id, state: true })
             }
             onMouseLeave={() => setIshover({ value: null, state: false })}
             onClick={()=>{
              router.push(`/ArticleDetails/${suggestionWebSeries.id}`)
             }}
             className="flex items-center gap-2 cursor-pointer rounded-sm p-1"
           >
             <div className=" w-[40%]">
               <img className="w-full h-[100px]" src={suggestionWebSeries?.thumbnail} alt="" />
             </div>
             <div className="w-[60%]">
               <span
                 className={`text-[16px] font-[500] ${
                   isHover.value === suggestionWebSeries.id && "text-red-600"
                 }`}
               >{`${suggestionWebSeries?.title}`}</span>
               
             </div>
           </div>
          ))}
        </div>
      </div>
    // </Center>
  );
};

export default WebSeriesIntroSection;
