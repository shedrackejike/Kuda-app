import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { atmsData } from "../../utils/atms";

const Atms = () => {
  const [atms, setAtms] = useState([]);
  useEffect(() => setAtms(atmsData), []);
  return (
    <Box
      minH={"360px"}
      w={"90%"}
      margin={"auto"}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
    >
      {atms?.map((data) => (
        <Flex
          minH={"200px"}
          w={"97%"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Box
            minH={"60px"}
            w={"330px"}
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
        </Flex>
      ))}
    </Box>
  );
};

export default Atms;
