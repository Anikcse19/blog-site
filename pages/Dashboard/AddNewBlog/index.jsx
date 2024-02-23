/* eslint-disable react-hooks/rules-of-hooks */
// const { default: Layout } = require("@/components/Shared/Layout");
import DashboardLayout from "@/components/Shared/DashboardLayout";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
// import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const baseUrl = "https://blogtest.emdb.online/api";
const token1="3|dmp1jetJrpMmz8HSUQGnamVheomzQl2Lpu20X29scd3cac73"
const ls = typeof window !== "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");

const index = () => {
  const editor = useRef(null);
  const [blogTitle, setBlogTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategories, setSelectedCategories] = useState();
  const [selectedGenreId, setSelectedGenreId] = useState([]);
  const [selectedGenreITitle, setSelectedGenreITitle] = useState([]);
  const [selectedGenres,setSelectedGenres]=useState([])
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [genres, setGenres] = useState([]);
  const [categories, setCategories] = useState([]);


  const router=useRouter()

  console.log(selectedGenres)

  useEffect(() => {
    axios
      .get(`${baseUrl}/genres`, {
        headers: {
          Authorization: `Bearer ${token1}`,
        },
      })
      .then((res) => setGenres(res.data.genres));

    axios
      .get(`${baseUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${token1}`,
        },
      })
      .then((res) => setCategories(res.data.categories));
  }, []);

  const selectedIds=selectedGenres.map(gen=>gen.id)


  const handlePost = (e) => {
    e.preventDefault();

    const file = e.target.images.files[0];

    const blogData={
      title:blogTitle,
      thumbnail:file,
      body:content,
      category_id:selectedCategories,
      genres:selectedIds.join(','),
      tags:tags.join(',')
    }

    console.log("data",blogData);
    
    const formData = new FormData();

    formData.append("title", blogData.title);
    formData.append("thumbnail", blogData.thumbnail);
    formData.append("body", blogData.body);
    formData.append("genres", blogData.genres);
    formData.append("category_id",blogData.category_id)
    formData.append("tags", blogData.tags);

    console.log(formData, "data");
   

    fetch(`${baseUrl}/articles/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token1}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.msg==="success"){
          
          toast.success('New blog Added Successfully',{
            position:"top-right"
          })
          router.push('/Dashboard/AllBlogs')
        }
      });
  };

  console.log(selectedGenreId);

  return (
    <DashboardLayout>
      {/* page title */}
      <div className="mb-6">
        <h1 className="text-2xl border-4 px-2 py-1 border-blue-700">
          Add New Blog
        </h1>
      </div>

      {/* blog main body---> what's on your mind */}
      <div className="px-5 py-5 rounded-md bg-white ">
        <h1 className="text-base md:text-lg lg:text-2xl font-bold">
          What&apos;s on your mind??
        </h1>

        {/* blog content */}
        <form onSubmit={handlePost}>
          <div className="mt-10 flex flex-col gap-5">

            {/* blog title start */}
            <div className="flex flex-col gap-3 ">
              <label
                htmlFor="title"
                className=" text-base md:text-lg lg:text-xl font-semibold"
              >
                Tilte
              </label>
              <div className="w-full l">
                <input
                  onChange={(e) => setBlogTitle(e.target.value)}
                  placeholder="Write Blog Title"
                  type="text"
                  className="w-[100%] md:w-[60%] outline-none border-2 border-blue-700 rounded-lg px-5 py-5"
                />
              </div>
            </div>
            {/* blog title end */}

            {/* blog thumbnail start*/}
            <div className="flex flex-col gap-3 ">
              <label
                htmlFor="thumbnail"
                className=" text-base md:text-lg lg:text-xl font-semibold"
              >
                Add Thumbnail
              </label>
              <div className="w-full l">
                <input
                  type="file"
                  name="images"
                  className="w-[100%] md:w-[60%] outline-none border-2 border-blue-700 rounded-lg px-5 py-5"
                />
              </div>
            </div>
            {/* blog thumbnail end*/}

            {/* blog details start */}
            <div>
              <label
                htmlFor="title"
                className=" text-base md:text-lg lg:text-xl font-semibold"
              >
                Blog Details
              </label>
              <JoditEditor
                className="border border-blue-700 bg-red-600 mt-3"
                ref={editor}
                value={content}
                onChange={(newContent) => {
                  setContent(newContent);
                }}
              />
            </div>
             {/* blog details end */}

            {/*view selected category start */}
            {/* <div className="my-2">
              {selectedCategories?.length > 0 && (
                <span className="mb-1">Added Categories</span>
              )}
              <div className="flex gap-2 items-center">
                { selectedCategories?.length>0 && selectedCategories.map((category, i) => (
                  <div
                    className="border border-blue-700 px-4 py-1 flex gap-2 items-center"
                    key={i}
                  >
                    <span>{category}</span>
                    <span
                      onClick={() => {
                        const filteredCat = selectedCategories?.filter(
                          (cat) => cat !== category
                        );
                        setSelectedCategories(filteredCat);
                      }}
                      className="bg-red-500 px-1 cursor-pointer text-white"
                    >
                      x
                    </span>
                  </div>
                ))}
              </div>
            </div> */}
            {/*view selected category end */}

            {/*select category start */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="categories"
                className=" text-base md:text-lg lg:text-xl font-semibold"
              >
                Select Category 
              </label>
              <div>
                <select
                  className="px-5 py-2 border border-blue-700"
                  name=""
                  id=""
                  onChange={(e) =>
                    // const existCat=categories.find
                    setSelectedCategories(e.target.value)
                  }
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
             {/*select category end */}


            {/* Genres */}

            {/* show */}
            <div className="my-b">
              {selectedGenres?.length > 0 && (
                <span className="mb-1 font-semibold">Added Genre</span>
              )}
              <div className="flex gap-2 items-center">
                {
                selectedGenres?.length > 0 && selectedGenres.map((selectedGenre, i) => (
                  <div
                    className="border border-blue-700 px-4 py-1 flex gap-2 items-center"
                    key={selectedGenre.id}
                  >
                    <span>{selectedGenre.title}</span>
                    <span
                      onClick={() => {      
                        console.log("1",selectedGenre);                 
                        const filteredGenre = selectedGenres?.filter(
                          (cat)  =>{ 
                            console.log("2",cat);
                           return cat.id != selectedGenre.id
                          }
                        );
                        console.log("filtered",filteredGenre);
                        setSelectedGenres(filteredGenre);
                      }}
                      className="bg-red-500 px-1 cursor-pointer text-white"
                    >
                      x
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* add */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="categories"
                className=" text-base md:text-lg lg:text-xl font-semibold"
              >
                Add Genre
              </label>
              <div>
                <select
                  className="px-5 py-2 border border-blue-700"
                  name=""
                  id=""
                  onChange={(e) =>setSelectedGenres(prev=>[JSON.parse(e.target.value),...prev])
                    // const existCat=categories.find
                    // {setSelectedGenreITitle((prev)=>[e.target.value.title,...prev])
                    // setSelectedGenreId((prev) => [Number(e.target.value.id), ...prev])}
                  }
                >
                  {genres.map((genre) => (
                    <option key={genre.id} value={JSON.stringify({title:genre.title,id:genre.id})}>
                      {genre.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* show tags */}
            <div className="my-b">
              {tags?.length > 0 && (
                <span className="mb-1 font-semibold">Added tags</span>
              )}
              <div className="flex gap-2 items-center">
                {
                tags?.length > 0 && tags.map((tag, i) => (
                  <div
                    className="border border-blue-700 px-4 py-1 flex gap-2 items-center"
                    key={i}
                  >
                    <span>{tag}</span>
                    <span
                      onClick={() => {              
                        console.log(tag);         
                        const filteredTag = tags?.filter(
                          (t)  =>{ 
                            console.log(t)
                           return t != tag
                          }
                        );
                        setTags(filteredTag);
                      }}
                      className="bg-red-500 px-1 cursor-pointer text-white"
                    >
                      x
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* add tags */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="tags"
                className=" text-base md:text-lg lg:text-xl font-semibold"
              >
                Add Tags
              </label>
              <div className="flex gap-2 items-center">
                <input
                  onChange={(e) => setTag(e.target.value)}
                  value={tag}
                  type="text"
                  placeholder="ex: #romantic_movie"
                  className="px-5 py-2 outline-none rounded border border-blue-600"
                />
                <span
                  onClick={() => {
                    setTags((prev) => [tag, ...prev])
                    setTag("")
                  }}
                  className="bg-blue-500 px-12 py-2 text-white rounded-md"
                >
                  Add
                </span>
              </div>
            </div>

            {/* submit button */}
            <div>
              <button
                type="Submit"
                className="bg-purple-700 px-12 py-3 rounded shadow-md text-white font-bold"
              >
                Post
              </button>
            </div>
          </div>
        </form>

        {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      </div>
    </DashboardLayout>
  );
};

export default index;
