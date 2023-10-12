import { AiFillCreditCard } from "react-icons/ai";
import { FaCreativeCommonsZero } from "react-icons/fa";
import { GiBeard } from "react-icons/gi";
import { Icon } from "@chakra-ui/react";

export const atmsData = [
  {
    id: "1",
    icon: <Icon as={AiFillCreditCard} />,
    Comment: "Withdraw cash for payments free of charge at over 3,000 ATMs.",
  },
  {
    id: "2",
    icon: <Icon as={GiBeard} />,
    Comment: "Get 25 free transfers on the first day of every month.",
  },
  {
    id: "3",
    icon: <Icon as={FaCreativeCommonsZero} />,
    Comment: "Send money free of charge without an account number.",
  },
];
