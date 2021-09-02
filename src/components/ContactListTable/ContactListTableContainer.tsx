import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { removeContact, updateContact } from "../../apis/contactAPI";
import { contactListState, selectedContactState } from "../../stores/contact";
import { Contact, ContactItem } from "../../types/Contact";
import ContactListTablePresenter from "./ContactListTablePresenter";

const ContactListTableContainer = () => {
  const [contactList, setContactList] = useRecoilState(contactListState);
  const [contact, setContact] = useRecoilState(selectedContactState);

  const [contactItemList, setContactItemList] = useState<ContactItem[]>([]);

  useEffect(() => {
    const contactItems: ContactItem[] = contactList.map((contact) => {
      const entries = Object.entries(contact).map(([key, value]) => [
        key === "id" ? "key" : key,
        value,
      ]);
      return Object.fromEntries(entries);
    });
    setContactItemList(contactItems);

    return () => {};
  }, [contactList]);

  const contactUpdate = (willUpdateContact: ContactItem) => {
    const entries = Object.entries(willUpdateContact).map(([key, value]) => [
      key === "key" ? "id" : key,
      value,
    ]);
    const editContact = { ...Object.fromEntries(entries) };
    setContact(editContact);
  };

  const handleEdit = (keyString: string, value: string) => {
    const editedContact: Contact = Object.assign({}, contact);
    editedContact[keyString] = keyString === "age" ? Number(value) : value;
    setContact(editedContact);
  };

  const saveEdit = async (id: number, newContact: Contact) => {
    const response = await updateContact(id, newContact);
    if (response) {
      setContactList(
        contactList.map((contact) => (contact.id === id ? newContact : contact))
      );
    }
  };

  const contactDelete = async (id: number) => {
    const response = await removeContact(id);
    console.log(response);
    if (response) {
      setContactList(contactList.filter((contact) => contact.id !== id));
    }
  };

  return (
    <ContactListTablePresenter
      contactList={contactItemList}
      updateContact={contactUpdate}
      deleteContact={contactDelete}
    />
  );
};

export default ContactListTableContainer;
