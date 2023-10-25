import React, { useEffect, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { creatData } from "../../utils/creat";

const Create = () => {
  const [creat, setCreat] = useState([]);

  useEffect(() => {
    setCreat(creatData);
  }, []);
  return (
    <Box minH={"250px"} w={"100%"}>
      <Box
        minH={"200px"}
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
          {creat?.map((data) => (
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
                <Text textColor={"black"} fontSize={"13"} fontWeight={"bold"}>
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

export default Create;
