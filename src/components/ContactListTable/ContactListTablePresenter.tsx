import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { Contact } from "../../types/Contact";

const ContactHeader = styled.th`
  padding: 10px;
  border: 1px;
  border-style: solid;
`;

const ContactRow = styled.tr`
  margin: 10;
  border: 1px;
  border-style: solid;
`;

const ContactCell = styled.td`
  padding: 10px;
  border: 1px;
  border-style: solid;
`;

const ContactTable = styled.table`
  border: 1px;
  border-style: solid;
`;

const ContactListTablePresenter = ({
  contactList,
  deleteContact,
  toEditPage,
}: {
  contactList: Contact[];
  deleteContact: Function;
  toEditPage: Function;
}) => {
  return (
    <>
      <ContactTable>
        <thead>
          <ContactRow>
            {["이름", "나이", "휴대폰 번호", "이메일", "설명", "행동"].map(
              (key, index) => (
                <ContactHeader key={index}>{key}</ContactHeader>
              )
            )}
          </ContactRow>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <ContactRow key={contact.id}>
              <ContactCell>{contact.name}</ContactCell>
              <ContactCell>{contact.age}</ContactCell>
              <ContactCell>{contact.phoneNumber}</ContactCell>
              <ContactCell>{contact.email}</ContactCell>
              <ContactCell>{contact.description}</ContactCell>
              <ContactCell>
                <Button type="primary" onClick={(e) => toEditPage(contact.id)}>
                  수정
                </Button>
                &nbsp;
                <Button
                  type="primary"
                  danger
                  onClick={(e) => deleteContact(contact.id)}
                >
                  삭제
                </Button>
              </ContactCell>
            </ContactRow>
          ))}
        </tbody>
      </ContactTable>
    </>
  );
};

export default ContactListTablePresenter;
