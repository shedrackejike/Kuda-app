import { Box } from "@chakra-ui/react";
import React from "react";
import Leave from "../Subpages/Cardlessap/Leave";
import Atms from "../Subpages/Transfer/Atms";
import Pos from "../Subpages/Cardlessap/Pos";
import Online from "../Subpages/Cardlessap/Online";
import Forever from "../Subpages/Cardlessap/Forever";
import Cardfqs from "../Subpages/Cardlessap/Cardfqs";
import Money from "../Subpages/Home/Money";

const Cardless = () => {
  return (
    <Box>
      <Leave />
      <Atms />
      <Pos />
      <Online />
      <Forever />
      <Cardfqs />
      <Money />
    </Box>
  );
};

export default Cardless;
