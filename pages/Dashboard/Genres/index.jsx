/* eslint-disable react-hooks/rules-of-hooks */
import { StateContext } from "@/ContextApi/StateContext/StateContext";
import DashboardLayout from "@/components/Shared/DashboardLayout";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const baseUrl="https://blogtest.emdb.online/api"
const token1="3|dmp1jetJrpMmz8HSUQGnamVheomzQl2Lpu20X29scd3cac73"
const ls = typeof window !== "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");

const index = () => {
  const [title, setTitle] = useState("");
  const [slug,setSlug]=useState("")
  const {genres,setGenres}=useContext(StateContext)

  const fetchGenres=()=>{
    axios.get(`${baseUrl}/genres`,{
      headers:{
        Authorization:`Bearer ${token1}`
      }
    }).then(res=>setGenres(res.data.genres))
  }
  useEffect(()=>{
    fetchGenres()
  },[title])

  const handleGenreCreate=()=>{
    const data={title:title}
    fetch(`${baseUrl}/genres/create`,{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token1}`,
      },
      body:JSON.stringify(data)
    }).then(res=>res.json()).then(data=>{
      if(data){
        console.log(data);
        fetchGenres()
        setTitle("")
      }
    })
  }

  const handleGenreDelete=(id)=>{
   
    fetch(`${baseUrl}/genres/destroy/${id}`,{
        method:"POST",
        headers:{
            "Accept":"application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token1}`,
        }
    }).then(res=>res.json()).then(data=>{
      fetchGenres()
    })
  }
  return (
    <DashboardLayout>
      {/* page title */}
      <div className="mb-6">
        <h1 className="text-2xl border-4 px-2 py-1 border-blue-700">Genres</h1>
      </div>
      {/* search category start */}
      <div className="flex items-center gap-2 mb-3">
        <input
          placeholder="search"
          className="outline-none border border-blue-600 px-4 py-1"
          type="text"
        />
        <span className="px-5 py-1 bg-blue-600 border border-white text-white font-bold cursor-pointer">
          Search Genre
        </span>
      </div>
      {/* search category end */}

      <div className="grid grid-cols-4  gap-3">
        <div className="col-span-2 ">
          <div className="border border-blue-600 ">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500">
                  <th className="px-3 py-2 border-r border-black">Name</th>
                  <th className="px-3 py-2 border-r border-black">Slug</th>
                  <th className="px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  genres.map(genre=>(
                    <tr key={genre.id} className="bg-blue-300 border-b border-black">
                      <td className="px-3 py-2 text-center border-r border-black">{genre.title}</td>
                      <td className="px-3 py-2 text-center border-r border-black">{genre.slug}</td>
                      <td className="px-3 py-2 text-center border-r border-black">
                        <span onClick={()=>handleGenreDelete(genre.id)} className="bg-red-500 px-2 py-1 text-white font-bold rounded shadow-md cursor-pointer">Delete</span>
                        </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-2 self-start flex items-center gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 ">
            <label className="font-bold" htmlFor="">Name</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="px-5 py-2 outline-none"
              placeholder="type genre title"
              type="text"
              name="genre_title"
              id=""
            />
            </div>
            <span onClick={handleGenreCreate} className="px-5 py-2 text-center rounded shadow-lg border border-white bg-blue-500 text-white font-bold cursor-pointer">
              Save Genre
            </span>
          </div>
          
          
        </div>
      </div>
    </DashboardLayout>
  );
};

export default index;
