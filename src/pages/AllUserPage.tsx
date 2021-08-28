import React from "react";
import { useRecoilValue } from "recoil";
import { userListState } from "../store";
import UserListContainer from "../components/UserListTable/UserListTableContainer";

function AllUserPage() {
  const userList = useRecoilValue(userListState);
  return (
    <>
      <UserListContainer userList={userList} />
    </>
  );
}

export default AllUserPage;
