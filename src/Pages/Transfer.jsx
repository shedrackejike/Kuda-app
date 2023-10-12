import { Box } from "@chakra-ui/react";
import React from "react";
import Send from "../Subpages/Transfer/Send";
import Atms from "../Subpages/Transfer/Atms";
import Free from "../Subpages/Transfer/Free";
import Card from "../Subpages/Transfer/Card";
import Need from "../Subpages/Transfer/Need";
import Shear from "../Subpages/Transfer/Shear";
import Pay from "../Subpages/Transfer/Pay";

const Transfer = () => {
  return (
    <Box>
      <Send />
      <Atms />
      <Free />
      <Card />
      <Need />
      <Shear />
      <Pay />
    </Box>
  );
};

export default Transfer;
