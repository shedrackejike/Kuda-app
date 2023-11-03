import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { moneyData } from "../../utils/money";

const Money = () => {
  const [money, setMoney] = useState([]);

  useEffect(() => {
    setMoney(moneyData);
  }, []);
  return (
    <Box
      minH={{ base: "500px", lg: "40px", xl: "550px" }}
      w={{ base: "100%", lg: "86%", xl: "100%" }}
      borderBottom={"1px"}
    >
      <Box
        margin={"auto"}
        display={"flex"}
        boxShadow="2xl"
        p="1"
        rounded="md"
        bg={"#EFF1FF"}
        minH={{ base: "300px", lg: "40px", xl: "440px" }}
        w={{ base: "90%", lg: "50%", xl: "80%" }}
      >
        {money?.map((item) => (
          <Flex
            alignItems={"center"}
            minH={{ base: "200px", lg: "40px", xl: "440px" }}
            justifyContent={{ base: "center", md: "space-between" }}
            w={{ base: "100%", lg: "50%", xl: "100%" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box
              display={{ base: "flex", md: "block" }}
              flexDir={{ base: "column" }}
              alignItems={{ base: "center", xl: "center" }}
              justifyContent={{ base: "center", xl: "center" }}
              minH={{ base: "400px", lg: "50%", xl: "240px" }}
              w={{ base: "95%", md: "40%" }}
            >
              <Box w={"80%"} minH={"50px"}>
                <Text
                  fontSize={{ base: "40px", md: "30px" }}
                  fontWeight={"bold"}
                  textColor={"#57357F"}
                  textAlign={{ base: "center", md: "left" }}
                >
                  {item.app}
                </Text>
              </Box>
              <Box
                minH={"25%"}
                mt={"6px"}
                w={{ base: "80%", lg: "50%", xl: "90%" }}
              >
                <Text textAlign={{ base: "center", lg: "0", xl: "0" }}>
                  {item.save}
                </Text>
              </Box>
              <Box
                mt={"5"}
                h={"10"}
                bg={"#40196D"}
                w={"40%"}
                textAlign={"center"}
                textColor={"white"}
                fontSize={"14"}
                fontWeight={"bold"}
                borderRadius={"9"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  textColor={"white"}
                  textAlign={{ base: "center", lg: "0", xl: "0" }}
                >
                  {item.button}
                </Text>
              </Box>
            </Box>

            <Box
              display={{ base: "none", lg: "flex", xl: "flex" }}
              minH={"400px"}
              w={"45%"}
              justify={"center"}
              alignItems={"center"}
              backgroundImage={item.image}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"center"}
              backgroundSize={"cover"}
              margin={"auto"}
            />
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Money;
