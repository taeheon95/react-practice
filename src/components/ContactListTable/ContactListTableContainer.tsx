import React from "react";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { removeContact } from "../../apis/contactAPI";
import { contactListState } from "../../stores/contact";
import { Contact } from "../../types/Contact";
import ContactListTablePresenter from "./ContactListTablePresenter";

const ContactListTableContainer = () => {
  const history = useHistory();
  const [contactList, setContactList] = useRecoilState(contactListState);

  const toEditPage = (id: number) => {
    history.push(`editContact/${id}`);
  };

  const deleteContact = async (id: number) => {
    const response = await removeContact(id);
    if (response) {
      setContactList(contactList.filter((contact) => contact.id !== id));
    }
  };

  return (
    <ContactListTablePresenter
      contactList={contactList}
      deleteContact={deleteContact}
      toEditPage={toEditPage}
    />
  );
};

export default ContactListTableContainer;
