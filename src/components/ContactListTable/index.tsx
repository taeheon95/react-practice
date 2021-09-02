import React from "react";
import { useRecoilState } from "recoil";
import { contactListState } from "../../stores/contact";
import ContactListTableContainer from "./ContactListTableContainer";

const ContactListTable: React.FC = () => {
  return <ContactListTableContainer />;
};

export default ContactListTable;
