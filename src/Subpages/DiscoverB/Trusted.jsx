import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { trustedData } from "../../utils/trusted";

const Trusted = () => {
  const [trust, setTrust] = useState([]);

  useEffect(() => {
    setTrust(trustedData);
  }, []);
  return (
    <Box
      minH={"200px"}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
    >
      <Box minH={"50px"} w={"90%"} bg={"black"} borderRadius={"10px"}>
        <Box minH={"40px"} w={"80%"} margin={"auto"}>
          <Text
            textAlign={"center"}
            textColor={"white"}
            mt={"9"}
            fontSize={"24px"}
            fontWeight={"bold"}
          >
            Trusted By Top African Businesses
          </Text>
        </Box>
        <Flex
          mt={"5"}
          w={"100%"}
          bg={"black"}
          minH={"100px"}
          border={""}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Marquee>
            {trust?.map((item) => (
              <Box
                mt={"5"}
                minH={"40px"}
                w={"150px"}
                mx={4}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                boxShadow="md"
                p="1"
                rounded="md"
              >
                <Box
                  minH={"64px"}
                  w={"90%"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                >
                  <Flex minH={"25px"} alignItems={"center"}>
                    <Box minH={"70px"} w={"150px"}>
                      <Image
                        objectFit="inherit"
                        src={item.image}
                        alt="logo"
                        width={"cover"}
                        boxSize="100%"
                      />
                    </Box>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Marquee>
        </Flex>
      </Box>
    </Box>
  );
};

export default Trusted;
