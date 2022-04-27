import React, { VFC, memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props={
    children: ReactNode;
    disabled: boolean;
    onClick: ()=>void;
    isLoading: boolean;
}

export const PrimaryButton: VFC<Props> = memo((props) => {
    const {children, disabled, onClick, isLoading}=props

  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || isLoading}
      onClick={onClick}
      isLoading={isLoading}
    >
      {children}
    </Button>
  );
});
