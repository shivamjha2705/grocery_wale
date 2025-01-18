import Slider from "react-slick";
import './slider.css'
import {slider1, slider2} from '../../../assets'
const HomeSlider = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed:3000,
    pauseOnHover: true,
    arrows:false
  };

  return (
    <section className="homeSlider dark:bg-gray-900">
    <div className="container mx-auto p-4  lg:px-8">
      <Slider {...settings}>
        <div className="item relative">
          <img src={slider1} className="w-100 rounded-3xl shadow-md" />
          <div className="info absolute top-10 left-24">
            <h2 className="text-6xl font-bold text-gray-800">
              Don't miss amazing<br/>grocery deals
            </h2>
            <p>Save up to 50% off on your first order</p>
          </div>
        </div>
        <div className="item relative">
          <img src={slider2} className="w-100 rounded-3xl shadow-md" />
        </div>
        
      </Slider>
      </div>
    </section>
  )
}

export default HomeSlider