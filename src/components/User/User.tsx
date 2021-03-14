import React from 'react';

import st from "./User.module.scss";
import {UserType} from "../../types/user";
import { Link } from 'react-router-dom';

type PropsType = {
  data: UserType
}


const User: React.FC<PropsType> = ({data}) => {
  return (
    <Link to={`user/albums/${data.id}`} className={st.user}>
      <img src={require("../../assets/img/placeholder-user.jpg").default} alt="" className={st.img}/>
      <div className={st.name}>{data.username}</div>
    </Link>
  );
};

export default User;