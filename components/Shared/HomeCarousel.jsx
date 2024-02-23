import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const HomeCarousel = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNext = () => {
    const lastSlideIndex = slides.length - 1;
    const isLastSlide = currentSlideIndex == lastSlideIndex;
    const nextIndex = isLastSlide ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(nextIndex);
  };

  const goToPrev = () => {
    const isFirstSlide = currentSlideIndex === 0;
    const prevIndex = isFirstSlide ? slides.length - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(prevIndex);
  };

  // const intervalId = setInterval(goToNext, 2000);

  // console.log("currentslide", currentSlideIndex);
  return (
    <div className="transition-transform ease-in-out duration-500 transform translate-x-[calc(-100%*{currentSlideIndex})]">
      <div className="flex items-center w-[100%] gap-5 ">
        <div className="w-[60%] h-[300px] self-baseline">
          <img
            className="w-[100%] h-full"
            src={slides[currentSlideIndex]?.img}
            alt=""
          />
        </div>
        <div className="flex flex-col self-start w-[40%] mt-7">
          <span className="p-1">
            <h1 className="text-black font-bold text-[28px]">
              {slides[currentSlideIndex]?.title}
            </h1>
          </span>
          <span className="text-black text-[16px] p-1">
            {slides[currentSlideIndex]?.description}
          </span>
        </div>
      </div>
      <div className="mt-2 flex items-center">
        <FaAngleLeft
          onClick={goToPrev}
          className="text-2xl font-bold text-red-600  cursor-pointer"
        />
        <FaAngleRight
          onClick={goToNext}
          className="text-2xl font-bold text-red-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default HomeCarousel;
