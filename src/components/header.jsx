import React from 'react';
import { Link, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import { DEFAULT_USER, WEBSITE_TITLE } from '../config';
import { useRecoilValue } from 'recoil';
import { isUserIn } from '../state/selectors/isUserIn';
import { useRecoilState } from 'recoil';
import { userState } from '../state/atoms/userState';

export default function Header() {
  const path = useLocation().pathname;
  const isUsrLogged = useRecoilValue(isUserIn);
  const [, setUsr] = useRecoilState(userState);

  const handleLogout = () => {
    Cookies.remove("token");
    setUsr(DEFAULT_USER);
  };

  const navLinks = [
    { title: "home", href: "/" },
    { title: "login", href: "/login" },
    { title: "register", href: "/register" },
  ];

  return (
    <>
      <header>
        <h1 className="text-3xl font-semibold capitalize text-center my-4 border-b pb-2">
          {WEBSITE_TITLE}
        </h1>
        <ul className="flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={
                  `py-2 px-6 rounded hover:bg-slate-600 capitalize ` +
                  (path === link.href ? "bg-slate-600" : "bg-slate-700")
                }
              >
                {link.title}
              </Link>
            </li>
          ))}
          {isUsrLogged && (
            <li>
              <button
                onClick={handleLogout}
                className="py-2 px-6 rounded bg-slate-700 hover:bg-slate-600 capitalize"
              >
                logout
              </button>
            </li>
          )}
        </ul>
      </header>
    </>
  );
};
