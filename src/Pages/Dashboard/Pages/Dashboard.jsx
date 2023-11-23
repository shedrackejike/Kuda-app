import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../../../Subpages/DashBoard/Header";
import DHome from "../../../Subpages/DashBoard/DHome";

const Dashboard = () => {
  return (
    <Box h={"100vh"} mt={"100px"}>
      <Header />
      <DHome />
    </Box>
  );
};

export default Dashboard;
