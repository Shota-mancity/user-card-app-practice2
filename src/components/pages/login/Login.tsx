import React, { VFC, memo, useState, ChangeEvent } from "react";
import { Flex, Box, Heading, Divider, Stack, Input } from "@chakra-ui/react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { useAuth } from "../../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");
  const { loginCheck, loading } = useAuth();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const onClickLogin = () => {
    loginCheck(userId);
  };

  return (
    <Flex
      alignItems="center"
      textAlign="center"
      h="100vh"
      justify="space-around"
    >
      <Box bg="white" p={4} shadow="md" borderRadius="md" w="sm">
        <Heading as="h1" size="lg">
          User Management App
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="User ID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ""}
            onClick={onClickLogin}
            isLoading={loading}
          >
            Login
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
