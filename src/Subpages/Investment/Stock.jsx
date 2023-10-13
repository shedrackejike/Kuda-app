import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { stockData } from "../../utils/stock";

const Stock = () => {
  const [stock, setStock] = useState([]);
  useEffect(() => setStock(stockData), []);
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
          minH={"200px"}
          w={"97%"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {stock?.map((data) => (
            <Box
              minH={"60px"}
              w={"30%"}
              mt={6}
              boxShadow="2xl"
              p="8"
              rounded="md"
              bg="white"
            >
              <Box
                h={"7"}
                w={"10%"}
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

export default Stock;
