import React, { useEffect, useState } from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { choseData } from "../../utils/chose";

const Choose = () => {
  const [chose, setChose] = useState([]);

  useEffect(() => {
    setChose(choseData);
  }, []);

  return (
    <Box
      margin={"auto"}
      minH={{ base: "280px", md: "550px" }}
      w={{ base: "100%", md: "90%" }}
    >
      <Box minH={"60px"} margin={"auto"} mt={"5"}>
        <Text
          textAlign={"center"}
          fontSize={"33px"}
          fontWeight={"bold"}
          textColor={"#57357F"}
        >
          Choose the freedom you need.
        </Text>
      </Box>

      <Flex mt={5} minH={"700px"}>
        {chose?.map((data) => (
          <Flex
            w={"90%"}
            minH={"300px"}
            alignItems={"center"}
            justifyContent={"center"}
            margin={"auto"}
          >
            <Box
              minH={{ base: "300px", md: "400px" }}
              w={{ base: "95%", md: "90%" }}
              boxShadow="2xl"
              p="1"
              rounded="md"
              bg="white"
            >
              <Image
                src={data.image}
                alt="logo"
                boxSize="100%"
                h={{ base: "300px", md: "400px" }}
                // minH={{ base: "300px", md: "400px" }}
              />
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Choose;
