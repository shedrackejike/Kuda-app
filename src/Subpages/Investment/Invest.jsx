import { Box, Text, Flex, Image, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { investData } from "../../utils/invest";

const Invest = () => {
  const [invest, setInvest] = useState([]);

  useEffect(() => setInvest(investData), []);
  return (
    <Box>
      <Box>
        <Box minH={"550px"} w={"90%"} margin={"auto"}>
          {invest?.map((data) => (
            <Flex
              minH={"500px"}
              w={"98%"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box minH={"200px"} w={"40%"}>
                <Box minH={"80px"} w={"390px"}>
                  <Text
                    fontSize={"40px"}
                    fontWeight={"extrabold"}
                    textColor={"#40196D"}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box minH={"80px"} w={"400px"} mt={"3"}>
                  <Text>{data.Comment}</Text>
                </Box>

                <Flex minH={"33px"} w={"50"} mt={"4"}>
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
                  <Text fontSize={"12"} textColor={"#9E9E9E"}>
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
                minH={"470px"}
                w={"40%"}
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
