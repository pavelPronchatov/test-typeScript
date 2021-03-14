import React, {useState} from 'react';
import {useSelector} from "react-redux";
import st from "./AlbumPage.module.scss";
import {PhotoType} from "../../types/user";
import Photo from "../../components/Photo/Photo";
import { Link } from 'react-router-dom';
import ModalImg from "../../components/ModalImg/ModalImg";


const AlbumPage = () => {
  // @ts-ignore
  const dataItem = useSelector(state => state.app.selectedItem);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);


  return (
    <div className="container">
      <h2 className={st.title}>{dataItem.title}</h2>

      <Link to={`/user/albums/${dataItem.userId}`} className={st.back}/>

      <div className={st.list}>
        {dataItem.photos?.map((el: PhotoType) =>
          <Photo key={el.id} data={el} setIsOpen={setIsOpen} setActive={setActive}/>
        )}
      </div>

      {isOpen && <ModalImg photos={dataItem.photos} activeItem={active} setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default AlbumPage;