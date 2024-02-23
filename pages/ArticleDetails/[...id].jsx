import SuggestionCard from "@/components/Shared/Cards/SuggestionCard";
import Layout from "@/components/Shared/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
const singleContentDetails = [
  {
    id: 1,
    title: "Jack Reacher (2012)",
    image: "/image/detailsImage1.png",
    rating: 7,
    realsed: "3 December, 2010 (USA)",
    director: "Christopher McQuarrie",
    writer: "Lee Child, Christopher McQuarrie",
    stars: "Tom Cruise, Rosamund Pike, Richard Jenkins",
    summary:
      "A homicide investigator digs deeper into a case involving a trained military sniper responsible for a mass shooting.",
    countries: "USA",
    languages: "English",
    source: "imdb.com",
    blogs: `The first film in the “Jack Reacher” franchise was released in 2012 by the name “Jack Reacher.” The film was directed by Christopher McQuarrie and based on the novel One Shot by Lee Child.
        The film stars Tom Cruise as Jack Reacher, a former military police officer who becomes a drifter and gets wrapped up in investigating the case of five random murders.
        The story begins with a man in Pittsburgh driving a van into a parking garage and paying for his spot with a quarter. He then takes out his rifle and shoots five people from long range before leaving the scene.
        Detective Calvin Emerson is put on the case by the Pittsburgh Police, who find clues, including the spent bullet casing and corresponding meter receipt. The police find James Barr’s fingerprints on the coin. He is an ex-United States Army sniper. When they raid his house, they discover the van, the rifle, and Barr unconscious.
        During an interrogation of Barr, Emerson, and Rodin offered him a choice: full confession in exchange for life imprisonment or a guaranteed death sentence–as Rodin had never lost a case. Instead of capitulating to their demands, Barr wrote “Get Jack Reacher” on a notepad.
        This is where Tom Cruise as Jack Reacher comes into the frame. He is a former military police officer who now works as a drifter and gets involved in investigating the case after reading about it in the newspaper.
        The movie is full of twists and turns and keeps you on the edge of your seat the whole time. It’s an excellent choice for any action movie fan.
        “Jack Reacher” blasted the box office with an excellent story, actions, and cast, earning $218 million against its budget of $60 million.
        The film spread its popularity with a sequel, “Jack Reacher: Never Go Back”, which was released in 2016.`,
  },
  {
    id: 2,
    title: "Jack Reacher: Never Go Back (2016)",
    image: "/image/detailsImage2.png",
    rating: 8,
    realsed: "3 December, 2016 (USA)",
    director: "Christopher McQuarrie",
    writer: "Lee Child, Christopher McQuarrie",
    stars: "Tom Cruise, Rosamund Pike, Richard Jenkins",
    summary:
      "A homicide investigator digs deeper into a case involving a trained military sniper responsible for a mass shooting.",
    countries: "USA",
    languages: "English",
    source: "imdb.com",
    blogs: `After the success of the first film in the series, “Jack Reacher” returns with a sequel in 2016, titled “Jack Reacher: Never Go Back.”
        The second movie was directed by Edward Zwick and based on the novel Never Go Back by Lee Child.
        In this film, Reacher goes on the run with an Army major who has been framed for espionage as they uncover a sinister conspiracy in this thriller.
        The plot begins when ex-US Army Military Police Investigator and Major Jack Reacher, a drifter and former US Army Military Police Investigator and Major, returns to his old military headquarters in Washington, DC, to meet Maj. Susan Turner, who is holding his previous command.
        Jack meets with Colonel Sam Morgan in an attempt to rendezvous with the Major, only to learn that Turner has been accused of espionage and arrested. Colonel Moorcroft, Turner’s lawyer, tells Jack that some evidence implicates Turner in the murder of two US Army Military Police soldiers in Afghanistan; however, Reacher believes she is being framed.
        This time, “Jack Reacher” has to team up with the major to clear her name and uncover the sinister conspiracy behind it.
        Despite earning over $162 million against its budget of $65 million, the movie did not do well enough compared to the last part.
        However, if the box office collection doesn’t matter to you, and you’re interested in an excellent story with brilliant action sequences, this is the movie for you.
        It is safe to say that the films based on Lee Child‘s Jack Reacher novels have been significant box office successes. The main character, Tom Cruise, is one of Hollywood’s biggest stars, and the films have attracted large audiences.
        The movies are also well-made and exciting, with good reviews from critics. Consequently, it is no surprise that the films have been such big hits. If you haven’t watched the Jack Reacher series, you should check them out.`,
  },
];

const tags = [
  "bollyflix",
  "epikmovies",
  "hdhub4u",
  "epikmovies",
  "hdhub4u",
  "how many jack reacher films are there",
  "mkvcinemas",
  "jack reacher films",
  "Jack Reacher Film Series : All Jack Reacher Movies in Order",
  "bollyflix",
  "epikmovies",
  "hdhub4u",
  "how many jack reacher films are there",
  "bollyflix",
  "epikmovies",
  "hdhub4u",
  "how many jack reacher films are there",
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

const baseUrl='https://blogtest.emdb.online/api'
const ArticleDetails = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showAnswer1, setShowAnswer1] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showAnswer2, setShowAnswer2] = useState(false);

  const [article,setArticle]=useState({})
  const router = useRouter();
  const { id } = router.query;


  console.log(id);

  useEffect(()=>{
    const ls=typeof window != "undefined" ?window.localStorage:null
    const token=ls?.getItem("token")
    axios.get(`${baseUrl}/articles/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(res=>setArticle(res.data.article))
  })

  console.log(article);

  const manageTags=(tags)=>{
      const tagsArray=tags?.split(",")
      return tagsArray
  }
  return (
    <Layout>
      {/* advertise */}
      <div className="my-2 mx-3 lg:mx-0">
        <img src="/image/homePageAds.png" alt="" />
      </div>

      {/* main body */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-5">
        <div className="cols-span-1 lg:col-span-2 px-3 lg:px-0">
          {/* pathname */}
          <div className="my-2">
            <span className="text-gray-700 text-[15px]">
              Home {">"} Action {">"}Jack Reacher Movies In Order (How to Watch
              the Film Series)
            </span>
          </div>

          {/* Genre tag */}
          <div className="bg-red-600 px-3 py-2 text-white inline-block mt-2">
            <span>{article?.category_id==1?"Movies":"Web Series"}</span>
          </div>

          {/* Content Title */}
          <div className="my-2">
            <h1 className="text-3xl font-bold ">
             {article?.title}
            </h1>
            {/* blog write and date */}
            <div className="w-[50%] flex justify-between items-center">
              <span className="text-gray-700 text-[15px] flex items-center gap-3">
                {" "}
                <VscAccount /> <p>Jonathon Trot</p>
              </span>
              <span className="text-gray-700 text-[15px]">
                6 December, 2023
              </span>
            </div>
          </div>

          {/* content details */}
          <div dangerouslySetInnerHTML={{ __html: article?.body }}/>
            
         
          {/* <div className="my-3">
            <p className="text-[12px] font-bold">
              Jack Reacher Movies In Order (How to Watch the Film Series): If
              you’re a fan of action movies, you’ve probably seen at least one
              of the “Jack Reacher” films. The first movie was released in 2012,
              and the second part came out in 2016. Tom Cruise stars as the
              title character, a former military police officer who works as a
              drifter and often gets involved in solving crimes. Tom Cruise is
              one of the most successful actors in Hollywood. He has starred in
              some of the biggest blockbusters of all time, and his level of
              stardom is almost unrivaled. But what makes Cruise such an
              excellent actor? One key factor is his undeniable charisma. In all
              Tom Cruise movies, he exudes a charm and energy that is simply
              irresistible. He also has a rare ability to make any role his own.
              Whether playing a secret agent or a fighter pilot, Cruise always
              brings his unique flair to the part. The “Jack Reacher” movie
              series is no exception for action movies. Cruise puts forth an
              electrifying performance as Jack Reacher, a drifter with a
              military background who often gets wrapped up in solving crimes.
              The first movie follows him as he investigates the case of five
              random murders, and the second film has him going up against an
              international conspiracy. The Jack Reacher movies are thrilling,
              exciting, and full of nonstop action. They’re the perfect choice
              for any action movie fan. So if you’re looking for a great film to
              watch, do watch Jack Reacher movies. So without further ado, let’s
              dive into the post.
            </p>
          </div> */}

          {/* advertise */}
          <div className="my-2">
            <img src="/image/homePageAds.png" alt="" />
          </div>

          {/* all version of contents */}
          {/* <div className="my-3">
            
            <div className="my-2">
              <h1 className="text-2xl font-bold mb-4">
                Jack Reacher Movies In Order Of The Release Date
              </h1>

              
              <ol>
                <li>1) Jack Reacher (2012)</li>
                <li>2) Jack Reacher: Never Go Back (2016)</li>
              </ol>
            </div>
          </div> */}

          {/* contents details */}
          {/* <div className="my-3">
            {singleContentDetails.map((movie) => (
              <div key={movie.id}>
                <h1 className="my-2 text-xl font-bold">{`${movie.id}) ${movie.title}`}</h1>
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <div className="w-[60%] h-[250px] rounded-md overflow-hidden">
                    <img className="w-full h-full" src={movie.image} alt="" />
                  </div>
                  <div
                    style={{
                      fontFamily: "Signika",
                    }}
                    className="font-semibold text-[14px]"
                  >
                    <p className="text-[14px]">{movie.title}</p>
                    <p>{movie.rating}</p>
                    <p>{movie.realsed}</p>
                    <p>Director: {movie.director}</p>
                    <p>Writer: {movie.writer}</p>
                    <p>Stars: {movie.stars}</p>
                    <p>Summary: {movie.summary}</p>
                    <p>Country: {movie.countries}</p>
                    <p>Language: {movie.languages}</p>
                    <p>Source: {movie.source}</p>
                    <p></p>
                  </div>
                </div>

               
                <div
                  style={{
                    fontFamily: "Signika",
                  }}
                  className="font-[500] text-[14px] my-3"
                >
                  <p>{movie.blogs}</p>
                </div>
               
                <div className="my-2">
                  <img src="/image/homePageAds.png" alt="" />
                </div>
              </div>
            ))}
          </div> */}

          {/* faq section */}

          {/* <div className="my-3">
            <h1 className="text-2xl font-bold">
              FAQs about Jack Reacher Movies
            </h1>
            <div className="flex flex-col gap-4 my-2">
              <div
                onClick={() => setShowAnswer1(!showAnswer1)}
                className="flex justify-between items-center cursor-pointer"
              >
                <span className="text-lg text-red-600 font-bold">
                  Is there a third Jack Reacher movie?
                </span>
                {showAnswer1 ? (
                  <span className="text-lg text-red-600">
                    <IoIosArrowUp />
                  </span>
                ) : (
                  <span className="text-lg text-red-600">
                    <IoIosArrowDown />
                  </span>
                )}
              </div>
              {showAnswer1 && (
                <div className="px-2">
                  <p className="text-[13px]">
                    The plot begins when ex-US Army Military Police Investigator
                    and Major Jack Reacher, a drifter and former US Army
                    Military Police Investigator and Major, returns to his old
                    military headquarters in Washington, DC, to meet Maj.
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4 my-2">
              <div
                onClick={() => setShowAnswer2(!showAnswer2)}
                className="flex justify-between items-center cursor-pointer"
              >
                <span className="text-lg text-red-600 font-bold">
                  Is there a third Jack Reacher movie?
                </span>
                {showAnswer2 ? (
                  <span className="text-lg text-red-600">
                    <IoIosArrowUp />
                  </span>
                ) : (
                  <span className="text-lg text-red-600">
                    <IoIosArrowDown />
                  </span>
                )}
              </div>
              {showAnswer2 && (
                <div className="px-2">
                  <p className="text-[13px]">
                    The plot begins when ex-US Army Military Police Investigator
                    and Major Jack Reacher, a drifter and former US Army
                    Military Police Investigator and Major, returns to his old
                    military headquarters in Washington, DC, to meet Maj.
                  </p>
                </div>
              )}
            </div>
          </div> */}

         

          {/* tags */}
          <div>
            <span>Tags:</span>
            <div className="flex items-center flex-wrap gap-3">
              {manageTags(article?.tags)?.map((tag,i)=>(
                <span key={i} className="bg-blue-400 px-3 py-1 text-white">{tag}</span>
              ))}
            </div>
          </div>

          {/* Leave Comments */}

          <div className="my-5">
            <h1 className="text-2xl text-[#504F4F] font-bold mb-5">
              Leave A Comment
            </h1>

            <p className="text-[#504F4F] text-sm">
              Your email address will not be published. Required fields are
              marked *
            </p>
            {/* form */}
            <div className="my-5">
              <div className="mb-3 w-[100%]">
                <input
                  className="w-[100%] outline-none px-6 py-6 rounded-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3 w-[100%]">
                <input
                  className="w-[100%] outline-none px-6 py-6 rounded-lg"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3 w-[100%]">
                <input
                  className="w-[100%] outline-none px-6 py-6 rounded-lg"
                  type="text"
                  placeholder="Drop your comment"
                />
              </div>
            </div>
            <button className="bg-black text-white px-5 py-2 rounded-md shadow-md">
              Post
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="px-3 lg:px-0">
          <div className="flex flex-col">
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
              <div className="w-[80%] mx-auto p-4">
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
      </div>
      <div className="my-2 mx-3 lg:mx-0">
        <img src="/image/homePageAds.png" alt="" />
      </div>
    </Layout>
  );
};

export default ArticleDetails;
