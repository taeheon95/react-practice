import { Table } from "antd";
import React from "react";
import { ContactItem } from "../../types/Contact";
import { ColumnsType } from "antd/es/table";
import ColumnButtons from "./ColumnButtons";

const ContactListTablePresenter = ({
  contactList,
  deleteContact,
  updateContact,
}: {
  contactList: ContactItem[];
  deleteContact: Function;
  updateContact: Function;
}) => {
  const columns: ColumnsType<ContactItem> = [
    {
      title: "이름",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "나이",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "이메일",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "전화번호",
      dataIndex: "phoneNumber",
      key: "email",
    },
    {
      title: "설명",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "action",
      width: "10%",
      render: (text, record) => (
        <ColumnButtons
          record={record}
          updateContact={updateContact}
          deleteContact={deleteContact}
        />
      ),
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={contactList}
        pagination={{ position: ["bottomRight"] }}
        bordered
      />
    </>
  );
};

export default ContactListTablePresenter;
