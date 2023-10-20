import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { withoutData } from "../../utils/without";

const Without = () => {
  const [without, setWithout] = useState([]);

  useEffect(() => {
    setWithout(withoutData);
  }, []);
  return (
    <Box>
      <Box>
        <Box minH={"550px"} w={"90%"} margin={"auto"}>
          {without?.map((data) => (
            <Flex
              minH={"500px"}
              w={"98%"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                minH={"470px"}
                w={"45%"}
                justify={"center"}
                alignItems={"center"}
                backgroundImage={data.Image}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                backgroundSize={"contain"}
                display={"flex"}
              ></Box>

              <Box minH={"200px"} w={"40%"}>
                <Box minH={"80px"} w={"390px"}>
                  <Text
                    fontSize={"30px"}
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
                  w={"230px"}
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
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Without;
