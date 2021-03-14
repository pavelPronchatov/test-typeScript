import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from "swiper";

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import st from "./ModalImg.module.scss";
import {PhotoType} from "../../types/user";

type PropsType = {
  photos: Array<PhotoType>
  activeItem: number
  setIsOpen: any
}

const ModalImg: React.FC<PropsType> = ({photos, activeItem, setIsOpen}) => {
  SwiperCore.use([Navigation]);
  return (
    <>
      <div
        className={st.overlay}
        onClick={() => setIsOpen(false)}
      />
      <div className={st.modal}>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          onInit={swiper => {
            photos.map((el, index) => {
              if (el.id === activeItem) {
                swiper.slideTo(index);
              }
            })
          }}
        >
          {photos.map((el: PhotoType) =>
            <SwiperSlide key={el.id}>
              <img key={el.id} src={el.url} alt=""/>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default ModalImg;