import { banners } from "../../constants/banners";
import TiltWrapper from "../TiltWrapper/TiltWrapper";

const Banner = () => {
  return (
    <div className="bannerSection w-full h-auto dark:bg-gray-900 my-8">
      <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-8 gap-4 md:gap-8">
        {banners.map((banner, index) => (
          <div key={index} className="w-full md:w-1/3 text-center">
            <TiltWrapper
              options={{ max: 10, speed: 4000, scale: 1.01 }}
            >
              <div className="box group overflow-hidden relative rounded-xl cursor-pointer">
                <img
                  src={banner.img}
                  alt={banner.alt}
                  className="transform transition-all duration-30000 group-hover:scale-110"
                />
                <div className="absolute top-3 left-auto flex flex-col items-start text-start w-full h-full p-8">
                  <h4 className="text-2xl font-medium mb-4 whitespace-pre-line">
                    {banner.title}
                  </h4>
                  <button className="bg-[#31B55D] text-white hover:bg-[#2ca454] px-6 py-2 w-max capitalize rounded-md text-center transition-all">
                    Shop Now
                  </button>
                </div>
              </div>
            </TiltWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
