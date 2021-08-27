import React from "react";
import { User, UserTable } from "../../types/User";
import UserListTablePresenter from "./UserListTablePresenter";

function UserListContainer({ userList }: { userList: User[] }) {
  const columns = userList.map((user) => {
    return {
      key: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    };
  });
  return (
    <>
      <UserListTablePresenter userList={columns} />
    </>
  );
}

export default UserListContainer;
