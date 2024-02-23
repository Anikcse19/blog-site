import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BannerSlider from "../Slider/BannerSlider";
// import { Carousel } from "react-responsive-carousel";

const baseUrl = "https://blogtest.emdb.online/api";
const token1="3|dmp1jetJrpMmz8HSUQGnamVheomzQl2Lpu20X29scd3cac73"

const HomeBanner = () => {
  const router = useRouter();
  const [isHover, setIshover] = useState({
    value: null,
    state: false,
  });

  const [articles, setArticles] = useState([]);
  const [suggestionMovies, setSuggetionMovies] = useState([]);

  useEffect(() => {
    const ls = typeof window != "undefined" ? window.localStorage : null;
    const token = ls?.getItem("token");

    //get bannerSlider articles
    axios
      .get(`${baseUrl}/articles`, {
        headers: {
          Authorization: ` Bearer ${token1}`,
        },
      })
      .then((res) => setArticles(res.data.articles));

    console.log("artilces", articles);

    // get suggestions articles
    axios
      .get(`${baseUrl}/films/suggestions`, {
        headers: {
          Authorization: ` Bearer ${token1}`,
        },
      })
      .then((res) => setSuggetionMovies(res.data.films));
  }, []);

  const reverseSuggestionMovies = suggestionMovies.slice().reverse();

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
    <div className="flex flex-col md:flex-row items-center gap-4 my-3">
      {/* slider */}
      <div className="w-[100%] md:w-[70%] px-3 md:p-0  text-white text-[20px]  max-w-[1360px] mx-auto">
        {/* <Carousel slides={slides} /> */}
        {!articles.length > 0 && (
          <div
            role="status"
            class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center w-[700px]"
          >
            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                class="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div class="w-full">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>
        )}
        <BannerSlider slides={articles} />
      </div>

      {/* suggestion */}
     
      <div className="w-[100%] md:w-[30%] h-full px-5 md:px-0 flex flex-col gap-4">
      {
          !suggestionMovies.length>0 && <div className="w-[300px] h-[300px] animate-pulse ">
            <div className="w-full bg-gray-400 h-full">
             
            </div>
          </div>
        }
       
        {reverseSuggestionMovies?.length > 0 &&
          reverseSuggestionMovies.slice(0, 3).map((suggestionMovie) => (
            <div
              key={suggestionMovie.id}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              onMouseEnter={() =>
                setIshover({ value: suggestionMovie.id, state: true })
              }
              onMouseLeave={() => setIshover({ value: null, state: false })}
              onClick={() => {
                router.push(`/ArticleDetails/${suggestionMovie.id}`);
              }}
              className="flex items-center gap-2 cursor-pointer rounded-sm p-1"
            >
              <div className=" w-[40%] h-[100px]">
                <img
                  className="w-full h-full"
                  src={suggestionMovie?.thumbnail}
                  alt=""
                />
              </div>
              <div className="flex-grow flex flex-col gap-1">
                <span
                  className={`text-[16px] font-[500] ${
                    isHover.value === suggestionMovie.id && "text-red-600"
                  }`}
                >{`${suggestionMovie?.title.slice(0, 25)}..`}</span>
                <span className="text-gray-600 text-[14px]">
                  {manageDateFormate(suggestionMovie.created_at)}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
    // </Center>
  );
};

export default HomeBanner;


