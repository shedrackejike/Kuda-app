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
          bg={""}
          margin={"auto"}
          minH={{ base: "750px", md: "550px" }}
          w={{ base: "100%", md: "90%" }}
        >
          {invest?.map((data) => (
            <Flex
              alignItems={"center"}
              bg={""}
              minH={{ base: "420px", md: "500px" }}
              justifyContent={{ md: "space-between" }}
              w={{ base: "100%", md: "100%" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box
                // bg={"blue"}
                minH={{ base: "300px", md: "400px" }}
                w={{ base: "90%", md: "70%" }}
                // alignItems={"center"}
                justifyContent={{ base: "left", md: "center" }}
                display={"flex"}
                flexDirection={"column"}
              >
                <Box
                  minH={"80px"}
                  w={{ base: "360px", md: "320px" }}
                  // bg={"red"}
                  margin={{ base: "auto" }}
                >
                  <Text
                    fontSize={{ base: "40px", md: "40px" }}
                    fontWeight={"bold"}
                    textColor={"#57357F"}
                    textAlign={{ base: "center", md: "left" }}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box
                  margin={"auto"}
                  minH={"80px"}
                  mt={"3"}
                  w={{ base: "100%", md: "400px" }}
                  // bg={"red"}
                >
                  <Text textAlign={{ base: "center", md: "center" }}>
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
                  <Link h={"12"} w={{ base: "100%", md: "20%" }}>
                    <Image
                      objectFit="contain"
                      src="/images/appStore.png"
                      alt="logo"
                      width={"fit-content"}
                      mb={""}
                    />
                  </Link>

                  <Link
                    h={"12"}
                    // w={"30%"}
                    marginLeft={"6"}
                    w={{ base: "100%", md: "20%" }}
                  >
                    <Image
                      objectFit="cover"
                      src="/images/GooglePlay.png"
                      alt="logo"
                      width={"fit-content"}
                      mb={""}
                    />
                  </Link>
                </Flex>
                <Flex
                  minH={"10px"}
                  w={{ base: "250px", md: "300px" }}
                  mt={"3"}
                  margin={"auto"}
                >
                  <Text
                    margin={"auto"}
                    fontSize={"12"}
                    textColor={"#9E9E9E"}
                    textAlign={{ base: "center" }}
                  >
                    Fully Licensed by the CBN 🙌 Deposits lnsured by
                  </Text>
                  <Box
                    minH={{ base: "12", md: "12px" }}
                    w={{ base: "30px", md: "30px" }}
                  >
                    <Image
                      objectFit="cover"
                      src="/images/NDIC.png"
                      alt="logo"
                      width={"fit-content"}
                    />
                  </Box>
                </Flex>

                <Box margin={"auto"}>
                  <Text fontSize={"12"} textColor={"#9E9E9E"}>
                    Disclaimer: Stock prices fluctuate and trading involves
                    possible loss of capital.
                  </Text>
                </Box>
              </Box>

              <Box
                minH={{ base: "390px", md: "400px" }}
                w={{ base: "100%", md: "60%" }}
                justify={"center"}
                alignItems={"center"}
                backgroundImage={data.Image}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                backgroundSize={"contain"}
                display={"flex"}
                // margin={"auto"}
              ></Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Invest;
