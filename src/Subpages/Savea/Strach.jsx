import { Box, Text, Flex, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { strachData } from "../../utils/strach";

const Strach = () => {
  const [strach, setStrach] = useState([]);

  useEffect(() => setStrach(strachData), []);
  return (
    <Box>
      <Box
        //    minH={"650px"} w={"100%"} margin={"auto"}
        margin={"auto"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        minH={{ base: "500px", md: "550px" }}
        w={{ base: "100%", md: "90%" }}
      >
        {strach?.map((data) => (
          <Flex
            // minH={"500px"}
            // w={"100%"}
            // justifyContent={"space-around"}
            // alignItems={"center"}
            alignItems={"center"}
            //   alignItems={"center"}
            minH={{ base: "420px", md: "500px" }}
            justifyContent={{ md: "space-between" }}
            w={{ base: "100%", md: "100%" }}
            flexDirection={{ base: "column-reverse", md: "row" }}
          >
            <Box
              //   minH={"490px"}
              //   w={"55%"}
              minH={{ base: "400px", md: "400px" }}
              w={{ base: "90%", md: "45%" }}
              justify={"center"}
              alignItems={"center"}
              backgroundImage={data.image}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"center"}
              backgroundSize={"contain"}
              display={"flex"}
              margin={"auto"}
            ></Box>

            <Box
              // minH={"250px"} w={"40%"}
              minH={{ base: "400px", md: "250px" }}
              w={{ base: "95%", md: "40%" }}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Box minH={"80px"} w={"390px"}>
                <Text
                  //   fontSize={"36px"}
                  //   fontWeight={"bold"}
                  //   textColor={"#40196D"}
                  textColor={"#40196D"}
                  fontSize={{ base: "33px", md: "30px" }}
                  fontWeight={"bold"}
                  // textColor={"#57357F"}
                  textAlign={{ base: "center", md: "none" }}
                >
                  {data.head}
                </Text>
              </Box>

              <Box minH={"80px"} mt={"3"} w={{ base: "80%", md: "400px" }}>
                <Text textAlign={{ base: "center", md: "none" }}>
                  {data.Comment}
                </Text>
              </Box>

              <Box
                minH={"40px"}
                w={"255px"}
                mt={"3"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
              >
                <Link>
                  <Text fontWeight={"semibold"} textColor={"#40196D"}>
                    {data.button}{" "}
                  </Text>
                </Link>
              </Box>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Strach;
