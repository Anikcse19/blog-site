/* eslint-disable react-hooks/rules-of-hooks */
import DashboardLayout from "@/components/Shared/DashboardLayout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const baseUrl = "https://blogtest.emdb.online/api";
const token1="3|dmp1jetJrpMmz8HSUQGnamVheomzQl2Lpu20X29scd3cac73"
const ls = typeof window !== "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");

const index = () => {
  const router = useRouter();

  const [articles,setArticles]=useState([])

  const fetchArticles=()=>{
    axios
      .get(`${baseUrl}/articles`, {
        headers: {
          Authorization: `Bearer ${token1}`,
        },
      })
      .then((res) => setArticles(res.data.articles));
  }

  useEffect(() => {
    fetchArticles()
  }, []);

  console.log(articles);

  const handleArticleDelete=(id)=>{
    fetch(`${baseUrl}/articles/destroy/${id}`,{
      method:"POST",
      headers:{
        Accept:"application/json",
        Authorization:`Bearer ${token1}`
      }
    }).then(res=>res.json()).then(data=>{
      if(data.msg==='success'){
        fetchArticles()
      }
    })
  }

  const manageDateFormate=(date)=>{
    const newDate=new Date(date)
    const dateString=newDate.toDateString()
    const dateArray=dateString.split(" ")
    const day=dateArray[0]
    const currentDate=dateArray[2]
    const month=dateArray[1]
    const year=dateArray[3]
    

    return `${day},${currentDate}th ${month},${year}`
  }
  return (
    <DashboardLayout>
      <div className="flex gap-3 items-center">
        <span className="text-blue-600 text-[28px]">All Blogs</span>
        <span
          onClick={() => router.push("/Dashboard/AddNewBlog")}
          className="border-2 border-blue-600 px-5 py-1 rounded-md cursor-pointer"
        >
          Add New
        </span>
      </div>
      {/* main body start */}
      <div className="flex flex-col gap-y-10 items-center mt-10">
        {/* search and filer option start*/}
        <div className=" px-2 flex justify-between ">
          <div className="flex flex-col md:flex-row gap-3 md:items-center justify-around w-full">
            <div className="flex items-center gap-3">
              <select className="px-10 py-1 rounded" name="" id="">
                <option value="">Bulk Actions</option>
              </select>
              <span className="border border-blue-500 px-3 rounded text-blue-500 cursor-pointer">
                Apply
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
              <select className="px-10 py-1 rounded" name="" id="">
                <option value="">All Dates</option>
              </select>
              <div className="flex items-center gap-4">
                <select className="px-10 py-1 rounded" name="" id="">
                  <option value="">All Categories</option>
                </select>
                <span className="border border-blue-500 px-3 rounded text-blue-500 cursor-pointer">
                  Apply
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* search and filer option end*/}

        {/* show table with available blogs start */}
        <div className=" w-[100%] mt-5 border-2 border-blue-500">
          <table className="w-full">
            <thead className="text-base bg-gray-400 w-full">
              <tr className="border-b border-blue-900">
                <th scope="col" className="px-10 py-3">
                  Title
                </th>
                <th scope="col" className="px-10 py-3">
                  Thumbnail
                </th>
                <th scope="col" className="px-10 py-3">
                  Category
                </th>
                <th scope="col" className="px-10 py-3">
                  Genres
                </th>
                <th scope="col" className="px-10 py-3">
                  Tag
                </th>
                <th scope="col" className="px-10 py-3">
                  Created
                </th>
                <th scope="col" className="px-10 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                articles.map(article=>{
                  console.log(article.thumbnail);
                  return (
                    (
                      <tr key={article.id} className="border-b border-black text-[14px]">
                        <td className="px-3 py-3 text-center">{article?.title}</td>
                        <td className="px-3 py-3 text-center">
                          <span className="w-full flex justify-center"><img className="w-16 h-12 object-cover object-contain" src={article?.thumbnail} alt="" /></span>
                        </td>
                        <td className="px-3 py-3 text-center">
                          {article?.category_id==1?"Movies":article?.category_id==2?"TV Series":"Web Film"}
                        </td>
                        <td className="px-3 py-3 text-center">
                          {article?.genres.map((genre,i)=>(
                            <div key={i}>{!genre?"N/A":genre?.title}</div>
                          ))}
                        </td>
                        <td className="px-3 py-3 text-center">
                          {article?.tags}
                        </td>
                        <td className="px-3 py-3 text-center">
                          {manageDateFormate(article?.created_at)}
                        </td>
                        <td className="px-3 py-3 text-center"><span onClick={()=>handleArticleDelete(article?.id)} className="bg-red-500 px-3 py-1 text-white font-bold rounded cursor-pointer">Delete</span></td>
                      </tr>
                    )
                  )
                })
              }
            </tbody>
          </table>
        </div>

        {/* show table with available blogs end */}
      </div>
      {/* main body end */}
    </DashboardLayout>
  );
};

export default index;
