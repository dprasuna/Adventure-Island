import data from "../../data/data.json";
import Slide from "../LandingSlide/slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      effect="fade"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[EffectFade, Autoplay]}
    >
      {data &&
        data.map((slidedata, index) => {
          return (
            <SwiperSlide key={index}>
              <Slide data={slidedata} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Slider;
