import React, {useEffect, useState} from 'react';
import { usersApi } from '../../api';

import st from "./MainPage.module.scss";
import {UserType} from "../../types/user";
import User from "../../components/User/User";


const MainPage = () => {
  const [usersData, setUsersData] = useState([] as Array<UserType>);


  useEffect(() => {
    usersApi.getUsers()
      .then(res => setUsersData(res))
  }, [])

  return (
    <div className={st.page}>
      <div className="container">
        <h3 className={st.title}>Users</h3>
        <div className={st.list}>
          {usersData.map(el =>
            <User key={el.id} data={el}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;