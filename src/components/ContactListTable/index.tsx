import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { contactListState, selectedContactState } from "../../stores/contact";
import { ContactItem } from "../../types/Contact";
import ContactListTableContainer from "./ContactListTableContainer";

const ContactListTable = () => {
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

  return (
    <ContactListTableContainer
      contact={contact}
      contactList={contactList}
      contactItemList={contactItemList}
      setContact={setContact}
      setContactList={setContactList}
      setContactItemList={setContactItemList}
    />
  );
};

export default ContactListTable;
