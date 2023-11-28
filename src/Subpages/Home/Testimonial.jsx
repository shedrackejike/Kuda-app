import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { testimonialData } from "../../utils/testimonials";
import Marquee from "react-fast-marquee";

export default function Testimonial() {
  const [monials, setMonials] = useState([]);

  useEffect(() => {
    setMonials(testimonialData);
  }, []);

  return (
    <Box margin={"auto"} minH={"370px"}>
      <Box minH={"15%"} w={"90%"} margin={"auto"}>
        <Text
          textColor={"#57357F"}
          textAlign={"center"}
          fontSize={"37px"}
          fontWeight={"bold"}
        >
          Don’t just take our word for it
        </Text>
      </Box>

      <Flex
        mt={"5"}
        w={"100%"}
        bg={""}
        minH={"100px"}
        border={""}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Marquee>
          {monials?.map((item) => (
            <Box
              mt={"5"}
              minH={"200px"}
              w={"400px"}
              mx={4}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              boxShadow="md"
              p="1"
              rounded="md"
              bg="white"
            >
              <Box h={"84%"} w={"90%"}>
                <Box minH="50px" w={"100%"}>
                  <Text fontSize={"14px"}>{item.comment}</Text>
                </Box>

                <Flex h={"44%"} w={"90%"} mt={3} alignItems={"center"}>
                  <Box h={"50px"} w={"50px"} borderRadius={"50%"}>
                    <Image
                      borderRadius={"50%"}
                      objectFit="inherit"
                      src={item.image}
                      alt="logo"
                      width={"fit-content"}
                      boxSize="100%"
                    />
                  </Box>
                  <Text marginLeft={"2"}>{item.name}</Text>
                </Flex>
              </Box>
            </Box>
          ))}
        </Marquee>
      </Flex>
    </Box>
  );
}
