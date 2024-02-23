/* eslint-disable react-hooks/rules-of-hooks */
import { StateContext } from "@/ContextApi/StateContext/StateContext";
import DashboardLayout from "@/components/Shared/DashboardLayout";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const baseUrl = "https://blogtest.emdb.online/api";
const token1="3|dmp1jetJrpMmz8HSUQGnamVheomzQl2Lpu20X29scd3cac73"
const ls = typeof window !== "undefined" ? window.localStorage : null;
const token = ls?.getItem("token");

const index = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const {categories, setCategories} = useContext(StateContext);

  const fetchCategories = () => {
    axios
      .get(`${baseUrl}/categories`, {
        headers: {
          Authorization: `Bearer ${token1}`,
        },
      })
      .then((res) => setCategories(res.data.categories));
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  console.log(categories);

  const handleCategoryCreate = () => {
    const data = { title: title };
    fetch(`${baseUrl}/categories/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token1}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          fetchCategories();
          setTitle("");
        }
      });
  };

  const handleCategoryDelete = (id) => {
    console.log("click");
    fetch(`${baseUrl}/categories/destroy/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token1}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        fetchCategories();
      });
  };
  return (
    <DashboardLayout>
      {/* page title */}
      <div className="mb-6">
        <h1 className="text-2xl border-4 px-2 py-1 border-blue-700">
          Categories
        </h1>
      </div>
      {/* search category start */}
      <div className="flex items-center gap-2 mb-3">
        <input
          placeholder="search"
          className="outline-none border border-blue-600 px-4 py-1"
          type="text"
        />
        <span className="px-5 py-1 bg-blue-600 border border-white text-white font-bold cursor-pointer">
          Search Category
        </span>
      </div>
      {/* search category end */}

      <div className="grid grid-cols-4  gap-3">
        <div className="col-span-2 ">
          <div className="border border-blue-600">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500">
                  <th className="px-3 py-2 border-r border-black">Name</th>
                  <th className="px-3 py-2 border-r border-black">Slug</th>
                  <th className="px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories?.length > 0 &&
                  categories.map((category) => (
                    <tr
                      key={category.id}
                      className="bg-blue-300 border-b border-black"
                    >
                      <td className="px-3 py-2 text-center border-r border-black">
                        {category.title}
                      </td>
                      <td className="px-3 py-2 text-center border-r border-black">
                        {category.slug}
                      </td>
                      <td className="px-3 py-2 text-center border-r border-black">
                        <span
                          onClick={() => handleCategoryDelete(category.id)}
                          className="bg-red-500 px-2 py-1 text-white font-bold rounded shadow-md cursor-pointer"
                        >
                          Delete
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-2 self-start flex items-center gap-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 ">
              <label className="font-bold" htmlFor="">
                Name
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="px-5 py-2 outline-none"
                placeholder="type category title"
                type="text"
                name="genre_title"
                id=""
              />
            </div>

            <span
              onClick={handleCategoryCreate}
              className="px-5 py-2 text-center rounded shadow-lg border border-white bg-blue-500 text-white font-bold cursor-pointer"
            >
              Save Category
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default index;
