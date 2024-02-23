import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const baseUrl = "https://blogtest.emdb.online/api";
const token1="3|dmp1jetJrpMmz8HSUQGnamVheomzQl2Lpu20X29scd3cac73"


const Articles = () => {

  const [latestArticles,setLatestArticles]=useState([])

  const router=useRouter()

  useEffect(()=>{

    const ls = typeof window != "undefined" ? window.localStorage : null;
    const token = ls?.getItem("token");

    axios.get(`${baseUrl}/articles`,{
      headers:{
        Authorization:`Bearer ${token1}`
      }
    }).then(res=>setLatestArticles(res.data.articles))
  },[])


  const manageDateFormate = (date) => {
    const newDate = new Date(date);
    const dateString = newDate.toDateString();
    const dateArray = dateString.split(" ");
    const day = dateArray[0];
    const currentDate = dateArray[2];
    const month = dateArray[1];
    const year = dateArray[3];

    return `${day},${currentDate}th ${month},${year}`;
  };
    
  return (
    // <Center>
      
     <>
      <div className="flex my-2 border-b-2 border-gray-500 mx-3 md:mx-0">
        <div className="bg-gray-500 px-3 py-2 text-white font-bold">
          Latest Articles
        </div>
      </div>
      {/* content */}
      <div className="my-2 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 items-center justify-between gap-3 px-3 md:px-0 gap-y-7">
        {
          !latestArticles.length>0 && 
          <div className="animate-pulse h-[1000px] w-[1080px] bg-gray-300"/>
        }
      
      {
            latestArticles.map(article=>(
                <div
                
                key={article.id}
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                
                className="flex flex-col justify-between gap-2 w-[100%]  py-3 px-3 cursor-pointer rounded-md">
                <div onClick={()=>{
                  router.push(`/ArticleDetails/${article.id}`)
                }} className=" w-[100%] h-[250px] ">
                  <img className="w-[100%] h-full" src={article?.thumbnail} alt="" />
                </div>
    
                <span
                  className={`px-1 `}>
                  {`${article?.title.slice(0,35)}....`}
                </span>
                <span className="px-1 pb-1">
                  {manageDateFormate(article?.created_at)}
                </span>
              </div>
            ))
         }
        </div>
     </>
     
    // </Center>
  )
}

export default Articles
