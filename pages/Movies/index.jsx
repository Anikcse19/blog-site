import ArticleCard from "@/components/Shared/Cards/ArticleCard";
import SuggestionCard from "@/components/Shared/Cards/SuggestionCard";
import Layout from "@/components/Shared/Layout";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";

const latestMoviesArticles = [
  {
    id: 1,
    img: "/image/upcoming1.png",
    title: "1 10 Best Romantic Comedy Movies of All Time, Ranked by Viewers",
    schedule: "6 December, 2023",
  },
  {
    id: 2,
    img: "/image/upcoming2.png",
    title: "2 10 Sci-Fi Movies Ranked by Viewers",
    schedule: "6 December, 2023",
  },
  {
    id: 3,
    img: "/image/upcoming3.png",
    title: "3 Dwayne Johnson Movies List in Order",
    schedule: "6 December, 2023",
  },
  {
    id: 4,
    img: "/image/upcoming1.png",
    title: "4 Dwayne Johnson Movies List in Order",
    schedule: "6 December, 2023",
  },
  {
    id: 5,
    img: "/image/upcoming2.png",
    title: "5 10 Sci-Fi Movies Ranked by Viewers",
    schedule: "6 December, 2023",
  },
  {
    id: 6,
    img: "/image/upcoming3.png",
    title: "6 Dwayne Johnson Movies List in Order",
    schedule: "6 December, 2023",
  },
  {
    id: 7,
    img: "/image/upcoming1.png",
    title: "7 10 Best Romantic Comedy Movies of All Time, Ranked by Viewers",
    schedule: "6 December, 2023",
  },
  {
    id: 8,
    img: "/image/upcoming2.png",
    title: "8 10 Sci-Fi Movies Ranked by Viewers",
    schedule: "6 December, 2023",
  },
  {
    id: 9,
    img: "/image/upcoming3.png",
    title: "9 Dwayne Johnson Movies List in Order",
    schedule: "6 December, 2023",
  },
  {
    id: 10,
    img: "/image/upcoming2.png",
    title: "5 10 Sci-Fi Movies Ranked by Viewers",
    schedule: "6 December, 2023",
  },
  {
    id: 11,
    img: "/image/upcoming2.png",
    title: "8 10 Sci-Fi Movies Ranked by Viewers",
    schedule: "6 December, 2023",
  },
  {
    id: 12,
    img: "/image/upcoming3.png",
    title: "9 Dwayne Johnson Movies List in Order",
    schedule: "6 December, 2023",
  },
  {
    id: 13,
    img: "/image/upcoming2.png",
    title: "5 10 Sci-Fi Movies Ranked by Viewers",
    schedule: "6 December, 2023",
  },
  {
    id: 14,
    img: "/image/upcoming2.png",
    title: "8 10 Sci-Fi Movies Ranked by Viewers",
    schedule: "6 December, 2023",
  },
];

const suggestionMovies = [
  {
    id: 1,
    img: "/image/moviesIntroSuggesstionPic.png",
    title: "10 Best Jennifer Lawrence Movies of All Time, Ranked by Viewers",
  },
  {
    id: 2,
    img: "/image/moviesIntroSuggesstionPic.png",
    title: "10 Best Jennifer Lawrence Movies of All Time, Ranked by Viewers",
  },
  {
    id: 3,
    img: "/image/moviesIntroSuggesstionPic.png",
    title: "10 Best Jennifer Lawrence Movies of All Time, Ranked by Viewers",
  },
  {
    id: 4,
    img: "/image/moviesIntroSuggesstionPic.png",
    title: "10 Best Jennifer Lawrence Movies of All Time, Ranked by Viewers",
  },
];

const genres = [
  {
    id: 1,
    title: "Rom - Com",
    numbers: 11,
  },
  {
    id: 2,
    title: "Romantic",
    numbers: 20,
  },
  {
    id: 3,
    title: "Drama",
    numbers: 25,
  },
  {
    id: 4,
    title: "Horror",
    numbers: 30,
  },
  {
    id: 5,
    title: "Action",
    numbers: 45,
  },
  {
    id: 6,
    title: "Historical",
    numbers: 46,
  },
  {
    id: 7,
    title: "Comedy",
    numbers: 51,
  },
  {
    id: 8,
    title: "Adventure",
    numbers: 11,
  },
  {
    id: 9,
    title: "Crime",
    numbers: 23,
  },
  {
    id: 10,
    title: "Documentory",
    numbers: 15,
  },
  {
    id: 11,
    title: "Drama",
    numbers: 35,
  },
  {
    id: 12,
    title: "Fantacy",
    numbers: 18,
  },
  {
    id: 13,
    title: "Mystry",
    numbers: 5,
  },
  {
    id: 14,
    title: "Sci-Fi",
    numbers: 26,
  },
  {
    id: 15,
    title: "Thriller",
    numbers: 20,
  },
];

