import React from "react";
import { removeContact, updateContact } from "../../apis/contactAPI";
import { Contact, ContactItem } from "../../types/Contact";
import ContactListTablePresenter from "./ContactListTablePresenter";
import { Form } from "antd";

const ContactListTableContainer = ({
  contact,
  contactList,
  contactItemList,
  setContact,
  setContactList,
  setContactItemList,
}: {
  contact: Contact | null;
  contactList: Contact[];
  contactItemList: ContactItem[];
  setContact: Function;
  setContactList: Function;
  setContactItemList: Function;
}) => {
  const [form] = Form.useForm();

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
