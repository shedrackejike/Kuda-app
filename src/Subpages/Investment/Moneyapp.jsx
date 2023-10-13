import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Link, Image } from "@chakra-ui/react";
import { moneyapp } from "../../utils/moneyapp";

const Moneyapp = () => {
  const [money, setMoneyapp] = useState([]);

  useEffect(() => setMoneyapp(moneyapp), []);
  return (
    <Box minH={"550px"} w={"100"} borderBottom={"1px"}>
      <Box
        minH={"440px"}
        w={"80%"}
        margin={"auto"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        boxShadow="2xl"
        p="1"
        rounded="md"
        bg={"#EFF1FF"}
      >
        {money?.map((item) => (
          <Flex
            h={"80%"}
            w={"85%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box minH={"60%"} w={"45%"}>
              <Box w={"80%"} minH={"50px"}>
                <Text
                  fontSize={"33px"}
                  fontWeight={"bold"}
                  textColor={"#57357F"}
                >
                  {item.app}
                </Text>
              </Box>
              <Box w={"90%"} minH={"50px"} mt={"3"}>
                <Text fontSize={"14px"}>{item.save}</Text>
              </Box>
              <Flex h={"13%"} w={"50"} mt={"9"}>
                <Link h={"12"} w={"30%"}>
                  <Image
                    objectFit="contain"
                    src="/images/appStore.png"
                    alt="logo"
                    width={"fit-content"}
                    mb={""}
                  />
                </Link>

                <Link h={"12"} w={"30%"} marginLeft={"6"}>
                  <Image
                    objectFit="cover"
                    src="/images/GooglePlay.png"
                    alt="logo"
                    width={"fit-content"}
                    mb={""}
                  />
                </Link>
              </Flex>
              <Flex h={"13%"} w={"50"}>
                <Text fontSize={"12"}>
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
            </Box>

            <Box
              minH={"400px"}
              w={"45%"}
              justify={"center"}
              alignItems={"center"}
              backgroundImage={item.image}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"center"}
              backgroundSize={"cover"}
              display={"flex"}
              margin={"auto"}
            ></Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Moneyapp;
