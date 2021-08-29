import { getAllContact } from "../apis/contactAPI";
import { Contact, EditContact } from "../types/Contact";
import { atom, selector, selectorFamily } from "recoil";

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

export const editContactSelector = selectorFamily<EditContact, string>({
  key: "editContactSelector",
  get:
    (field: string) =>
    ({ get }) => {
      const contact: any = { ...get(editContactState) };
      return contact[field];
    },
  set:
    (field: string) =>
    ({ set }, newValue) =>
      set(editContactState, (prevState) => ({
        ...prevState,
        [field]: newValue,
      })),
});

export const keywordState = atom<string>({
  key: "keywordState",
  default: "",
});
