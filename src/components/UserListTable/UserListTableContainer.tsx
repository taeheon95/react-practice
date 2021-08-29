import React from "react";
import { useRecoilState } from "recoil";
import { userListState } from "../../stores/store";
import { User, UserTable } from "../../types/User";
import UserListTablePresenter from "./UserListTablePresenter";

function UserListContainer() {
  const [userList, setUserList] = useRecoilState(userListState);
  const columns = userList.map((user: User) => {
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
    } as UserTable;
  });
  return (
    <>
      <UserListTablePresenter userList={columns} />
    </>
  );
}

export default UserListContainer;
