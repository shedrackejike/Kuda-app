import { Box, Text, Flex, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { meetData } from "../../utils/meet";

const Meet = () => {
  const [meet, setMeet] = useState([]);

  useEffect(() => setMeet(meetData), []);
  return (
    <Box
      margin={"auto"}
      // bg={"red"}
      minH={{ base: "750px", md: "550px" }}
      w={{ base: "100%", md: "90%" }}
    >
      {meet?.map((data) => (
        <Flex
          //   minH={"500px"}
          //   w={"90%"}
          //   justifyContent={"space-evenly"}
          //   alignItems={"center"}
          marginLeft={"9"}
          alignItems={"center"}
          minH={{ base: "420px", md: "500px" }}
          justifyContent={{ md: "space-between" }}
          w={{ base: "90%", md: "100%" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            margin={"auto"}
            //   minH={"250px"} w={"40%"}
            minH={{ base: "400px", md: "250px" }}
            w={{ base: "100%", md: "40%" }}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box minH={"80px"} w={"390px"}>
              <Text
                //   fontSize={"35px"} fontWeight={"bold"} textColor={"#40196D"}
                fontSize={{ base: "33px", md: "40px" }}
                fontWeight={"bold"}
                textColor={"#57357F"}
                textAlign={{ base: "center" }}
              >
                {data.head}
              </Text>
            </Box>

            <Box minH={"80px"} mt={"3"} w={{ base: "80%", md: "400px" }}>
              <Text textAlign={{ base: "center" }}> {data.Comment}</Text>
            </Box>

            <Box
              minH={"40px"}
              w={"269px"}
              mt={"3"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Link>
                <Text fontWeight={"semibold"} textColor={"#40196D"}>
                  {data.button}
                </Text>
              </Link>
            </Box>
          </Box>

          <Box
            // minH={"450px"}
            // w={"440%"}
            minH={{ base: "400px", md: "400px" }}
            w={{ base: "95%", md: "40%" }}
            justify={"center"}
            alignItems={"center"}
            backgroundImage={data.image}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundSize={"contain"}
            display={"flex"}
            margin={"auto"}
          ></Box>
        </Flex>
      ))}
    </Box>
  );
};

export default Meet;
