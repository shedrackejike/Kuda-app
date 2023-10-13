import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { buyingData } from "../../utils/buying";

const Buying = () => {
  const [buying, setBuying] = useState([]);

  useEffect(() => setBuying(buyingData), []);
  return (
    <Box>
      <Box>
        <Box minH={"550px"} w={"90%"} margin={"auto"}>
          {buying?.map((data) => (
            <Flex
              minH={"500px"}
              w={"100%"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box minH={"250px"} w={"40%"}>
                <Box minH={"80px"} w={"330px"}>
                  <Text
                    fontSize={"25px"}
                    fontWeight={"extrabold"}
                    textColor={"#40196D"}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box minH={"80px"} w={"400px"} mt={"3"}>
                  <Text>{data.Comment}</Text>
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
                minH={"470px"}
                w={"50%"}
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
