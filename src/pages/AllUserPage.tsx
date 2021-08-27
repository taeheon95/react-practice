import React from "react";
import { useRecoilValue } from "recoil";
import { userListState } from "../store";
import { Link } from "react-router-dom";
import UserListContainer from "../components/UserListTable/UserListTableContainer";

function AllUserPage() {
  const userList = useRecoilValue(userListState);
  return (
    <>
      <UserListContainer userList={userList} />
      {/* {userList.map((user) => (
        <div>
          <Link key={user.id} to={`${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))} */}
    </>
  );
}

export default AllUserPage;
