import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { needpayData } from "../../utils/needpay";

const Needpay = () => {
  const [needpay, setNeedpay] = useState([]);

  useEffect(() => setNeedpay(needpayData), []);
  return (
    <Box>
      <Box minH={"550px"} w={"90%"} margin={"auto"}>
        {needpay?.map((data) => (
          <Flex
            minH={"500px"}
            w={"100%"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Box minH={"200px"} w={"40%"}>
              <Box minH={"50px"} w={"390px"}>
                <Text
                  fontSize={"33px"}
                  fontWeight={"bold"}
                  textColor={"#40196D"}
                >
                  {data.head}
                </Text>
              </Box>

              <Box minH={"80px"} w={"330px"} mt={"3"}>
                <Text fontWeight={"semibold"}>{data.Comment}</Text>
              </Box>

              <Box minH={"40px"} w={"220px"} display={"flex"}>
                <Link>
                  <Text fontWeight={"semibold"} textColor={"#40196D"}>
                    {data.button}
                  </Text>
                </Link>
              </Box>
            </Box>

            <Box
              minH={"470px"}
              w={"50%"}
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
  );
};

export default Needpay;
