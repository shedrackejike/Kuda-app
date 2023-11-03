import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaMedium, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <Box minH={"800px"} w={"90%"} margin={"auto"}>
      <Flex
        minH={"100px"}
        // margin={"auto"}
        m={"7"}
        justifyContent={{ xl: "space-evenly" }}
        flexDirection={{ base: "row", lg: "column", xl: "row" }}
        w={{ base: "90%", lg: "86%", xl: "90%" }}
        margin={"auto"}
        wrap={"wrap"}
      >
        <Flex w={{ base: "100%", lg: "11%", xl: "100px" }} mb={"20px"}>
          <Box
            minH={"50px"}
            w={{ base: "100%", lg: "11%", xl: "100px" }}
            justify={"left"}
            backgroundImage="images/kudalogo.png"
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"left"}
            backgroundSize={"contain"}
          ></Box>
        </Flex>

        <Box minH={"200px"} w={{ base: "50%", lg: "11%", xl: "170px" }}>
          <Text fontWeight={"bold"} textColor={"#57357F"}>
            Personal
          </Text>
          <Text mt={"2"} fontSize={"13px"}>
            Discover Personal
          </Text>
          <Text mt={"2"} fontSize={"13px"}>
            Transfer & Spend
          </Text>
          <Text mt={"2"} fontSize={"13px"}>
            Save
          </Text>
          <Text mt={"2"} fontSize={"13px"}>
            Investments
          </Text>
          <Text mt={"2"} fontSize={"13px"}>
            Kuda card
          </Text>
        </Box>

        <Box minH={"200px"} w={{ base: "50%", lg: "11%", xl: "170px" }}>
          <Text fontWeight={"bold"} textColor={"#57357F"}>
            Business
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Discover Business
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Business Registration
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            SoftPOS
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Invoicing
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Electricity
          </Text>
        </Box>

        <Box minH={"200px"} w={{ base: "50%", lg: "11%", xl: "170px" }}>
          <Text fontWeight={"bold"} textColor={"#57357F"}>
            Company
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Blog
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Press
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Join Our Team
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            About Us
          </Text>
        </Box>

        <Box minH={"200px"} w={{ base: "50%", lg: "11%", xl: "170px" }}>
          <Text fontWeight={"bold"} textColor={"#57357F"}>
            Help
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Get Help
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Scam Awareness
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            FAQs
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Security
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Contact Us
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Self Help
          </Text>
        </Box>

        <Box minH={"200px"} w={{ base: "50%", lg: "11%", xl: "170px" }}>
          <Text fontWeight={"bold"} textColor={"#57357F"}>
            Transparency
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Terms & Conditions
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Privacy Policy
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Information Security Policy
          </Text>
          <Text mt={"1"} fontSize={"13px"}>
            Cookie Policy
          </Text>
        </Box>
      </Flex>

      <Box minH={"60px"} w={{ base: "100%", lg: "86%", xl: "40%" }}>
        <Flex
          minH={"50px"}
          // w={"96%"}
          // margin={"auto"}
          // justifyContent={"space-evenly"}
          justifyContent={{ base: "space-around", xl: "space-between" }}
          flexDirection={{ base: "row", lg: "column", xl: "row" }}
          w={{ base: "100%", lg: "86%", xl: "107%" }}
          margin={"auto"}
        >
          <Box
            minH={"40px"}
            w={{ base: "30%", lg: "11%", xl: "170px" }}
            justify={"center"}
            alignItems={"center"}
            backgroundImage="images/appStore.png"
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            display={"flex"}
          ></Box>

          <Box
            minH={"40px"}
            w={{ base: "30%", lg: "11%", xl: "170px" }}
            justify={"center"}
            alignItems={"center"}
            backgroundImage="images/GooglePlay.png"
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            display={"flex"}
          ></Box>

          <Box
            minH={"40px"}
            w={{ base: "30%", lg: "11%", xl: "170px" }}
            justify={"center"}
            alignItems={"center"}
            backgroundImage="images/web.png"
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            display={"flex"}
          ></Box>
        </Flex>
      </Box>

      <Box minH={"50px"} w={"90%"} margin={"auto"}>
        <Text textAlign={"center"} textColor={"#9E9E9E"}>
          Products may vary by country or market
        </Text>
      </Box>

      <Box
        minH={"100%"}
        justifyContent={{ xl: "space-evenly" }}
        flexDirection={{ base: "column", lg: "column", xl: "row" }}
        w={{ base: "90%", lg: "86%", xl: "100%" }}
        margin={"auto"}
      >
        <Flex
          minH={"100px"}
          // w={"90%"}
          // margin={"auto"}
          m={"7"}
          // justifyContent={"space-evenly"}
          justifyContent={{ xl: "space-evenly" }}
          flexDirection={{ base: "column", lg: "column", xl: "row" }}
          w={{ base: "100%", lg: "86%", xl: "100%" }}
          margin={"auto"}
        >
          <Box h={"150px"} w={"350px"}>
            <Text fontWeight={"bold"} textColor={"#57357F"}>
              Contact
            </Text>
            <Link>
              <Text mt={"5"} fontWeight={"bold"} textColor={"#57357F"}>
                help@kuda.com
              </Text>
            </Link>
            <Flex
              minH={"50px"}
              w={"350px"}
              justifyContent={"space-evenly"}
              mt={"5"}
            >
              <Box
                borderRadius={"3xl"}
                minH={"45px"}
                w={"45px"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#DFE3FF"}
              >
                <FaTwitter />
              </Box>

              <Box
                borderRadius={"3xl"}
                minH={"45px"}
                w={"45px"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#DFE3FF"}
              >
                <GrInstagram />
              </Box>

              <Box
                borderRadius={"3xl"}
                minH={"45px"}
                w={"45px"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#DFE3FF"}
              >
                <FaFacebook />
              </Box>

              <Box
                borderRadius={"3xl"}
                minH={"45px"}
                w={"45px"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#DFE3FF"}
              >
                <IoLogoYoutube />
              </Box>

              <Box
                borderRadius={"3xl"}
                minH={"45px"}
                w={"45px"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#DFE3FF"}
              >
                <FaMedium />
              </Box>

              <Box
                borderRadius={"3xl"}
                minH={"45px"}
                w={"45px"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                bg={"#DFE3FF"}
              >
                <FaLinkedinIn />
              </Box>
            </Flex>
          </Box>

          <Box minH={"150px"} w={"200px"}>
            <Text fontWeight={"bold"} textColor={"#57357F"}>
              Lagos
            </Text>
            <Text mt={"5"} fontSize={"13px"}>
              151 Herbert Macaulay Way, Yaba,
            </Text>
            <Text fontSize={"13px"}>Lagos,</Text>
            <Text fontSize={"13px"}>Nigeria</Text>
          </Box>

          <Box minH={"150px"} w={"200px"}>
            <Text fontWeight={"bold"} textColor={"#57357F"}>
              London
            </Text>
            <Text mt={"5"} fontSize={"13px"}>
              5 New Street Square,
            </Text>
            <Text fontSize={"13px"}>London, EC4A 3TW,</Text>
            <Text fontSize={"13px"}>United Kingdom</Text>
          </Box>

          <Box minH={"150px"} w={"200px"}>
            <Text fontWeight={"bold"} textColor={"#57357F"}>
              Cape Town
            </Text>
            <Text mt={"5"} fontSize={"13px"}>
              146 Campground Road,
            </Text>
            <Text fontSize={"13px"}>Snakepit Building, Level 4,</Text>
            <Text fontSize={"13px"}>Newlands, Cape Town</Text>
          </Box>
        </Flex>
      </Box>

      <Box
        margin={"auto"}
        minH={{ base: "620px", xl: "100%" }}
        w={{ base: "100%", lg: "86%", xl: "100%" }}
      >
        <Box minH={"300px"} w={"93%"} margin={"auto"} mt={{ base: "5" }}>
          <Box minH={"70px"} w={"70%"}>
            <Text textColor={"#9E9E9E"}>
              *Kuda Customers get 25 free transfer to other banks every month.
              Extra transfers to other banks cost ₦10 each. **Kuda account
              holders can deposit money in over 10,000 branches across Nigeria
              for free.
            </Text>
          </Box>

          <Box minH={"70px"} w={"100%"} mt={{ base: "5" }}>
            <Text textColor={"#9E9E9E"}>
              © 2023 Kuda Technologies Ltd (Company No.11472232). All rights
              reserved.
            </Text>
          </Box>

          <Box minH={"70px"} w={"100%"} mt={{ base: "5" }}>
            <Text fontSize={"13px"} textColor={"#9E9E9E"}>
              If you would like to find out more about which Kuda entity you
              receive services from, please reach out to us via the in-app chat
              in the Kuda app. Nigerian banking services offered by Kuda
              Microfinance Bank (RC796975) with registered address at 151 -
              Herbert Macaulay Way, Yaba, Lagos, Nigeria. Kuda Microfinance Bank
              is licensed by the Central Bank of Nigeria. Deposits are insured
              by the Nigerian Deposit Insurance Corporation (NDIC).
            </Text>
          </Box>

          <Box minH={"70px"} w={"100%"} mt={{ base: "5" }}>
            <Text fontSize={"12px"} textColor={"#9E9E9E"}>
              UK services are offered by Kuda EMI Ltd (Company No. 13724208)
              with registered address at 5 New Street Square, London, EC4A 3TW,
              United Kingdom. Kuda EMI Ltd is A Distributor of Modulr FS
              Limited. Modulr FS Limited (Company No 09897919), is regulated by
              the Financial Conduct Authority for issuance of electronic money
              under reference 900573.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
