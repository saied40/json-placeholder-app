import { selector } from "recoil";
import { userState } from "../atoms/userState";

export const isUserIn = selector({
  key: "isUserIn",
  get: ({ get }) => !!(get(userState)?.email && get(userState)?.username),
});
