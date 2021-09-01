import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { removeContact, updateContact } from "../../apis/contactAPI";
import { contactListState, selectedContactState } from "../../stores/contact";
import { Contact, ContactItem } from "../../types/Contact";
import ContactListTablePresenter from "./ContactListTablePresenter";

const ContactListTableContainer = () => {
  const [contactList, setContactList] = useRecoilState(contactListState);
  const setContact = useSetRecoilState(selectedContactState);

  const contactUpdate = async (id: number, newContact: Contact) => {
    const response = await updateContact(id, newContact);
    if (response) {
      setContactList(
        contactList.map((contact) => (contact.id === id ? newContact : contact))
      );
    }
  };

  const contactDelete = async (id: number) => {
    const response = await removeContact(id);
    if (response) {
      setContactList(contactList.filter((contact) => contact.id !== id));
    }
  };

  const deleteContactMany = async (idList: number[]) => {};

  const contactItemList: ContactItem[] = contactList.map((contact) => ({
    key: contact.id,
    name: contact.name,
    description: contact.description,
    age: contact.age,
    phoneNumber: contact.phoneNumber,
    email: contact.email,
  }));

  return (
    <div>
      <ContactListTablePresenter
        contactList={contactItemList}
        deleteContact={contactDelete}
      />
    </div>
  );
};

export default ContactListTableContainer;
