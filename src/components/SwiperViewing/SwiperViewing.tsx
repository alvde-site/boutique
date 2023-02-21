import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./SwiperViewing.css";

import { Navigation } from "swiper";
import { IPromoProps } from "../../utils/interfaces";

function SwiperViewing(props: IPromoProps) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
      modules={[Navigation]}
    >
      {props.promoTitles.map((item, index: number) => {
        return (
          <SwiperSlide key={index}>
            <div className="promo__content">
              <h2 className="promo__title">{item.title}</h2>
              <button className="promo__button">Перейти</button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperViewing;
