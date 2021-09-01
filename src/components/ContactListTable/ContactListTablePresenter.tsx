import { Button, Table } from "antd";
import React from "react";
import { ContactItem } from "../../types/Contact";
import { ColumnsType } from "antd/es/table";

const ContactListTablePresenter = ({
  contactList,
  deleteContact,
}: {
  contactList: ContactItem[];
  deleteContact: Function;
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
      render: (text, record) => (
        <>
          <Button type="link" onClick={(e) => {}}>
            update
          </Button>
          &nbsp;
          <Button
            type="link"
            onClick={(e) => {
              deleteContact(record.key);
            }}
            danger
          >
            delete
          </Button>
        </>
      ),
    },
  ];
  return (
    <>
      <div style={{ marginBottom: "16px" }}>
        <Button type="link">Add</Button>
        <Button type="link" danger>
          delete
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={contactList}
        pagination={{ position: ["bottomRight"] }}
      />
    </>
  );
};

export default ContactListTablePresenter;
