import React from "react";
import { Table } from "antd";
import { User, UserTable } from "../../types/User";

const { Column, ColumnGroup } = Table;

function UserListTablePresenter({ userList }: { userList: UserTable[] }) {
  return (
    <>
      <Table dataSource={userList}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="UserName" dataIndex="username" key="username" />
        <Column title="Email" dataIndex="email" key="email" />
      </Table>
    </>
  );
}

export default UserListTablePresenter;
