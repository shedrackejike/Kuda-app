import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { paypalData } from "../../utils/paypal";

const Paypal = () => {
  const [paypal, seetPaypal] = useState([]);
  useEffect(() => seetPaypal(paypalData), []);
  return (
    <Box>
      <Box>
        <Box
          // minH={"550px"}
          //  w={"90%"}
          //  margin={"auto"}
          margin={"auto"}
          w={{ base: "100%", md: "90%" }}
          mt={"90px"}
          minH={{ base: "350px", md: "550px" }}
        >
          {paypal?.map((data) => (
            <Flex
              // minH={"500px"}
              // w={"100%"}
              // justifyContent={"space-between"}
              // alignItems={"center"}
              minH={{ base: "300px", md: "550px" }}
              alignItems={"center"}
              justifyContent={{ md: "space-between" }}
              w={{ base: "100%", md: "100%" }}
              flexDirection={{ base: "column-reverse", md: "row" }}
            >
              <Box
                minH={{ base: "300px", md: "400px" }}
                w={{ base: "100%", md: "50%" }}
                justify={"center"}
                alignItems={"center"}
                backgroundImage={data.Image}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                backgroundSize={"contain"}
                display={"flex"}
                // margin={"auto"}
              ></Box>

              <Box
                //  minH={"250px"} w={"40%"}
                minH={{ base: "300px", md: "400px" }}
                w={{ base: "90%", md: "40%" }}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Box minH={"80px"} w={"330px"}>
                  <Text
                    // fontSize={"29px"}
                    // fontWeight={"extrabold"}
                    // textColor={"#40196D"}
                    textColor={"#40196D"}
                    fontSize={{ base: "26px", md: "30px" }}
                    fontWeight={"bold"}
                    textAlign={{ base: "center", md: "left" }}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box minH={"80px"} mt={"3"} w={{ base: "90%", md: "364px" }}>
                  <Text>{data.Comment}</Text>
                </Box>

                <Box
                  minH={"40px"}
                  w={{ base: "300px", md: "320px" }}
                  mt={"3"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Link>
                    <Text
                      fontSize={"15px"}
                      fontWeight={"semibold"}
                      textColor={"#40196D"}
                    >
                      {data.button}
                    </Text>
                  </Link>
                </Box>
              </Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Paypal;
