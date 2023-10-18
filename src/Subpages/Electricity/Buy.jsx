import React, { useEffect, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { buyData } from "../../utils/buy";
const Buy = () => {
  const [buy, setBuy] = useState([]);

  useEffect(() => setBuy(buyData), []);
  return (
    <Box minH={"400px"} w={"100%"}>
      <Box
        minH={"380px"}
        w={"90%"}
        margin={"auto"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
      >
        <Flex
          minH={"70px"}
          w={"97%"}
          justifyContent={"space-evenly"}
          flexWrap={"wrap"}
        >
          {buy?.map((data) => (
            <Box
              minH={"30px"}
              w={"30%"}
              mt={6}
              boxShadow="2xl"
              p="8"
              rounded="md"
              bg="white"
            >
              <Box
                h={"10"}
                w={"13%"}
                mb={"2"}
                marginLeft={"4"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#DFE3FF"}
              >
                {data.icon}
              </Box>

              <Box minH={"60%"} w={"90%"} margin={"auto"}>
                <Text textColor={"#57357F"} fontSize={"13"} fontWeight={"bold"}>
                  {data.Comment}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Buy;
