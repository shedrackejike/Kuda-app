import { Box } from "@chakra-ui/react";
import React from "react";
import Discoverb from "../Subpages/DiscoverB/Discoverb";
import Trusted from "../Subpages/DiscoverB/Trusted";
import Create from "../Subpages/DiscoverB/Create";
import Welcome from "../Subpages/DiscoverB/Welcome";
import Paid from "../Subpages/DiscoverB/Paid";
import Grow from "../Subpages/DiscoverB/Grow";
import Place from "../Subpages/DiscoverB/Place";
import Manage from "../Subpages/DiscoverB/Manage";

const Discover = () => {
  return (
    <Box>
      <Discoverb />
      <Trusted />
      <Create />
      <Welcome />
      <Paid />
      <Grow />
      <Place />
      <Manage />
    </Box>
  );
};

export default Discover;
