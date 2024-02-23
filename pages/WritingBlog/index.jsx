/* eslint-disable react-hooks/rules-of-hooks */
// const { default: Layout } = require("@/components/Shared/Layout");
import Layout from "@/components/Shared/Layout";
import dynamic from "next/dynamic";
// import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
const JoditEditor = dynamic( () => import('jodit-react'), { ssr: false} )



const index = () => {

  const editor = useRef(null);
	const [content, setContent] = useState('');
  return (
    <Layout>
      <div className="my-10 px-5">
        <h1 className="text-base md:text-lg lg:text-2xl font-bold">
          What's on your mind??
        </h1>

        {/* blog content */}
        <div className="mt-10 flex flex-col gap-5">
          {/* blog title */}
          <div className="flex flex-col gap-3">
            <label
              htmlFor="title"
              className=" text-base md:text-lg lg:text-xl font-semibold"
            >
              Tilte
            </label>
            <div className="w-full">
              <input
                placeholder="write blog title"
                type="text"
                className="w-[100%] md:w-[60%] outline-none border-2 border-blue-700 rounded-sm px-5 py-5"
              />
            </div>
          </div>
          {/* blog body */}
          <div>
            <JoditEditor
              className="border border-blue-700"
              ref={editor}
              value={content}
              onChange={(newContent) => {setContent(newContent)}}
            />
          </div>

          {/* submit button */}
          <div>
            <button className="bg-purple-700 px-12 py-3 rounded shadow-md text-white font-bold">Post</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
