import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";

export const useAllUsers = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  const fetchUsers = useCallback(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(e => console.log(e));
  }, []);
  return { fetchUsers, users };
};
