import React from "react";
import { Button } from "antd";
import { ContactItem } from "../../types/Contact";

const ColumnButtons = ({
  isEdit,
  updateContact,
  deleteContact,
  record,
}: {
  updateContact: Function;
  deleteContact: Function;
  record: ContactItem;
  isEdit?: boolean;
}) => {
  return isEdit ? (
    <>
      <Button type="primary">Save</Button>
      &nbsp;
      <Button type="primary" danger>
        cancle
      </Button>
    </>
  ) : (
    <>
      <Button
        type="link"
        onClick={(e) => {
          updateContact(record);
        }}
      >
        edit
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
  );
};

export default ColumnButtons;
