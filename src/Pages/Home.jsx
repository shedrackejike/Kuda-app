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
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <Box minH={"100vh"} w={"100%"} mt={"80px"}>
      <Flex w={"90%"} margin={"auto"} h={"80%"}>
        <Flex
          justifyContent={"space-around"}
          minH={"550px"}
          w={"100%"}
          alignItems={"center"}
        >
          <Box minH={"440px"} w={"35%"}>
            <Box h={"30%"} w={"50"} mt={"5"}>
              <Text
                fontSize={"43px"}
                fontWeight={"extrabold"}
                textColor={"#57357F"}
              >
                The money app for Africans.
              </Text>
            </Box>

            <Box h={"22%"} w={"50"} mt={"9"}>
              <Text fontSize={"20px"}>
                Make free transfers, enjoy cashless payment options and earn
                interest on your savings with Kuda.
              </Text>
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
          <Flex
            h={"90%"}
            w={"50%"}
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

      <Box w={"90%"} margin={"auto"} minH={"450px"}>
        <Flex
          w={"90%"}
          margin={"auto"}
          minH={"200px"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Box
            minH={"120"}
            w={"30%"}
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
            minH={"120"}
            w={"30%"}
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
            minH={"120"}
            w={"30%"}
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
          w={"80%"}
          margin={"auto"}
          minH={"100px"}
          justifyContent={"space-evenly"}
        >
          <Box
            minH={"120"}
            w={"35%"}
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
            minH={"120"}
            w={"35%"}
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

      <Box w={"90%"} margin={"auto"} minH={"550px"}>
        <Flex w={"90%"} margin={"auto"} minH={"440px"}>
          <Box w={"90%"} margin={"auto"} h={"90%"}>
            <Box w={"50%"} h={"60%"}>
              <Text fontSize={"42px"} fontWeight={"bold"} textColor={"#57357F"}>
                Your phone + our app + a debit card = a simpler life.
              </Text>
            </Box>

            <Box w={"70%"} h={"20%"} mt={2}>
              <Text>
                We designed a money app for your lifestyle, and you can get a
                debit card to go with it. That's all you need to make the right
                money moves.
              </Text>
            </Box>

            <Flex w={"70%"} h={"13%"} mt={"3"}>
              <Link>
                <Text
                  fontWeight={"bold"}
                  textColor={"#57357F"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  display={"flex"}
                >
                  Open An Account in Minutes <LuChevronRight />
                </Text>
              </Link>
            </Flex>
          </Box>

          <Box w={"90%"} margin={"auto"} h={"90%"}>
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

      <Box w={"90%"} margin={"auto"} minH={"550px"}>
        <Flex
          w={"90%"}
          minH={"440px"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Box w={"50%"} h={"90%"}>
            <Image
              objectFit="cover"
              src="/images/money.png"
              alt="logo"
              width={"fit-content"}
              boxSize="100%"
            />
          </Box>

          <Box
            w={"45%"}
            h={"90%"}
            alignItems={"center"}
            justifyContent={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box h={"25%"} w={"80%"}>
              <Text fontSize={"30px"} fontWeight={"bold"} textColor={"#57357F"}>
                It’s your money, we just help you manage it.
              </Text>
            </Box>

            <Box h={"25%"} w={"77%"} mt={"2"}>
              <Text fontSize={"15.4px"}>
                Save it, spend it, send it. It’s up to you. Whatever you choose
                to do with your money, we’ll make sure it’s done better and free
                of charge. We take responsibility for that.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box w={"90%"} margin={"auto"} minH={"550px"}>
        <Flex
          minH={"440px"}
          w={"95%"}
          margin={"auto"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Box w={"45%"} h={"60%"}>
            <Box h={"35%"} w={"70%"}>
              <Text fontSize={"27px"} fontWeight={"bold"} textColor={"#57357F"}>
                Save money as you spend it, seriously.
              </Text>
            </Box>
            <Box h={"35%"} w={"90%"} mt={"2"}>
              <Text>
                You can’t avoid spending. That’s how you pay for your needs. But
                we can help you put money away every time you pay for something.
                Just set a percentage to save and watch your money grow.
              </Text>
            </Box>
            <Flex h={"18%"} w={"70%"} mt={"2"}>
              <Link>
                <Text
                  textColor={"#57357F"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  display={"flex"}
                >
                  See all our Savings <LuChevronRight />
                </Text>
              </Link>
            </Flex>
          </Box>

          <Box w={"45%"} h={"85%"}>
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

      <Box w={"90%"} margin={"auto"} minH={"550px"}>
        <Flex
          minH={"440px"}
          w={"95%"}
          margin={"auto"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box w={"45%"} h={"85%"}>
            <Image
              objectFit="inherit"
              src="/images/turn.png"
              alt="logo"
              width={"fit-content"}
              boxSize="100%"
            />
          </Box>

          <Box w={"45%"} h={"60%"}>
            <Box h={"39%"} w={"80%"}>
              <Text fontSize={"36px"} fontWeight={"bold"} textColor={"#57357F"}>
                Turn off access, turn on safety.
              </Text>
            </Box>
            <Box h={"35%"} w={"74.9%"} mt={"2"}>
              <Text>
                Life happens. Milk spills. Debit cards go missing. If that ever
                happens, you can block your missing card on the app so no one
                can use it. We’d like to see them try.
              </Text>
            </Box>
            <Flex h={"18%"} w={"70%"} mt={"2"}>
              <Link>
                <Text
                  textColor={"#57357F"}
                  justifyContent={"center"}
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

      <Box w={"90%"} margin={"auto"} minH={"550px"}>
        <Flex
          minH={"440px"}
          w={"95%"}
          margin={"auto"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Box w={"45%"} h={"60%"}>
            <Box h={"39%"} w={"80%"}>
              <Text fontSize={"37px"} fontWeight={"bold"} textColor={"#57357F"}>
                We’re always happy to help you.
              </Text>
            </Box>
            <Box h={"35%"} w={"80%"} mt={"2"}>
              <Text>
                You can chat with us on the app, slide into our DMs, tweet,
                leave an Instagram comment, send an email or call. However you
                choose to reach out, there’ll always be a friendly person there
                to make your life easy.
              </Text>
            </Box>
            <Flex h={"18%"} w={"70%"} mt={"2"}>
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

          <Box w={"45%"} h={"85%"}>
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

      <Box w={"90%"} margin={"auto"} minH={"550px"}>
        <Flex
          minH={"440px"}
          w={"95%"}
          margin={"auto"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box w={"40%"} h={"90%"}>
            <Image
              objectFit="inherit"
              src="/images/fees.png"
              alt="logo"
              width={"fit-content"}
              boxSize="100%"
            />
          </Box>

          <Box w={"45%"} h={"40%"}>
            <Box h={"39%"} w={"80%"}>
              <Text fontSize={"36px"} fontWeight={"bold"} textColor={"#57357F"}>
                Fees as clear as glass.
              </Text>
            </Box>
            <Box h={"35%"} w={"74.9%"} mt={"2"}>
              <Text>
                We’re serious about free banking, and we will never, ever charge
                you for anything without your consent.
              </Text>
            </Box>
            <Flex h={"18%"} w={"70%"} mt={"2"}>
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
      <Footer />

      <Box></Box>
    </Box>
  );
};

export default Home;
