export interface Contact {
  id: number;
  name: string;
  age: number;
  description: string;
  phoneNumber: string;
  email: string;
}

export interface ContactItem {
  key: number;
  name: string;
  age: number;
  description: string;
  phoneNumber: string;
  email: string;
}

export type EditContact = {
  id?: number;
  name?: string;
  age?: number;
  description?: string;
  phoneNumber?: string;
  email?: string;
};
