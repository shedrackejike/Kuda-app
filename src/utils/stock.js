import { AiFillDollarCircle } from "react-icons/ai";
import { RiWalletFill } from "react-icons/ri";
import { GrUpgrade } from "react-icons/gr";
import { TbCurrencyNaira } from "react-icons/tb";
import { Icon } from "@chakra-ui/react";

export const stockData = [
  {
    id: "1",
    icon: <Icon as={AiFillDollarCircle} />,
    Comment: "Explore a wide range of US stocks",
  },
  {
    id: "2",
    icon: <Icon as={TbCurrencyNaira} />,
    Comment: "Buy stocks easily with your naira.",
  },
  {
    id: "3",
    icon: <Icon as={GrUpgrade} />,
    Comment: "Get up-to-date stock prices and trade notifications.",
  },
  {
    id: "3",
    icon: <Icon as={RiWalletFill} />,
    Comment: "Earn dividends on well-performing stocks.",
  },
];
