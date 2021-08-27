import { getAll } from "./apis/userAPI";
import { User } from "./types/User";
import { atom } from "recoil";

const getAllUserInfo = async (): Promise<User[]> => {
  const response = await getAll();
  const users: User[] = await response.data;
  return users;
};

export const userListState = atom<User[]>({
  key: "userListState",
  default: getAllUserInfo(),
});
