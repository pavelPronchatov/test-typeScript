import React, {useState} from 'react';

import st from "./Photo.module.scss";
import {PhotoType} from "../../types/user";

type PropsType = {
  data: PhotoType
  setIsOpen: any
  setActive: any
}

const Photo: React.FC<PropsType> = ({data, setIsOpen, setActive}) => {
  return (
    <div className={st.photo}>
      <img
        src={data.thumbnailUrl}
        alt=""
        className={st.img}
        onClick={() => {
          setIsOpen(true);
          setActive(data.id)
        }}
      />
    </div>
  );
};

export default Photo;