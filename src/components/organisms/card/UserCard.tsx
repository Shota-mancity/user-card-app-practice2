import React, { VFC, memo } from "react";
import { Box, Image, Text, Stack} from "@chakra-ui/react";

type Props={
    img: string;
    name: string;
    fullName: string;
    onClick: ()=>void;
}

export const UserCard:VFC<Props>=memo((props)=>{
    const {img, name, fullName, onClick}=props

    return(
        <Box
        onClick={onClick}
        bg="white"
        borderRadius="lg"
        w={250}
        h={250}
        textAlign="center"
        shadow="md"
        _hover={{cursor: "pointer", opacity: 0.8}}
      >
        <Image
          src={img}
          alt="user image"
          borderRadius="full"
          w={150}
          h={150}
          mx="auto"
          my={4}
        />
        <Stack>
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {fullName}
          </Text>
        </Stack>
      </Box>

    )
})