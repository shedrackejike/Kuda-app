import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Image, Link } from "@chakra-ui/react";
import { airtimeapData } from "../../utils/airtimeap";

const Airtimeap = () => {
  const [air, setAirtime] = useState([]);
  useEffect(() => {
    setAirtime(airtimeapData);
  }, []);
  return (
    <Box>
      <Box>
        <Box minH={"550px"} w={"90%"} margin={"auto"}>
          {air?.map((data) => (
            <Flex
              minH={"500px"}
              w={"98%"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box minH={"200px"} w={"40%"}>
                <Box minH={"80px"} w={"390px"}>
                  <Text
                    fontSize={"42px"}
                    fontWeight={"extrabold"}
                    textColor={"#40196D"}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box minH={"80px"} w={"400px"} mt={"3"}>
                  <Text fontSize={"18px"}>{data.Comment}</Text>
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

export default Airtimeap;
