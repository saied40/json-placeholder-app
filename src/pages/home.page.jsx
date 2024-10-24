import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';
import useUsersQuery from '../queries/usersQuery';
import Header from '../components/header';
import UserDetails from '../components/userDetails';
import { isUserIn } from '../state/selectors/isUserIn';
import { useRecoilValue, useRecoilState } from "recoil";
import { userState } from '../state/atoms/userState';
import { WEBSITE_TITLE } from '../config';

export default function Home() {
  const { data } = useUsersQuery();
  const token = Cookies.get("token") ? JSON.parse(atob(Cookies.get("token"))) : undefined;
  const isLogged = useRecoilValue(isUserIn);
  const [usrData, setUsrData] = useRecoilState(userState);

  useEffect(()=>{
    if (token && !isLogged && data) setUsrData(data.find(usr => usr.id === token.id && usr.username === token.username));
  },[data, isLogged, token, setUsrData]);

  // Cookies.remove("token");

  return (
    <>
      <Helmet>
        <title>Home Page || {WEBSITE_TITLE}</title>
      </Helmet>
      <div className="container">
        <Header />
        <h1>Home Page</h1>
        <p className="">Welcome {usrData?.name}!</p>
        {isLogged && <UserDetails user={usrData} className="my-8" />}
      </div>
    </>
  );
};
