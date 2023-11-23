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
      minH={{ base: "750px", lg: "40px", xl: "550px" }}
      w={{ base: "100%", lg: "86%", xl: "90%" }}
    >
      {meet?.map((data) => (
        <Flex
          //   minH={"500px"}
          //   w={"90%"}
          //   justifyContent={"space-evenly"}
          //   alignItems={"center"}
          marginLeft={"9"}
          alignItems={"center"}
          minH={{ base: "420px", lg: "40px", xl: "500px" }}
          justifyContent={{ xl: "space-between" }}
          w={{ base: "90%", lg: "50%", xl: "100%" }}
          flexDirection={{ base: "column", lg: "row", xl: "row" }}
        >
          <Box
            margin={"auto"}
            bg={"red"}
            //   minH={"250px"} w={"40%"}
            minH={{ base: "400px", lg: "50%", xl: "250px" }}
            w={{ base: "100%", lg: "50%", xl: "40%" }}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box minH={"80px"} w={"390px"}>
              <Text
                //   fontSize={"35px"} fontWeight={"bold"} textColor={"#40196D"}
                fontSize={{ base: "33px", lg: "50%", xl: "40px" }}
                fontWeight={"bold"}
                textColor={"#57357F"}
                textAlign={{ base: "center", lg: "0", xl: "0" }}
              >
                {data.head}
              </Text>
            </Box>

            <Box
              minH={"80px"}
              mt={"3"}
              w={{ base: "80%", lg: "50%", xl: "400px" }}
            >
              <Text textAlign={{ base: "center", lg: "0", xl: "0" }}>
                {" "}
                {data.Comment}
              </Text>
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
            minH={{ base: "400px", lg: "50%", xl: "400px" }}
            w={{ base: "95%", lg: "50%", xl: "90%" }}
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
