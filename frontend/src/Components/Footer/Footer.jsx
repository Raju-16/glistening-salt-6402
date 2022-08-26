import React from "react";
import "./Footer.css";
import { Box, HStack, Stack, Text, Flex, Link } from "@chakra-ui/react";
const FooterNew = () => {
  return (
    <>
      <Box
        borderTop={"1px solid"}
        borderBottom={"1px solid"}
        borderColor={"gray.600"}
        //   height="460px"
      >
        <HStack px={20} py={""} mt="18px">
          <Box
            width="1400px"
            mr={"30"}
            textAlign="left"
            // border={"1px solid"}
          >
            <Stack>
              <Box height="120">
                {/* { SIGN ME UP} */}
                <Text
                  color={"black"}
                  //   color={"#8e7c74"}
                  fontSize="13px"
                  fontFamily="Poly regular"
                  // fontFamily="Times New Roman"
                  lineHeight="20px"
                >
                  Sign up to our newsletters and receive the latest exclusive
                  discounts and deals
                </Text>
                <Flex mt="4">
                  <Box
                    as="button"
                    height="40px"
                    width="40"
                    lineHeight="1.2"
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    border="1px"
                    px="8px"
                    borderRadius="2px"
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="lato regular"
                    bg="#222222"
                    borderColor="#ccd0d5"
                    color="#d7f0f8"
                    _hover={{ bg: "gray" }}
                    _active={{
                      bg: "#dddfe2",
                      transform: "scale(0.98)",
                      borderColor: "#bec3c9",
                    }}
                    _focus={{
                      boxShadow:
                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                    }}
                  >
                    SIGN ME UP
                  </Box>
                </Flex>
              </Box>
              <Box
                height="290px"
                width="100%"
                //   border={"1px solid"}
                borderTop={"1px solid"}
                //   borderColor="blue"
              >
                <Box width={"250px"}>
                  {/* {Customer Service} */}
                  <Text
                    fontFamily="Poly Regular"
                    fontSize="14"
                    mt="15px"
                    paddingLeft="7px"
                    color="black"
                  >
                    Customer service
                  </Text>
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
                </Box>
              </Box>
            </Stack>
          </Box>

          <Box width="1400px">
            <Stack>
              <Box height="120" textAlign="left">
                {/* {Connect with us} */}
                <Text
                  color={"black"}
                  //   color={"#8e7c74"}
                  fontSize="13px"
                  fontFamily="Poly regular"
                  lineHeight={"20px"}
                >
                  Connect With Us
                </Text>
                <Box mt="30px">
                  <Flex>
                    <button className="fb-btn">
                      <center>
                        <img src="/images/facebook-app-symbol.png" alt="" />
                      </center>
                    </button>
                    <button className="fb-btn">
                      <center>
                        <img src="/images/icons8-twitter-24.png" alt="" />
                      </center>
                    </button>
                    <button className="fb-btn">
                      <center>
                        <img src="/images/icons8-instagram-32.png" alt="" />
                      </center>
                    </button>
                    <button className="fb-btn">
                      <center>
                        <img src="/images/icons8-youtube-50.png" alt="" />
                      </center>
                    </button>
                    <button className="fb-btn">
                      <center>
                        <img src="/images/pinterest.png" alt="" />
                      </center>
                    </button>
                  </Flex>
                </Box>
              </Box>
              <Box height="290" textAlign="left">
                <HStack>
                  <Box
                    borderTop={"1px solid"}
                    width="180px"
                    height="350px"
                    mr="40px"
                    textAlign="left"
                    //   border={"1px solid"}
                  >
                    {" "}
                    <Text
                      fontFamily={"Poly Regular"}
                      fontSize="14px"
                      mt="15px"
                      paddingLeft="7px"
                    >
                      My Account
                    </Text>
                    <button className="btn btn4 btn-m">
                      Manage My Auto-Replenishment
                    </button>
                    <button className="btn btn4">My Rewards</button>
                    <button className="btn btn4">My Favorites</button>
                    <button className="btn btn4">Refer a Friend</button>
                    <button className="btn btn4">Order History</button>
                    {/* {My Account} */}
                  </Box>

                  <Box
                    borderTop={"1px solid"}
                    height="350px"
                    width="180px"
                    //   border={"1px solid"}
                  >
                    {" "}
                    <Text
                      fontFamily={"Poly Regular"}
                      fontSize="14px"
                      mt="15px"
                      paddingLeft="7px"
                    >
                      Company
                    </Text>
                    <button className="btn btn4">About Us</button>
                    <button className="btn btn4">Press</button>
                    <button className="btn btn4">What is Klarna</button>
                    {/* {My Account} */}
                  </Box>
                  <Box width="30px" ml="20px" mt="15px">
                    {" "}
                    {/* {Just for spacing} */}
                  </Box>
                  <Box
                    borderTop={"1px solid"}
                    width="180px"
                    height="350px"
                    ml="20px"
                    //   border={"1px solid"}
                  >
                    {" "}
                    <Text
                      fontFamily={"Poly Regular"}
                      fontSize="14px"
                      mt="15px"
                      paddingLeft="7px"
                    >
                      Legal
                    </Text>
                    <button className="btn btn4">Privacy Policy</button>
                    <button className="btn btn4">Terms Condition</button>
                    <button className="btn btn4">
                      Modern Slavery Statement
                    </button>
                    <button className="btn btn4">Product Recall</button>
                    <button className="btn btn4">Accessibility</button>
                    {/* {My Account} */}
                  </Box>
                </HStack>
              </Box>
            </Stack>
          </Box>
        </HStack>
      </Box>
      {/* { Footer below } */}
      <Box mt="30px" height="170px">
        <HStack>
          <Box ml="80px" width="50%" height="100%" textAlign="left">
            {/* {  T H G  } */}
            <Text fontSize="30px" fontWeight="bold" mb="12px">
              T H G
            </Text>
            <Text fontFamily={"lato regular"} color="#a08285">
              2022 @ The Hut.com Ltd.
            </Text>
          </Box>
          <Box mr="30px" width="50%" textAlign="left">
            {/* { pay securely with } */}
            <Text
              fontSize="16px"
              color="black"
              fontFamily="lato bold"
              fontWeight="700"
            >
              pay securely with
            </Text>
            <Flex width="80%" mt="5px">
              <img src="/images/footer-payment.png" alt="" />
            </Flex>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default FooterNew;
