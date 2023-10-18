import { BsPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

export const buyData = [
  {
    id: "1",
    icon: <Icon as={FaLightbulb} />,
    Comment: "Buy meter units from any electricity distribution company.",
  },
  {
    id: "2",
    icon: <Icon as={MdEmail} />,
    Comment: "Get your meter token by email.",
  },
  {
    id: "3",
    icon: <Icon as={BsPhoneFill} />,
    Comment: "Top up your meter units any time. ",
  },
];
