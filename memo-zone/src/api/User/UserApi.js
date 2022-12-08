import axios from "axios";

const getUsers = async () => {
  return await axios.get("http://localhost:8090/api/users");
  // console.log("get method");
};
export { getUsers };
