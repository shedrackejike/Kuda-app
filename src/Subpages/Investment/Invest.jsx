import { Box, Text, Flex, Image, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { investData } from "../../utils/invest";

const Invest = () => {
  const [invest, setInvest] = useState([]);

  useEffect(() => setInvest(investData), []);
  return (
    <Box>
      <Box mt={"90px"}>
        <Box
          // bg={"red"}
          margin={"auto"}
          minH={{ base: "750px", lg: "40px", xl: "550px" }}
          w={{ base: "100%", lg: "86%", xl: "90%" }}
        >
          {invest?.map((data) => (
            <Flex
              alignItems={"center"}
              minH={{ base: "420px", lg: "40px", xl: "500px" }}
              justifyContent={{ xl: "space-between" }}
              w={{ base: "90%", lg: "50%", xl: "100%" }}
              flexDirection={{ base: "column", lg: "row", xl: "row" }}
            >
              <Box
                // minH={"200px"} w={"40%"}
                minH={{ base: "300px", lg: "50%", xl: "400px" }}
                w={{ base: "90%", lg: "50%", xl: "90%" }}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Box
                  minH={"80px"}
                  w={"350px"}
                  // bg={"red"}
                  margin={{ base: "auto" }}
                >
                  <Text
                    // fontSize={"40px"}
                    fontWeight={"bold"}
                    textColor={"#40196D"}
                    fontSize={{ base: "40px", lg: "50%", xl: "40px" }}
                    // fontWeight={"bold"}
                    // textColor={"#57357F"}
                    textAlign={{ base: "center", lg: "0", xl: "0" }}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box minH={"80px"} mt={"3"} w={{ base: "80%", md: "400px" }}>
                  <Text textAlign={{ base: "center", lg: "0", xl: "0" }}>
                    {data.Comment}
                  </Text>
                </Box>

                <Flex
                  minH={"33px"}
                  w={"50"}
                  mt={"4"}
                  margin={{ base: "auto" }}
                  alignItems={{ base: "center" }}
                  justifyContent={{ base: "center" }}
                >
                  <Link h={"12"} w={"30%"}>
                    <Image
                      objectFit="contain"
                      src="/images/appStore.png"
                      alt="logo"
                      width={"fit-content"}
                      mb={""}
                    />
                  </Link>

                  <Link h={"12"} w={"30%"} marginLeft={"6"}>
                    <Image
                      objectFit="cover"
                      src="/images/GooglePlay.png"
                      alt="logo"
                      width={"fit-content"}
                      mb={""}
                    />
                  </Link>
                </Flex>
                <Flex minH={"10px"} w={"50"} mt={"3"}>
                  <Text
                    fontSize={"12"}
                    textColor={"#9E9E9E"}
                    textAlign={{ base: "center" }}
                  >
                    Fully Licensed by the CBN 🙌 Deposits lnsured by
                  </Text>
                  <Box h={"12"} w={"15%"} marginLeft={"2"}>
                    <Image
                      objectFit="cover"
                      src="/images/NDIC.png"
                      alt="logo"
                      width={"fit-content"}
                    />
                  </Box>
                </Flex>

                <Box>
                  <Text fontSize={"12"} textColor={"#9E9E9E"}>
                    Disclaimer: Stock prices fluctuate and trading involves
                    possible loss of capital.
                  </Text>
                </Box>
              </Box>

              <Box
                // minH={"470px"}
                // w={"40%"}
                minH={{ base: "390px", md: "400px" }}
                w={{ base: "100%", md: "60%" }}
                justify={"center"}
                alignItems={"center"}
                backgroundImage={data.Image}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                backgroundSize={"contain"}
                display={"flex"}
              ></Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Invest;
