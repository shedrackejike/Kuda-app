import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";
import { discoverData } from "../../utils/discover";

const Discoverb = () => {
  const [discover, setDiscover] = useState([]);

  useEffect(() => {
    setDiscover(discoverData);
  }, []);
  return (
    <Box>
      <Box>
        <Box minH={"550px"} w={"90%"} margin={"auto"}>
          {discover?.map((data) => (
            <Flex
              minH={"500px"}
              w={"98%"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box minH={"200px"} w={"40%"}>
                <Box minH={"80px"} w={"420px"}>
                  <Text
                    fontSize={"45px"}
                    fontWeight={"extrabold"}
                    textColor={"black"}
                  >
                    {data.head}
                  </Text>
                </Box>

                <Box minH={"80px"} w={"400px"} mt={"3"}>
                  <Text fontSize={"18px"}>{data.Comment}</Text>
                </Box>

                <Flex minH={"10px"} w={"50"} mt={"3"}>
                  <Text fontSize={"12"} textColor={"#9E9E9E"}>
                    Fully Licensed by the CBN 🙌 Deposits lnsured by
                  </Text>
                  <Box h={"12"} w={"15%"} marginLeft={"2"}>
                    <Image
                      objectFit="cover"
                      src="/images/NDIC.png"
                      alt="logo"
                      width={"fit-content"}
                    />
                  </Box>
                </Flex>

                <Box
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
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Discoverb;
