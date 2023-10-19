import { BsPhoneFill } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

export const networkData = [
  {
    id: "1",
    icon: <Icon as={FaLightbulb} />,
    Comment: "Buy airtime from any Nigerian mobile network.",
  },
  {
    id: "2",
    icon: <Icon as={BsPhoneFill} />,
    Comment: "Top up airtime on your phone in a few seconds.",
  },
  {
    id: "3",
    icon: <Icon as={GiNetworkBars} />,
    Comment: "Subscribe to your favourite mobile data plan easily. ",
  },
];
