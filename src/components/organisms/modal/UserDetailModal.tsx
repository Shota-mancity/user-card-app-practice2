import React, {
  VFC,
  memo,
  useCallback,
  useState,
  useEffect,
  ChangeEvent
} from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Stack,
  FormLabel,
  FormControl,
  ModalFooter
} from "@chakra-ui/react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean;
  user: User;
  onClose: () => void;
  isAdmin?: boolean;
};

export const UserDetailModal: VFC<Props> = memo(props => {
  const { isOpen, user, onClose, isAdmin } = props;
  const [nickName, setNickName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  useEffect(() => {
    setNickName(user?.name);
    setFullName(user?.username);
    setEmail(user?.email);
    setTel(user?.phone);
  }, [user]);

  const onChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };
  const onChangeFullName = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangeTel = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value);
  };

  const onClickUpdate = useCallback(() => {
    alert();
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeader>User Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Nick Name</FormLabel>
                <Input
                  value={nickName}
                  isReadOnly={!isAdmin}
                  onChange={onChangeNickName}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  value={fullName}
                  isReadOnly={!isAdmin}
                  onChange={onChangeFullName}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  isReadOnly={!isAdmin}
                  onChange={onChangeEmail}
                />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input
                  value={tel}
                  isReadOnly={!isAdmin}
                  onChange={onChangeTel}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <PrimaryButton
              disabled={!isAdmin}
              onClick={onClickUpdate}
              isLoading={false}
            >
              Attribute
            </PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
