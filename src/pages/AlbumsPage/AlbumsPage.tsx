import React, {useEffect} from 'react';
import {Link, match} from 'react-router-dom';

import st from "./AlbumsPage.module.scss";
import {setAlbums} from '../../redux/reducer/appReducer';
import {useDispatch, useSelector} from "react-redux";
import Album from "../../components/Album/Album";
import {AlbumType} from "../../types/user";

interface matchParams {
  id: string
  name: string
}

type PropsType = {
  match: match<matchParams>
}

const AlbumsPage: React.FC<PropsType> = ({match}) => {
  const dispatch = useDispatch();

  // @ts-ignore
  const albumList = useSelector(state => state.app.albums);

  useEffect(() => {
    dispatch(setAlbums(match.params.id));
  }, [])

  return (
    <div className="container">
      <div className={st.albums}>
        <h2 className={st.title}>Albums {match.params.name}</h2>
        <Link to={`/`} className={st.back}/>
        <div className={st.list}>
          {albumList.map((el: AlbumType) =>
            <Album key={el.id} data={el}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlbumsPage;