import { getAll } from "../apis/userAPI";
import { User } from "../types/User";
import { atom, selector } from "recoil";

export const userListState = atom<User[]>({
  key: "userListState",
  default: getAll(),
});

// export const userListState = selector<User[]>({
//   key: "userList",
//   get: async () => {
//     const response = await getAll();
//     const users: User[] = response.data;
//     return users;
//   },
//   set: () => {},
// });
