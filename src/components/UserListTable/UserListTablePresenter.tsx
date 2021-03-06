import React from "react";
import { UserTable } from "../../types/User";
import { Link } from "react-router-dom";
import { Table } from "antd";

const { Column, ColumnGroup } = Table;

const UserListTablePresenter = ({ userList }: { userList: UserTable[] }) => {
  return (
    <Table<UserTable> dataSource={userList} bordered={true}>
      <Column<UserTable>
        key="name"
        title="이름"
        dataIndex="name"
        render={(text, record) => (
          <Link to={`users/${record.key}`}>{text}</Link>
        )}
      />
      <Column<UserTable>
        key="username"
        title="유저 네임"
        dataIndex="username"
      />
      <Column<UserTable> key="email" title="이메일" dataIndex="email" />
      <ColumnGroup<UserTable> title="주소">
        <Column title="로" key="street" dataIndex="street" />
        <Column title="번지" key="suite" dataIndex="suite" />
        <Column title="도시" key="city" dataIndex="city" />
      </ColumnGroup>
      <Column<UserTable> key="phone" title="전화번호" dataIndex="phone" />
      <Column<UserTable> key="website" title="웹사이트" dataIndex="website" />
    </Table>
  );
};

export default UserListTablePresenter;
