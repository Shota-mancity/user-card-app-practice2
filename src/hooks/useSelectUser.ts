import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

export const UseSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { showMessage } = useMessage();

  const selectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find(user => user.id === id);
    if (!targetUser) {
      showMessage({ title: "User cannot find", status: "error" });
    } else {
      setSelectedUser(targetUser);
      onOpen();
    }
  }, []);

  return { selectUser, selectedUser };
};
