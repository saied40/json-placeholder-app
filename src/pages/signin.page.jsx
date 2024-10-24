import React, { useState } from "react";
import { BASE_URL, WEBSITE_TITLE } from "../config";
import { Helmet } from "react-helmet";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import useUsersQuery from "../queries/usersQuery";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import { useRecoilState } from "recoil";
import { userState } from "../state/atoms/userState";

export default function SignIn() {
  const [formErr, setFormErr] = useState();
  const goTo = useNavigate();
  const { data, isLoading, isError, error } = useUsersQuery();
  const [, setUsr] = useRecoilState(userState);

  if (isLoading) return <p className="">Loading ...</p>;
  if (isError) return (<div className="">Error: {error.name} | {error.message} <br /> probably You're not connected to the internet <br /><br /> {error.stack}</div>);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setFormErr();

    const username = e.target.username.value;
    const email = e.target.email.value;

    const user = data.find(usr => usr.username === username && usr.email === email);

    if (!user) {
      const usernames = data?.map(usr => usr.username);
      const emails = data?.map(usr => usr.email);

      if (!usernames.includes(username) && !emails.includes(email)) return setFormErr(`username (${username}) and email (${email}) are not valid`);
      if (!usernames.includes(username)) return setFormErr(`username (${username}) is not valid`);
      if (!emails.includes(email)) return setFormErr(`email (${email}) is not valid`);
      return setFormErr("username or email is not valid");
    }

    setUsr(user);
    const token = btoa(JSON.stringify({ id: user.id, username: user.username}));
    Cookies.set("token", token, { expires: 1 , secure : true });
    goTo("/");
  };

  return (
    <>
      <Helmet>
        <title>Login to your account || {WEBSITE_TITLE}</title>
      </Helmet>
      <div className="container">
        <Header />
        <h2 className="text-xl font-semibold text-center">Login Form</h2>
        <form
          action="."
          method="post"
          className="w-full md:w-3/4 xl:w-1/2 mx-auto flex items-center justify-between flex-wrap gap-4 my-4"
          onSubmit={handleLoginSubmit}
        >
          <FormInput name="Username" isRequired />
          <FormInput
            name="E-mail Address"
            inputName="email"
            type="email"
            isRequired
          />
          {formErr && <p className="text-red-600">{formErr}</p>}
          <div className="w-full">
            <input
              type="submit"
              className="bg-blue-900 py-2 px-4 my-2 rounded-xl text-base font-medium shadow-xl cursor-pointer transition hover:scale-110"
            />
          </div>
          <p className="w-full">
            you can check{" "}
            <Link
              to={`${BASE_URL}users`}
              target="_blank"
              className="text-blue-500 underline"
            >
              this page
            </Link>{" "}
            to see our available accounts
          </p>
          <p className="w-full">
            or you can create new account{" "}
            <Link to={"/register"} className="text-blue-500 underline">
              here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
