import React from "react";
import { useRecoilValue } from "recoil";
import { userListState } from "../../stores/users";
import { User, UserTable } from "../../types/User";
import UserListTablePresenter from "./UserListTablePresenter";

const UserListContainer: React.FC = () => {
  const userList = useRecoilValue(userListState);
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
};

export default UserListContainer;
