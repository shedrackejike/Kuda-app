import { Box } from "@chakra-ui/react";
import React from "react";
import Send from "../Subpages/Transfer/Send";
import Atms from "../Subpages/Transfer/Atms";
import Free from "../Subpages/Transfer/Free";
import Card from "../Subpages/Transfer/Card";

const Transfer = () => {
  return (
    <Box>
      <Send />
      <Atms />
      <Free />
      <Card />
    </Box>
  );
};

export default Transfer;
