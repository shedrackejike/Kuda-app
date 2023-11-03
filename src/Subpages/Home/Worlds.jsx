import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { worldData } from "../../utils/world";

const Worlds = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(worldData);
  }, []);
  return (
    <Flex
      border={"1px"}
      bg={"red"}
      margin={"auto"}
      minH={{ base: "280px", lg: "40px", xl: "550px" }}
      w={{ base: "100%", lg: "86%", xl: "90%" }}
    >
      {words?.map((data) => (
        <Flex
          alignItems={"center"}
          minH={{ base: "420px", lg: "40px", xl: "440px" }}
          justifyContent={{ xl: "space-between" }}
          w={{ base: "100%", lg: "50%", xl: "100%" }}
          flexDirection={{ base: "column", lg: "row", xl: "row" }}
          flexWrap={{ base: "wrap", lg: "wrap", xl: "wrap-reverse" }}
        >
          <Box
            minH={{ base: "40px", lg: "40px", xl: "40px" }}
            w={{ base: "100px", lg: "70px", xl: "100px" }}
          >
            <Image
              objectFit="inherit"
              src={data.image}
              alt="logo"
              width={"fit-content"}
              boxSize="100%"
            />
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default Worlds;
