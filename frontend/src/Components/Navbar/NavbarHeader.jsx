import React, { useState } from "react";
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
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Badge,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { AiOutlineShopping } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";

const NavbarHeader = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("right");
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const GiftsSets = (
    <Container w="50vh" bgColor="black" p="1rem">
      <Container maxW={"container.sm"}>
        <Stack w="100%">
          <Button w="100%" borderRadius={"none"} onClick={handleLogin}>
            Login
          </Button>
          <Button w="100%" borderRadius={"none"} onClick={handleLogin}>
            Register
          </Button>
        </Stack>
      </Container>
    </Container>
  );

  const Cart = (
    <Container w="50vh" bgColor="white" p="1rem">
      {/* <Container maxW={"container.sm"}>
        <Stack w="100%">{}</Stack>
      </Container> */}
    </Container>
  );

  return (
    <Container maxW="container.2xl" m="auto">
      <HStack
        spacing="auto"
        justifyContent="space-around"
        w="100%"
        textAlign={"center"}
      >
        <Container>
          <Image onClick={()=> navigate("/")} src="/images/nav-imgg.jpg" />
        </Container>

        <Container maxW="container.sm">
          <InputGroup>
            <Input
              outline={false}
              borderRadius="none"
              placeholder="Search for a product or brand..."
            />
            <InputRightElement
              _hover={{ backgroundColor: "lightgrey" }}
              children={<GoSearch />}
            />
          </InputGroup>
        </Container>

        <HStack w="30%">
          <Container>
            <Dropdown
              style={{
                width: "100%",
                paddingTop: ".5rem",
                paddingBottom: ".5rem",
              }}
              overlay={GiftsSets}
              placement="bottomRight"
            >
              <Button
                borderRadius={"none"}
                variant="ghost"
                leftIcon={<BiUser fontSize="2rem" />}
                type="link"
                onClick={handleLogin}
              >
                Account
              </Button>
            </Dropdown>
          </Container>

          <Container>
            <Dropdown
              style={{
                width: "100%",
                paddingTop: ".5rem",
                paddingBottom: ".5rem",
              }}
              overlay={Cart}
              placement="bottomRight"
            >
              <Button
                borderRadius={"none"}
                variant="ghost"
                leftIcon={<AiOutlineShopping fontSize="2rem" />}
                type="link"
                onClick={handleCart}
              >
                Cart
              </Button>
            </Dropdown>
          </Container>
        </HStack>
      </HStack>
    </Container>
  );
};

export default NavbarHeader;
