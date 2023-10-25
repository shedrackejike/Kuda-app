import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { placeData } from "../../utils/place";

const Place = () => {
  const [place, setPlace] = useState([]);

  useEffect(() => {
    setPlace(placeData);
  }, []);
  return (
    <Box>
      <Box>
        <Box minH={"550px"} w={"90%"} margin={"auto"}>
          {place?.map((data) => (
            <Flex
              minH={"500px"}
              w={"98%"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                minH={"470px"}
                w={"40%"}
                justify={"center"}
                alignItems={"center"}
                backgroundImage={data.Image}
                backgroundRepeat={"no-repeat"}
                backgroundPosition={"center"}
                backgroundSize={"contain"}
                display={"flex"}
              ></Box>

              <Box minH={"200px"} w={"40%"}>
                <Box minH={"80px"} w={"420px"}>
                  <Text
                    fontSize={"35px"}
                    fontWeight={"extrabold"}
                    textColor={"black"}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box minH={"80px"} w={"400px"} mt={"3"}>
                  <Text fontSize={"18px"}>{data.Comment}</Text>
                </Box>

                <Box
                  mt={"5"}
                  bg={"black"}
                  minH={"60px"}
                  w={"300px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                  borderRadius={"9"}
                >
                  <Link>
                    <Text
                      fontSize={"15px"}
                      fontWeight={"semibold"}
                      textColor={"white"}
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

export default Place;
