import { atom } from "recoil";
import { DEFAULT_USER } from "../../config";

export const userState = atom({
  key: "userState",
  default: DEFAULT_USER,
});
