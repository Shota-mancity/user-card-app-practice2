import React, { VFC, memo, useEffect, useCallback } from "react";
import { Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import { useAllUsers } from "../../../hooks/useAllUsers";
import { UserCard } from "../../organisms/card/UserCard";
import { UserDetailModal } from "../../organisms/modal/UserDetailModal";
import { UseSelectUser } from "../../../hooks/useSelectUser";
import { useLoginUser } from "../../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const { fetchUsers, users } = useAllUsers();
  const {selectUser, selectedUser}=UseSelectUser();
  const {isOpen, onOpen, onClose}=useDisclosure();
  const {loginUser}=useLoginUser();

  useEffect(() => {
    fetchUsers();
  }, []);
  const onClickUserCard = useCallback((id: number) => {
      selectUser({id, users, onOpen});
  }, [users]);

  return (
      <>
    <Wrap m={{ base: 6, md: 10 }} justify="center">
      {users.map(user => (
        <WrapItem key={user.id}>
          <UserCard
            img="https://source.unsplash.com/random"
            name={user.username}
            fullName={user.name}
            onClick={()=>onClickUserCard(user.id)}
          />
        </WrapItem>
      ))}
    </Wrap>
        <UserDetailModal
        isOpen={isOpen}
        user={selectedUser!}
        onClose={onClose}
        isAdmin={loginUser?.isAdmin}
      />
    </>
  );
});
