import React from "react";
import {
  Box,
  HStack,
  Stack,
  Text,
  Flex,
  Link,
  Container,
  Image,
  Input,
  Button,
  Img,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { SearchOutlined } from "@ant-design/icons";
const NavbarHeader = () => {
  return (
    <Container maxW="container.2xl" border={"1px solid black"}>
      <Flex>
        <Box ml="45px" border={"1px solid black"}>
          <img src="/images/nav-imgg.jpg" />
        </Box>

        <Box border={"1px solid black"}>
          <Flex>
            <Box>
              <Input placeholder="large size" size="lg" width={"400px"} />
            </Box>
            <Box>
              <Button backgroundColor="black">
                <SearchIcon />
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box border={"1px solid black"}></Box>
      </Flex>
    </Container>
  );
};

export default NavbarHeader;
