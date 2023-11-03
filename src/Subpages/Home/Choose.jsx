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
      minH={{ base: "280px", lg: "40px", xl: "550px" }}
      w={{ base: "100%", lg: "86%", xl: "90%" }}
    >
      <Box w={"50%"} minH={"60px"} margin={"auto"} mt={"5"}>
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
              border={"1px"}
              minH={{ base: "300px", lg: "50%", xl: "400px" }}
              w={{ base: "95%", lg: "50%", xl: "90%" }}
              boxShadow="2xl"
              p="1"
              rounded="md"
              bg="white"
            >
              <Image
                objectFit="contain"
                src={data.image}
                alt="logo"
                width={"fit-content"}
                boxSize="100%"
              />
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Choose;
