import React, { VFC, memo } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  Button
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
  onClickLogout: () => void;
};

export const MenuDrawer: VFC<Props> = memo(props => {
  const {
    isOpen,
    onClose,
    onClickHome,
    onClickUserManagement,
    onClickSetting, 
    onClickLogout
  } = props;

  return (
    <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose} >
      <DrawerOverlay>
        <DrawerContent bg="gray.100" >
          <DrawerCloseButton />
          <DrawerHeader pb={10} />
          <DrawerBody p={0} >
            <Button w="100%" onClick={onClickHome}>
              TOP
            </Button>
            <Button w="100%" onClick={onClickUserManagement}>
              User list
            </Button>
            <Button w="100%" onClick={onClickSetting}>
              Setting
            </Button>
            <Button w="100%" onClick={onClickLogout}>
              Logout
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
