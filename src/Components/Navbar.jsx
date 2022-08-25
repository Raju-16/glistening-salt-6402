import React from "react";
import { Box, HStack, Stack, Text, Flex, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <Box height="100px" border="1px solid" mb="20px">
        <HStack>
          <Link href={"#"}>
            <button className="bttn btn4">Help Center / FAQs</button>
          </Link>
          <Link href={"#"}>
            <button className="bttn btn4">Returns</button>
          </Link>
          <Link href={"#"}>
            <button className="bttn btn4">Shipping Information</button>
          </Link>
          <Link href={"#"}>
            <button className="bttn btn4">Track my order</button>
          </Link>
          <Link href={"#"}>
            <button className="bttn btn4">Cookie setting</button>
          </Link>
        </HStack>
      </Box>
    </>
  );
};

export default Navbar;
