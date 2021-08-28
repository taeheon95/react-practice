import React, { ReactElement } from "react";
import { User, UserTable } from "../../types/User";
import UserListTablePresenter from "./UserListTablePresenter";

function UserListContainer({ userList }: { userList: User[] }) {
  const columns = userList.map((user) => {
    return {
      key: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      street: user.address.street,
      suite: user.address.suite,
      city: user.address.city,
      phone: user.phone,
      website: user.website,
      company: user.company,
    };
  });
  return (
    <>
      <UserListTablePresenter userList={columns} />
    </>
  );
}

export default UserListContainer;
