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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { AiOutlineShopping } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { Menu, Dropdown } from "antd";

const GiftsSets = (
  <Container maxW={"container.sm"}>
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              Skin Care Kits & Sets
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              Makeup Kits & sets
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Hair Care Kits & sets
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Bath & Body Kits & sets
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Men's Kits & sets
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              BeautyFIX
            </a>
          ),
        },
        {
          key: "5",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              Best of Dermstore
            </a>
          ),
        },
      ]}
    />
  </Container>
);

const NavbarHeader = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("right");

  return (
    <Container maxW="container.2xl" m="auto">
      <HStack
        spacing="auto"
        justifyContent="space-around"
        w="100%"
        textAlign={"center"}
      >
        <Container>
          <Image src="/images/nav-imgg.jpg" />
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
              placement="bottom"
            >
              <Button
                borderRadius={"none"}
                variant="ghost"
                leftIcon={<BiUser fontSize="2rem" />}
                type="link"
              >
                Account
              </Button>
            </Dropdown>
          </Container>

          <Container>
            <Button
              borderRadius={"none"}
              variant="ghost"
              leftIcon={<AiOutlineShopping fontSize="2rem" />}
              type="link"
            >
              Cart
            </Button>
          </Container>
        </HStack>
      </HStack>
    </Container>
  );
};

export default NavbarHeader;

// const NavbarHeader = () => {
//   return (
//     <Container maxW="container.2xl" border={"1px solid black"}>
//       <Flex>
//         <Box ml="45px">
//           <img src="/images/nav-imgg.jpg" />
//         </Box>

//         <Box>
//           <Flex
//             mt="40px"
//             ml="240px"
//             width="453px"
//             height="50px"
//             border={"1px solid black"}
//           >
//             <Box>
//               <Input
//                 placeholder="Search for a product or brand..."
//                 size="lg"
//                 width={"400px"}
//                 borderRadius="none"
//               />
//             </Box>
//             <Box>
//               <Button
//                 // mt="39px"
//                 backgroundColor="white"
//                 width="50px"
//                 height="48px"
//                 border="none"
//                 borderRadius="none"
//               >
//                 <SearchIcon />
//               </Button>
//             </Box>
//           </Flex>
//         </Box>
//         <Box>
//           <Flex ml="200px" mt="43px" width="120px" className="btn-navbar">
//             <img src="/images/icons8-user-32.png" />
//             <button style={{ width: "100%" }} type="link">
//               Account
//             </button>
//           </Flex>
//         </Box>
//         <Box>
//           <Flex ml="100px" mt="43px" width="90px" className="btn-navbar">
//             <img src="/images/shopping-bag.png" width="35px" height="35px" />
//             <button style={{ width: "100%" }} type="link">
//               Cart
//             </button>
//           </Flex>
//         </Box>
//       </Flex>
//     </Container>
//   );
// };
