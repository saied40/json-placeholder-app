import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin.page";
import Register from "./pages/signUp.page";
import Home from "./pages/home.page";
import { useRecoilState } from "recoil";
import { userState } from "./state/atoms/userState";
import Cookies from "js-cookie";
import useUsersQuery from "./queries/usersQuery";
import { useEffect } from "react";
import { DEFAULT_USER } from "./config";

export default function App() {
  const [, setUsr] = useRecoilState(userState);
  const { data } = useUsersQuery();

  useEffect(() => {
    setUsr(() => {
      const token = Cookies.get("token")
        ? JSON.parse(atob(Cookies.get("token")))
        : undefined;

      return token
        ? data?.find((usr) => usr.id === token.id && usr.username === token.username)
        : DEFAULT_USER;
    });
  }, [setUsr, data]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};
