import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { atmsData } from "../../utils/atms";

const Atms = () => {
  const [atms, setAtms] = useState([]);
  useEffect(() => setAtms(atmsData), []);
  return (
    <Box
      minH={{ base: "500px", lg: "40px", xl: "550px" }}
      w={{ base: "100%", xl: "90%" }}
      margin={"auto"}
      flexDirection={{ base: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
    >
      {atms?.map((data) => (
        <Flex
          margin={"auto"}
          minH={"100px"}
          justifyContent={{ base: "center", xl: "space-evenly" }}
          alignItems={"center"}
          w={{ base: "100%", lg: "50%", xl: "100%" }}
        >
          <Box
            // w={"330px"}
            boxShadow="2xl"
            p="8"
            rounded="md"
            bg="white"
            mt={{ base: "5", lg: "4", xl: "2" }}
            minH={"60px"}
            w={{ base: "90%", lg: "50%", xl: "80%" }}
          >
            <Box
              mb={{ base: "5", lg: "4", xl: "2" }}
              h={"7"}
              w={"10%"}
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
