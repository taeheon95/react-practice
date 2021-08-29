import React from "react";
import { useRecoilState } from "recoil";
import { createContact, removeContact } from "../../apis/contactAPI";
import { contactListState } from "../../stores/contact";
import { Contact } from "../../types/Contact";
import ContactListTablePresenter from "./ContactListTablePresenter";

function ContactListTableContainer() {
  const [contactList, setContactList] = useRecoilState(contactListState);
  const createNewContact = (contact: Contact) => {
    setContactList([...contactList, contact]);
  };
  const deleteNewContact = (id: number) => {
    setContactList(contactList.filter((contact) => contact.id !== id));
  };
  return <ContactListTablePresenter />;
}

export default ContactListTableContainer;
