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
      minH={{ base: "500px", md: "550px" }}
      w={{ base: "100%", md: "100%" }}
      borderBottom={"1px"}
    >
      <Box
        margin={"auto"}
        display={"flex"}
        boxShadow="2xl"
        p="1"
        rounded="md"
        bg={"#EFF1FF"}
        minH={{ base: "300px", md: "440px" }}
        w={{ base: "90%", md: "80%" }}
      >
        {money?.map((item) => (
          <Flex
            alignItems={"center"}
            minH={{ base: "200px", md: "440px" }}
            justifyContent={{ base: "center", md: "space-between" }}
            w={{ base: "100%", md: "100%" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box
              display={{ base: "flex", md: "block" }}
              flexDir={{ base: "column" }}
              alignItems={{ base: "center", md: "center" }}
              justifyContent={{ base: "center", md: "center" }}
              minH={{ base: "400px", md: "240px" }}
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
              <Box minH={"25%"} mt={"6px"} w={{ base: "80%", md: "90%" }}>
                <Text textAlign={{ base: "center", md: "none" }}>
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
                  textAlign={{ base: "center", md: "none" }}
                >
                  {item.button}
                </Text>
              </Box>
            </Box>

            <Box
              display={{ base: "none", md: "flex" }}
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
