import axios from "axios";

export const getUsers = async () => {
  const res = await axios
    .get("https://643975591b9a7dd5c9684550.mockapi.io/api/v1/users")
    .then((res) => {
      return res;
    })
    .catch((error) => error);
  return res.data;
};
