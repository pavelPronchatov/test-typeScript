import React from 'react';

import st from "./Album.module.scss";
import {AlbumType} from "../../types/user";
import {useDispatch} from "react-redux";
import { setSelectedItemAC } from '../../redux/reducer/appReducer';
import { Link } from 'react-router-dom';


type PropsType = {
  data: AlbumType
}

const Album: React.FC<PropsType> = ({data}) => {
  const dispatch = useDispatch();

  return (
    <Link
      to={"/album-page"}
      className={st.album}
      onClick={() => dispatch(setSelectedItemAC(data))}
    >
      <img src={data.photos && data.photos[0].thumbnailUrl} alt="" className={st.img}/>
      <div className={st.title}>{data.title}</div>
      <div className={st.length}>total photo in album: <span>{data.photos?.length}</span></div>
    </Link>
  );
};

export default Album;