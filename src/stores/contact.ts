import { getAllContact } from "../apis/contactAPI";
import { Contact, EditContact } from "../types/Contact";
import { atom } from "recoil";

export const contactListState = atom<Contact[]>({
  key: "contactList",
  default: getAllContact(),
});

export const editContactState = atom<EditContact>({
  key: "editContactState",
  default: {},
});

export const selectedContactState = atom<Contact | null>({
  key: "selectedContactState",
  default: null,
});

export const keywordState = atom<string>({
  key: "keywordState",
  default: "",
});
