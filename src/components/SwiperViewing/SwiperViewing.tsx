import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./SwiperViewing.scss";

import { Navigation } from "swiper";
import { IPromoProps } from "../../utils/interfaces";
import { useNavigate } from "react-router-dom";
import { COLLECTION_PATH } from "../../utils/constants";

function SwiperViewing(props: IPromoProps) {
  const navigate = useNavigate();
  function handleClick(path: string) {
    navigate(path);
  }
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
    >
      {props.promoTitles.map((item, index: number) => {
        return (
          <SwiperSlide key={index}>
            <div className="promo__content">
              <h2 className="promo__title">{item.title}</h2>
              <button
                className="promo__button"
                onClick={() => handleClick(`${COLLECTION_PATH}/${item.path}`)}
              >
                Перейти
              </button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperViewing;
