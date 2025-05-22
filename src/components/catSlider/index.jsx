import Slider from "react-slick";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLongArrowAltLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import sliderCategories from "../../constants/sliderCategories";


const CatSlider = () => {
  const sliderRef = useRef(null); // Ref to control the slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10, // Default for larger screens
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

//   const [itemBg, setItemBg] = useState([
//     "#feefea", "#fffceb", "#ecffec", "#f2fce4"
//   ])
const colors = ["#feefea", "#fffceb", "#ecffec", "#f2fce4"];
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="catSlider w-full h-auto dark:bg-gray-900">
      <div className="w-full px-4 md:px-8">
      {/* -------Internal CSS---- */}
      <style>
          {`
          .slick-slide {
            padding: 0px 10px;
            position: relative;
          `}
          </style>
        {/* -------HEADING WITH BUTTONS ------------ */}
        <div className="flex justify-between items-center my-4">
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold dark:text-white">
            Featured Categories
          </h2>
          <div className="flex space-x-4">
            <button
              className="px-[10px] p-2 text-xs bg-white text-[#31B55D] rounded-full hover:bg-[#31B55D] hover:text-white dark:hover:bg-[#31B55D] dark:hover:text-white shadow-md border-[1px] border-[#31B55D]"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <FontAwesomeIcon icon={faLongArrowAltLeft} />
            </button>
            <button
              className="px-[10px] p-2 text-xs bg-white text-[#31B55D] rounded-full hover:bg-[#31B55D] hover:text-white dark:hover:bg-[#31B55D] dark:hover:text-white shadow-md border-[1px] border-[#31B55D]"
              onClick={() => sliderRef.current.slickNext()}
            >
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </button>
          </div>
        </div>

        {/* -------SLIDER ------------ */}
        <Slider ref={sliderRef} {...settings}>
          {sliderCategories.map((item, index) => {
            return(
            <div
              key={index}
              className="item group flex items-center justify-center w-full h-auto my-6 rounded-2xl   dark:bg-gray-800 cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <div className="info flex flex-col items-center justify-center m-auto p-3  rounded-2xl shadow-[rgba(0,0,0,0.17)_0px_-23px_25px_0px_inset,rgb(173_255_172_/_0%)_0px_-36px_30px_0px_inset,rgb(140_255_0_/_0%)_0px_-79px_40px_0px_inset,rgb(0_0_0_/_0%)_0px_2px_1px,rgb(0_0_0_/_9%)_0px_4px_2px,rgb(101_86_86_/_7%)_0px_8px_4px,rgb(0_0_0_/_7%)_0px_16px_8px] dark:shadow-[rgba(102,93,93,63%)_0px_-23px_25px_0px_inset,rgb(124_124_124_/_63%)_0px_-36px_30px_0px_inset,rgb(140_255_0_/_0%)_0px_-79px_40px_0px_inset,rgb(0_0_0_/_0%)_0px_2px_1px,rgb(0_0_0_/_9%)_0px_4px_2px,rgb(101_86_86_/_7%)_0px_8px_4px,rgb(0_0_0_/_7%)_0px_16px_8px]"
              style={{background:colors[Math.floor(Math.random() * colors.length)]}}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 sm:w-[5rem] sm:h-[5rem] group-hover:scale-105 transition-transform duration-300"
                />
                <h5 className="text-xs font-semibold">{item.title}</h5>
                <span className="text-xs text-gray-600 dark:text-gray-300">
                  {item.quantity} items
                </span>
              </div>
            </div>
          )})}
        </Slider>
      </div>
    </div>
  );
};

export default CatSlider;
