import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { stockData } from "../../utils/stock";

const Stock = () => {
  const [stock, setStock] = useState([]);
  useEffect(() => setStock(stockData), []);
  return (
    <Box minH={"400px"} w={"100%"}>
      <Box
        // minH={"380px"}
        // w={"90%"}
        // margin={"auto"}
        // alignItems={"center"}
        // justifyContent={"center"}
        // display={"flex"}
        minH={{ base: "500px", lg: "40px", xl: "550px" }}
        w={{ base: "100%", xl: "90%" }}
        margin={"auto"}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
      >
        <Flex
          // minH={"200px"}
          // w={"97%"}
          // justifyContent={"space-between"}
          flexWrap={"wrap"}
          margin={"auto"}
          minH={"100px"}
          justifyContent={{ base: "center", md: "space-evenly" }}
          alignItems={"center"}
          w={{ base: "100%", lg: "50%", xl: "100%" }}
        >
          {stock?.map((data) => (
            <Box
              // minH={"60px"}
              // w={"30%"}
              // mt={6}
              boxShadow="2xl"
              p="8"
              rounded="md"
              bg="white"
              mt={{ base: "5", lg: "4", xl: "2" }}
              minH={"60px"}
              w={{ base: "90%", lg: "50%", xl: "80%" }}
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