const index = () => {
  return (
    <Layout>
      {/* advertise */}

      <div className="my-2 mx-3 md:mx-0">
        <img src="/image/homePageAds.png" alt="" />
      </div>

      {/* route */}
      <div className="px-3 md:px-0">
        <span className="text-gray-700 text-[15px]">Home {">"} Movies</span>
      </div>

      {/* Movies tag */}
      <div className="bg-red-600 px-3 py-2 text-white inline-block mt-2 mx-3 md:mx-0">
        <span>Movies</span>
      </div>

      {/* page details */}
      <div className="my-4 mx-3 md:mx-0 ">
        <p className="text-[10px] md:text-[14px] font-medium">
          Download Hindi Movies, Movies Download, Download Movies, Download 480p
          Movies, Download 720p Movies, Download Dual Audio Movies, Download
          1080p Movies, Movies Hindi Dubbed, World4ufree, Filmyzilla,
          Khatrimaza, 9xmovies, Bolly4u Best Bollywood movie download site, best
          website to download English movies, download bengali movies for free,
          best sites to download bengali movies for free, Dual audio movie
          website free download, Best dual audio movie website.
        </p>
      </div>

      {/* photo grid album */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-10 mx-3 md:mx-0">
        <div id="poster-box" className="cursor-pointer relative hover:bg-black">
          {/* poster thumbnail */}
          <div className="poster-img w-full h-[500px] block opacity-100 transition-all duration-300 ease-in overflow-hidden ">
            <img
              className="w-full h-full scale-100 hover:scale-105 transition-scale duration-300 ease-in"
              src="/image/homeSlider2.png"
              alt=""
            />
          </div>
          {/* poster title */}
          <div
            id="poster-title"
            className=" absolute top-96 left-12 opacity-0 transition-all duration-300 ease-in"
          >
            <h1 className="text-white self-end text-2xl font-extrabold">
              Top Rated 25 Bollywood Movies with 20 Hollywood superstar Movies
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className=" grid grid-rows-2  gap-4">
            <div
              id="poster-box"
              className="cursor-pointer relative hover:bg-black"
            >
              {/* poster thumbnail */}
              <div className="poster-img w-full h-full  block opacity-100 transition-all duration-300 ease-in overflow-hidden ">
                <img
                  className="w-full h-full scale-100 hover:scale-105 transition-scale duration-300 ease-in"
                  src="/image/hoverImage.png"
                  alt=""
                />
              </div>
              {/* poster title */}
              <div
                id="poster-title"
                className=" absolute bottom-8 left-2 opacity-0 transition-all duration-300 ease-in"
              >
                <h1 className="text-white self-end text-[14px] font-extrabold">
                  Top Rated 25 Bollywood Movies with 20 Hollywood superstar
                  Movies
                </h1>
              </div>
            </div>
            <div
              id="poster-box"
              className="cursor-pointer relative hover:bg-black"
            >
              {/* poster thumbnail */}
              <div className="poster-img w-full h-full  block opacity-100 transition-all duration-300 ease-in overflow-hidden ">
                <img
                  className="w-full h-full scale-100 hover:scale-105 transition-scale duration-300 ease-in"
                  src="/image/hoverImage2.png"
                  alt=""
                />
              </div>
              {/* poster title */}
              <div
                id="poster-title"
                className=" absolute bottom-8 left-2 opacity-0 transition-all duration-300 ease-in"
              >
                <h1 className="text-white self-end text-[14px] font-extrabold">
                  Top Rated 25 Bollywood Movies with 20 Hollywood superstar
                  Movies
                </h1>
              </div>
            </div>
          </div>
          <div className=" grid grid-rows-2 gap-3">
            <div
              id="poster-box"
              className="cursor-pointer relative hover:bg-black"
            >
              {/* poster thumbnail */}
              <div className="poster-img w-full h-full  block opacity-100 transition-all duration-300 ease-in overflow-hidden ">
                <img
                  className="w-full h-full scale-100 hover:scale-105 transition-scale duration-300 ease-in"
                  src="/image/hoverImage3.png"
                  alt=""
                />
              </div>
              {/* poster title */}
              <div
                id="poster-title"
                className=" absolute bottom-8 left-2 opacity-0 transition-all duration-300 ease-in"
              >
                <h1 className="text-white self-end text-[14px] font-extrabold">
                  Top Rated 25 Bollywood Movies with 20 Hollywood superstar
                  Movies
                </h1>
              </div>
            </div>
            <div
              id="poster-box"
              className="cursor-pointer relative hover:bg-black"
            >
              {/* poster thumbnail */}
              <div className="poster-img w-full h-full  block opacity-100 transition-all duration-300 ease-in overflow-hidden ">
                <img
                  className="w-full h-full scale-100 hover:scale-105 transition-scale duration-300 ease-in"
                  src="/image/hoverImage4.png"
                  alt=""
                />
              </div>
              {/* poster title */}
              <div
                id="poster-title"
                className=" absolute bottom-8 left-2 opacity-0 transition-all duration-300 ease-in"
              >
                <h1 className="text-white self-end text-[14px] font-extrabold">
                  Top Rated 25 Bollywood Movies with 20 Hollywood superstar
                  Movies
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* advertise */}
      <div className="my-2 mx-3 md:mx-0">
        <img src="/image/homePageAds.png" alt="" />
      </div>

      {/* articles and adds */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-3 lg:px-0">
        {/* articles */}
        <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-2 gap-3 mx-3">
          {latestMoviesArticles.map((movieArticle) => (
            <ArticleCard key={movieArticle.id} article={movieArticle} />
          ))}
        </div>

        {/* adds and etc */}
        <div className="w-full flex flex-col ">
          {/* adds */}
          <div className="bg-red-800 h-[250px]">adds 1</div>

          {/* popular posts */}
          <div className="my-2">
            <div className="border-b border-black mb-3">
              <span className="bg-black px-3 py-1 text-white">
                Popular Posts
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {suggestionMovies.map((suggestionMovie) => (
                <SuggestionCard
                  key={suggestionMovie.id}
                  suggestContent={suggestionMovie}
                />
              ))}
            </div>
          </div>

          {/* adds */}
          <div className="bg-red-800 h-[250px]">adds 2</div>

          {/* genres */}
          <div className="my-3">
            <div className="border-b border-blue-700 mb-3">
              <span className="bg-blue-700 px-3 py-1 text-white font-semibold">
                Genres
              </span>
            </div>
            {/* genre list */}

            <div className="grid grid-cols-2 gap-3">
              {genres.map((genre) => (
                <div
                  key={genre?.id}
                  className="bg-[#0386FF] p-1 flex justify-between text-white"
                >
                  <div className="flex gap-2 items-center">
                    <span>
                      {" "}
                      <TbTriangleSquareCircleFilled />
                    </span>
                    <span>{genre?.title} </span>
                  </div>
                  <div>
                    <span>{genre?.numbers}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* adds */}
          <div className="bg-red-800 h-[250px]">adds 2</div>

          {/* newsletter */}
          <div
            style={{
              background: "linear-gradient(to right , #FF2E00,#F56F36)",
            }}
            className="my-3"
          >
            <div className=" mx-auto p-4">
              <h1 className=" text-center font-bold text-white text-2xl">
                Newsletter
              </h1>
              <p className="text-center text-white mt-3">
                Subscribe for your daily updates.
              </p>
              <div className="text-center my-5">
                <input
                  placeholder="Your Full Name"
                  className="mb-3 px-3 py-1 text-center text-gray-700 "
                  type="text"
                />
                <input
                  placeholder="Your Email"
                  className="mb-3 px-3 py-1 text-center text-gray-700"
                  type="text"
                />
              </div>

              <div className="text-center">
                <button className="bg-blue-600 px-12 py-2 text-white rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* adds */}
          <div className="bg-red-800 h-[250px]">adds 2</div>
        </div>
      </div>
      {/* advertise */}
      <div className="my-2 mx-3 lg:mx-0">
        <img src="/image/homePageAds.png" alt="" />
      </div>
    </Layout>
  );
};

export default index;
