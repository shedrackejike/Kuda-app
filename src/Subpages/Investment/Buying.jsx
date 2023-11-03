import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { buyingData } from "../../utils/buying";

const Buying = () => {
  const [buying, setBuying] = useState([]);

  useEffect(() => setBuying(buyingData), []);
  return (
    <Box>
      <Box>
        <Box
          //  minH={"550px"} w={"90%"}
          margin={"auto"}
          w={{ base: "100%", lg: "86%", xl: "90%" }}
          mt={"90px"}
          minH={{ base: "350px", xl: "550px" }}
        >
          {buying?.map((data) => (
            <Flex
              // minH={"500px"}
              // w={"100%"}
              // justifyContent={"space-evenly"}
              // alignItems={"center"}
              minH={{ base: "300px", xl: "550px" }}
              alignItems={"center"}
              justifyContent={{ xl: "space-between" }}
              w={{ base: "100%", lg: "50%", xl: "100%" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box
                // minH={"250px"} w={"40%"}
                minH={{ base: "300px", lg: "50%", xl: "400px" }}
                w={{ base: "90%", lg: "50%", xl: "90%" }}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Box minH={"80px"} w={"330px"}>
                  <Text
                    // fontSize={"25px"}
                    fontWeight={"extrabold"}
                    textColor={"#40196D"}
                    fontSize={{ base: "26px", lg: "50%", xl: "40px" }}
                    // fontWeight={"bold"}
                    // textColor={"#57357F"}
                    textAlign={{ base: "center", lg: "0", xl: "0" }}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box
                  minH={"80px"}
                  // w={"400px"}
                  mt={"3"}
                  w={{ base: "80%", lg: "50%", xl: "400px" }}
                >
                  <Text textAlign={{ base: "center", lg: "0", xl: "0" }}>
                    {data.Comment}
                  </Text>
                </Box>

                <Box
                  minH={"40px"}
                  w={"320px"}
                  mt={"3"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Link>
                    <Text
                      fontSize={"15px"}
                      fontWeight={"semibold"}
                      textColor={"#40196D"}
                    >
                      {data.button}
                    </Text>
                  </Link>
                </Box>
              </Box>

              <Box
                minH={{ base: "300px", lg: "50%", xl: "400px" }}
                w={{ base: "100%", lg: "50%", xl: "60%" }}
                justify={"center"}
                alignItems={"center"}
                backgroundImage={data.Image}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                backgroundSize={"contain"}
                display={"flex"}
                // margin={"auto"}
              ></Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Buying;
