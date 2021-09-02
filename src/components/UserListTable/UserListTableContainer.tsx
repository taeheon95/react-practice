import React from "react";
import { useRecoilValue } from "recoil";
import { userListState } from "../../stores/users";
import { User } from "../../types/User";
import UserListTablePresenter from "./UserListTablePresenter";

const UserListContainer: React.FC = () => {
  const userList = useRecoilValue(userListState);
  const columns = userList.map((user: User) => {
    const entries = Object.entries(user).map(([key, value]) => [
      key === "id" ? "key" : key,
      value,
    ]);
    return Object.fromEntries(entries);
  });
  return (
    <>
      <UserListTablePresenter userList={columns} />
    </>
  );
};

export default UserListContainer;
