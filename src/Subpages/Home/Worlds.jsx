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
      margin={"auto"}
      minH={{ base: "200px", md: "190px" }}
      w={{ base: "100%", md: "90%" }}
      flexWrap={{ base: "wrap", md: "wrap" }}
      justify={"space-between"}
      justifyContent={"space-around"}
    >
      {words?.map((data) => (
        <Box h={{ base: "50px", md: "50px" }} w={{ base: "28%", md: "100px" }}>
          <Image
            objectFit="inherit"
            src={data.image}
            alt="logo"
            width={"fit-content"}
            boxSize="100%"
          />
        </Box>
      ))}
    </Flex>
  );
};

export default Worlds;
