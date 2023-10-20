import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { betfqsData } from "../../utils/betfqs";

const Betfqs = () => {
  const [betfqs, setBetfqs] = useState([]);

  useEffect(() => {
    setBetfqs(betfqsData);
  }, []);
  return (
    <Box
      minH={"450px"}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box minH={"80px"} w={"30%"} margin={"auto"} mt={"9"}>
        <Text
          textColor={"#40196D"}
          textAlign={"center"}
          fontSize={"30px"}
          fontWeight={"extrabold"}
        >
          Betting FAQs
        </Text>
      </Box>
      <Accordion allowToggle minH={"370px"} w={"60%"} margin={"auto"} mt={"4"}>
        {betfqs.map((item) => (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Text
                  fontWeight={"semibold"}
                  textColor={"#40196D"}
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  {item.title}
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box bg={""} py={0}>
                <Text>{item.Comment}</Text>
                <Box bg={""} w={"95%"} m={"auto"}>
                  <ol style={{ backgroundColor: "" }}>
                    {item?.items?.map((item) => (
                      <>
                        <li>{item.text}</li>
                        {item.Comment2}
                      </>
                    ))}
                  </ol>
                </Box>
              </Box>
            </AccordionPanel>
            <AccordionPanel>{item.Comment2}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      {/* {faqs?.map((data) => (
  <>
    <Box minH={"400px"} w={"50%"} margin={"auto"} border={"1px"} mt={"5"}>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Text
                textColor={"#40196D"}
                as="span"
                flex="1"
                textAlign="left"
              >
                {data.title}
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel>{data.Comment}</AccordionPanel>

          <AccordionPanel pb={4}>
            {" "}
            {data.items.map((item, index) => {
              return (
                <>
                  <Text pb={"4"} as="span" flex="1" textAlign="left">
                    {index + 1} {item.text}
                  </Text>
                  <br />
                </>
              );
            })}
          </AccordionPanel>
          <AccordionPanel>{data.Comment2}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  </>
))} */}
    </Box>
  );
};

export default Betfqs;
