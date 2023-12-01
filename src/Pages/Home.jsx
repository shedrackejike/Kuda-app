import React from "react";
import { Box, Flex, Link, Image, Text } from "@chakra-ui/react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaBalanceScaleRight, FaPaperPlane } from "react-icons/fa";
import { HiShieldExclamation } from "react-icons/hi";
import { WiMoonAltWaxingGibbous1 } from "react-icons/wi";
import { LuChevronRight } from "react-icons/lu";
import Testimonial from "../Subpages/Home/Testimonial";
import Worlds from "../Subpages/Home/Worlds";
import Partners from "../Subpages/Home/Partners";
import Choose from "../Subpages/Home/Choose";
import Money from "../Subpages/Home/Money";

const Home = () => {
  return (
    <Box minH={"100vh"} w={"100%"} mt={"80px"}>
      <Flex margin={"auto"} minH={"80%"} w={{ base: "90%", md: "86%" }}>
        <Flex
          minH={"550px"}
          alignItems={"center"}
          justifyContent={{ md: "space-between" }}
          w={{ base: "100%", md: "100%" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box minH={"440px"} w={{ base: "100%", md: "50%" }}>
            <Box minH={"30%"} w={"50"} mt={"5"}>
              <Text
                fontSize={"43px"}
                fontWeight={"extrabold"}
                textColor={"#57357F"}
                textAlign={{ base: "center", md: "left" }}
              >
                The money app for Africans.
              </Text>
            </Box>

            <Box
              minH={"22%"}
              w={{ base: "100%", md: "70%" }}
              mt={"9"}
              textAlign={{ base: "center", md: "left" }}
            >
              <Text fontSize={"20px"}>
                Make free transfers, enjoy cashless payment options and earn
                interest on your savings with Kuda.
              </Text>
            </Box>

            <Flex
              h={"13%"}
              mt={"9"}
              justify={{ base: "center", md: "left" }}
              align={{ base: "center", md: "flex-start" }}
              // align={{ base: "left", md: "center" }}
            >
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
            <Flex ml={{ base: "10px", md: "0" }} mt={"5"} h={"13%"} w={"50"}>
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
          <Flex
            minH="400px"
            w={{ base: "100%", md: "50%" }}
            // borderRadius="full"
            justify={"center"}
            alignItems={"center"}
            backgroundImage="/images/adaka.png  "
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            display={"flex"}
            margin={"auto"}
          ></Flex>
        </Flex>
      </Flex>

      <Box w={"90%"} margin={"auto"} minH={{ base: "850px", md: "500px" }}>
        <Flex
          // margin={"auto"}
          minH={"200px"}
          justifyContent={{ md: "space-evenly" }}
          alignItems={"center"}
          w={{ base: "100%", md: "100%" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            mt={{ base: "5", md: "2" }}
            minH={"120"}
            w={{ base: "100%", md: "30%" }}
            boxShadow="md"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box
              h={"7"}
              w={"10%"}
              mb={{ base: "5", md: "2" }}
              marginLeft={"4"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              bg={"#DFE3FF"}
            >
              <BsFillCreditCardFill />
            </Box>

            <Box h={"60%"} w={"90%"} margin={"auto"}>
              <Text textColor={"#57357F"} fontSize={"13"} fontWeight={"bold"}>
                Order a Kuda Visa card on the app with pickup and delivery
                options
              </Text>
            </Box>
          </Box>

          <Box
            mt={{ base: "5", md: "2" }}
            minH={"120"}
            w={{ base: "100%", md: "30%" }}
            boxShadow="md"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box
              h={"7"}
              w={"10%"}
              mb={"2"}
              marginLeft={"4"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              bg={"#DFE3FF"}
            >
              <WiMoonAltWaxingGibbous1 />
            </Box>

            <Box h={"60%"} w={"90%"} margin={"auto"}>
              <Text textColor={"#57357F"} fontSize={"13"} fontWeight={"bold"}>
                Enjoy cashless payment options online and offline.
              </Text>
            </Box>
          </Box>

          <Box
            mt={{ base: "5", md: "2" }}
            minH={"120"}
            w={{ base: "100%", md: "30%" }}
            boxShadow="md"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box
              h={"7"}
              w={"10%"}
              mb={"2"}
              marginLeft={"4"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              bg={"#DFE3FF"}
            >
              <FaBalanceScaleRight />
            </Box>

            <Box h={"60%"} w={"90%"} margin={"auto"}>
              <Text textColor={"#57357F"} fontSize={"13"} fontWeight={"bold"}>
                Pay your essential bills and buy gift cards easily.
              </Text>
            </Box>
          </Box>
        </Flex>

        <Flex
          margin={"auto"}
          minH={"100px"}
          justifyContent={{ md: "space-evenly" }}
          alignItems={"center"}
          w={{ base: "100%", md: "80%" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            mt={{ base: "5", md: "2" }}
            minH={"120"}
            w={{ base: "100%", md: "40%" }}
            boxShadow="md"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box
              h={"7"}
              w={"10%"}
              mb={"2"}
              marginLeft={"4"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              bg={"#DFE3FF"}
            >
              <FaPaperPlane />
            </Box>

            <Box h={"70%"} w={"90%"} margin={"auto"}>
              <Text textColor={"#57357F"} fontSize={"13"} fontWeight={"bold"}>
                Get 25 free transfers to Nigerian banks every month.
              </Text>
            </Box>
          </Box>

          <Box
            mt={{ base: "5", md: "2" }}
            minH={"120"}
            w={{ base: "100%", md: "40%" }}
            boxShadow="md"
            p="6"
            rounded="md"
            bg="white"
          >
            <Box
              h={"7"}
              w={"10%"}
              mb={"2"}
              marginLeft={"4"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              bg={"#DFE3FF"}
            >
              <HiShieldExclamation />
            </Box>

            <Box h={"50%"} w={"90%"} margin={"auto"}>
              <Text textColor={"#57357F"} fontSize={"13"} fontWeight={"bold"}>
                Save money automatically any time you spend.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box
        mt={"60px"}
        margin={"auto"}
        minH={{ base: "750px", md: "550px" }}
        w={{ base: "100%", md: "90%" }}
      >
        <Flex
          margin={"auto"}
          alignItems={"center"}
          minH={{ base: "420px", md: "440px" }}
          justifyContent={{ md: "space-between" }}
          w={{ base: "100%", md: "100%" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            minH={{ base: "400px", md: "400px" }}
            w={{ base: "95%", md: "90%" }}
            // alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box
              minH={"60%"}
              w={{ base: "60%", md: "50%" }}
              margin={{ base: "auto", md: "none" }}
            >
              <Text
                fontSize={{ base: "29px", md: "40px" }}
                fontWeight={"bold"}
                textColor={"#57357F"}
                textAlign={{ base: "center", md: "left" }}
              >
                Your phone + our app + a debit card = a simpler life.
              </Text>
            </Box>

            <Box
              mt={2}
              h={"35%"}
              w={{ base: "80%", md: "70%" }}
              alignItems={{ base: "center" }}
              justifyContent={{ base: "center" }}
              display={{ base: "flex" }}
              margin={{ base: "auto" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Text>
                We designed a money app for your lifestyle, and you can get a
                debit card to go with it. That's all you need to make the right
                money moves.
              </Text>
            </Box>

            <Flex w={"70%"} h={"13%"} mt={"3"} margin={{ base: "auto" }}>
              <Link>
                <Text
                  fontWeight={"bold"}
                  textColor={"#57357F"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  display={"flex"}
                  textAlign={{ base: "center" }}
                >
                  Open An Account in Minutes <LuChevronRight />
                </Text>
              </Link>
            </Flex>
          </Box>

          <Box
            margin={"auto"}
            minH={{ base: "400px", md: "300px" }}
            w={{ base: "95%", md: "90%" }}
          >
            <Image
              objectFit="cover"
              src="/images/phone.png"
              alt="logo"
              width={"fit-content"}
              boxSize="100%"
            />
          </Box>
        </Flex>
      </Box>

      <Box
        margin={"auto"}
        minH={{ base: "750px", md: "550px" }}
        w={{ base: "100%", md: "90%" }}
      >
        <Flex
          alignItems={"center"}
          minH={{ base: "420px", md: "440px" }}
          justifyContent={{ md: "space-between" }}
          w={{ base: "100%", md: "100%" }}
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Box
            minH={{ base: "400px", md: "300px" }}
            w={{ base: "95%", md: "90%" }}
          >
            <Image
              objectFit="cover"
              src="/images/money.png"
              alt="logo"
              width={"fit-content"}
              boxSize="100%"
            />
          </Box>

          <Box
            minH={{ base: "400px", md: "400px" }}
            w={{ base: "95%", md: "90%" }}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box minH={"25%"} w={"68%"}>
              <Text
                fontSize={{ base: "26px", md: "35px" }}
                fontWeight={"bold"}
                textColor={"#57357F"}
                textAlign={{ base: "center", md: "none" }}
              >
                It’s your money, we just help you manage it.
              </Text>
            </Box>

            <Box
              //  h={"25%"} mt={"6"} w={{ base: "80%", md: "70%" }}
              mt={2}
              h={"35%"}
              w={{ base: "80%", md: "70%" }}
              alignItems={{ base: "center" }}
              justifyContent={{ base: "center" }}
              display={{ base: "flex" }}
              margin={{ base: "auto" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Text
                fontSize={"15.4px"}
                // textAlign={{ base: "center", md: "left" }}
              >
                Save it, spend it, send it. It’s up to you. Whatever you choose
                to do with your money, we’ll make sure it’s done better and free
                of charge. We take responsibility for that.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box
        margin={"auto"}
        minH={{ base: "750px", md: "550px" }}
        w={{ base: "100%", md: "90%" }}
      >
        <Flex
          alignItems={"center"}
          minH={{ base: "420px", md: "440px" }}
          justifyContent={{ md: "space-between" }}
          w={{ base: "100%", md: "100%" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            minH={{ base: "400px", md: "400px" }}
            w={{ base: "95%", md: "45%" }}
            alignItems={"center"}
            // justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box h={"35%"} w={"70%"}>
              <Text
                fontSize={{ base: "26px", md: "40px" }}
                fontWeight={"bold"}
                textColor={"#57357F"}
                textAlign={{ base: "center", md: "0" }}
              >
                Save money as you spend it, seriously.
              </Text>
            </Box>
            <Box h={"25%"} mt={"6"} w={{ base: "80%", md: "70%" }}>
              <Text textAlign={{ base: "center", md: "left" }}>
                You can’t avoid spending. That’s how you pay for your needs. But
                we can help you put money away every time you pay for something.
                Just set a percentage to save and watch your money grow.
              </Text>
            </Box>
            <Box minH={"18%"} w={"70%"} margin={{ base: "auto" }}>
              <Link>
                <Text
                  textColor={"#57357F"}
                  alignItems={"center"}
                  display={"flex"}
                >
                  See all our Savings <LuChevronRight />
                </Text>
              </Link>
            </Box>
          </Box>

          <Box
            minH={{ base: "400px", md: "250px" }}
            w={{ base: "95%", md: "40%" }}
          >
            <Image
              objectFit="inherit"
              src="/images/smart.png"
              alt="logo"
              width={"fit-content"}
              boxSize="100%"
            />
          </Box>
        </Flex>
      </Box>

      <Box
        margin={"auto"}
        minH={{ base: "750px", md: "550px" }}
        w={{ base: "100%", md: "90%" }}
      >
        <Flex
          alignItems={"center"}
          minH={{ base: "420px", md: "440px" }}
          justifyContent={{ md: "space-between" }}
          w={{ base: "100%", md: "100%" }}
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Box
            minH={{ base: "400px", md: "300px" }}
            w={{ base: "95%", md: "40%" }}
          >
            <Image
              objectFit="inherit"
              src="/images/turn.png"
              alt="logo"
              width={"fit-content"}
              boxSize="100%"
            />
          </Box>

          <Box
            minH={{ base: "400px", md: "400px" }}
            w={{ base: "95%", md: "45%" }}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box minH={"39%"} w={"70%"} alignItems={"center"}>
              <Text
                fontSize={{ base: "26px", md: "32px" }}
                fontWeight={"bold"}
                textColor={"#57357F"}
                // textAlign={{ base: "center", md: "none" }}
              >
                Turn off access, turn on safety.
              </Text>
            </Box>
            <Box minH={"25%"} mt={"6"} w={{ base: "80%", md: "70%" }}>
              <Text textAlign={{ base: "center", md: "left" }}>
                Life happens. Milk spills. Debit cards go missing. If that ever
                happens, you can block your missing card on the app so no one
                can use it. We’d like to see them try.
              </Text>
            </Box>
            <Flex h={"18%"} w={"70%"} mt={"2"}>
              <Link>
                <Text
                  textColor={"#57357F"}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  display={"flex"}
                >
                  Learn more about Cards <LuChevronRight />
                </Text>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box
        margin={"auto"}
        minH={{ base: "750px", md: "550px" }}
        w={{ base: "100%", md: "90%" }}
      >
        <Flex
          alignItems={"center"}
          minH={{ base: "420px", md: "440px" }}
          justifyContent={{ md: "space-between" }}
          w={{ base: "100%", md: "100%" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            minH={{ base: "400px", md: "400px" }}
            w={{ base: "95%", md: "45%" }}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box minH={"39%"} w={"70%"}>
              <Text
                fontSize={{ base: "26px", md: "32px" }}
                fontWeight={"bold"}
                textColor={"#57357F"}
                // textAlign={{ base: "center", lg: "0", xl: "0" }}
              >
                We’re always happy to help you.
              </Text>
            </Box>
            <Box minH={"25%"} w={{ base: "80%", md: "70%" }} mt={"2"}>
              <Text textAlign={{ base: "center", md: "0" }}>
                You can chat with us on the app, slide into our DMs, tweet,
                leave an Instagram comment, send an email or call. However you
                choose to reach out, there’ll always be a friendly person there
                to make your life easy.
              </Text>
            </Box>
            <Flex minH={"18%"} w={"70%"} mt={"7"}>
              <Link>
                <Text
                  textColor={"#57357F"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  display={"flex"}
                >
                  Get Help <LuChevronRight />
                </Text>
              </Link>
            </Flex>
          </Box>

          <Box
            minH={{ base: "400px", md: "300px" }}
            w={{ base: "95%", md: "45%" }}
          >
            <Image
              objectFit="inherit"
              src="/images/Hello.png"
              alt="logo"
              width={"fit-content"}
              boxSize="100%"
            />
          </Box>
        </Flex>
      </Box>

      <Box
        margin={"auto"}
        minH={{ base: "750px", md: "550px" }}
        w={{ base: "100%", md: "90%" }}
      >
        <Flex
          alignItems={"center"}
          minH={{ base: "420px", md: "440px" }}
          justifyContent={{ md: "space-between" }}
          w={{ base: "100%", md: "100%" }}
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Box
            minH={{ base: "400px", md: "300px" }}
            w={{ base: "95%", md: "40%" }}
          >
            <Image
              objectFit="inherit"
              src="/images/fees.png"
              alt="logo"
              width={"fit-content"}
              boxSize="100%"
            />
          </Box>

          <Box
            minH={{ base: "400px", md: "400px" }}
            w={{ base: "95%", md: "45%" }}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box minH={"39%"} w={"70%"}>
              <Text
                fontSize={{ base: "26px", md: "32px" }}
                fontWeight={"bold"}
                textColor={"#57357F"}
                // textAlign={{ base: "center", md: "0" }}
              >
                Fees as clear as glass.
              </Text>
            </Box>
            <Box minH={"25%"} mt={"6"} w={{ base: "80%", md: "70%" }}>
              <Text textAlign={{ base: "center", md: "left" }}>
                We’re serious about free banking, and we will never, ever charge
                you for anything without your consent.
              </Text>
            </Box>
            <Flex h={"18%"} w={"70%"} mt={"5"}>
              <Link>
                <Text
                  textColor={"#57357F"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  display={"flex"}
                >
                  See all our fees <LuChevronRight />
                </Text>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Testimonial />
      <Worlds />
      <Partners />
      <Choose />
      <Money />

      <Box></Box>
    </Box>
  );
};

export default Home;
