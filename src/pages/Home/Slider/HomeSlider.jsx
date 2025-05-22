import Slider from "react-slick";
import "./slider.css";
import { slider1, slider2 } from "../../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
const HomeSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section className="homeSlider dark:bg-gray-900 ">
      <div className=" relative mx-auto p-4  lg:px-8">
        <Slider {...settings}>
          <div className="item relative outline-none">
            <img src={slider1} className="w-100 rounded-3xl shadow-md" />
            <div className="info absolute top-[calc(50%-3rem)] sm:top-10 left-2 md:left-24">
              <h2 className="mb-5 xl:mb-10 text-xl sm:text-3xl xl:text-7xl font-bold text-gray-800">
                Don't miss amazing
                <br />
                grocery deals
              </h2>
              <p className="text-md sm:text-xl xl:text-2xl text-gray-600">
                Sign up for daily newsletter
              </p>
            </div>
          </div>
          <div className="item relative">
            <img src={slider2} className="w-100 rounded-3xl shadow-md" />
            <div className="info absolute top-[calc(50%-3rem)] sm:top-10 left-2 md:left-24">
              <h2 className="mb-5 xl:mb-10 text-xl sm:text-3xl xl:text-7xl font-bold text-gray-800">
                Fresh Vegetables
                <br /> Big discount
              </h2>
              <p className="text-md sm:text-xl xl:text-2xl text-gray-600">
                Save up to 50% off on your first order
              </p>
            </div>
          </div>
        </Slider>
        <div className="newsletter flex items-center w-full h-12 relative bottom-0 left-auto z-10 mt-2 shadow-[rgb(0_0_0_/_14%)_0px_-20px_20px_-12px_inset,rgb(0_0_0_/_14%)_0px_20px_36px_-18px_inset] dark:shadow-[rgb(255_255_255_/_20%)_0px_-20px_20px_-12px_inset,rgb(255_255_255_/_20%)_0px_20px_36px_-18px_inset] rounded-full  md:w-[30rem] xl:h-16 md:absolute md:bottom-10 xl:bottom-28 md:left-20 lg:left-28 md:shadow-none">
        <FontAwesomeIcon icon={faPaperPlane} className="relative left-8 opacity-80 dark:text-gray-300"/>
          <input
            type="text"
            placeholder="Your email address"
            className="w-full h-full rounded-full outline-none pl-12 pr-36 text-lg bg-transparent md:bg-white md:dark:bg-gray-900 dark:text-white"
          />
          <button className="absolute top-1 right-1 bottom-1 bg-[#31B55D] text-white hover:bg-[#2ca454] shadow-lg   px-8 xl:px-10 py-2 w-max capitalize rounded-full text-center transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
