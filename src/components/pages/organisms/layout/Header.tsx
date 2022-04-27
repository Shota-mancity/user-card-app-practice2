import React, { VFC, memo, useCallback } from "react";
import { Flex, Heading, Box, Link, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MenuDrawer } from "../../../molecules/MenuDrawer";
import { MenuIconButton } from "../../../atoms/button/MenuIconButton";
import { useMessage } from "../../../../hooks/useMessage";

export const Header: VFC = memo(() => {
  const navigate = useNavigate();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { showMessage } = useMessage();
  const onClickHome = useCallback(() => {
    navigate("/home");
  }, []);
  const onClickUserManagement = useCallback(() => {
    navigate("/home/user_management");
  }, []);
  const onClickSetting = useCallback(() => {
    navigate("/home/setting");
  }, []);
  const onClickLogout = useCallback(() => {
    showMessage({ title: "Logged out", status: "success" });
    navigate("/");
  }, []);

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          as="a"
          align="center"
          mr={8}
          onClick={onClickHome}
          _hover={{ cursor: "pointer" }}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            User Management App
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          display={{ base: "none", md: "flex" }}
          flexGrow={2}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>User list</Link>
          </Box>
          <Box>
            <Link onClick={onClickSetting}>Setting</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
        onClickLogout={onClickLogout}
      />
    </>
  );
});
