import axios from "axios";
import { Contact, EditContact } from "../types/Contact";

const contactURL: string =
  "https://contact-server-taeheon.herokuapp.com/contacts";

export const getAllContact = async () => {
  const response = await axios.get(contactURL);
  return response.data;
};

export const getContact = async (id: number | string) => {
  const response = await axios.get(`${contactURL}/${id}`);
  return response.data;
};

export const removeContact = async (id: number | string) => {
  const response = await axios.delete(`${contactURL}/${id}`);
  return response.status;
};

export const updateContact = async (id: number | string, contact: Contact) => {
  const response = await axios.put(`${contactURL}/${id}}`, contact);
  return response.data;
};

export const createContact = async (contact: EditContact) => {
  const response = await axios.post(
    contactURL,
    {
      ...contact,
      age: Number(contact.age),
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
