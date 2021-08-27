import axios from "axios";

const userURL: string = "https://jsonplaceholder.typicode.com/users";

export const getAll = async () => {
  const response = await axios.get(userURL);
  return response;
};
