import axios from "axios";

const userURL: string = "https://jsonplaceholder.typicode.com/users";

export const getAll = async (): Promise<any> => {
  const response = await axios.get(userURL);
  return response.data;
};

export const get = async (id: number | string) => {
  const response = await axios.get(`${userURL}/${id}`);
  return response.data;
};
