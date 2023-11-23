import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Log from "../../Subpages/Log/Log";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const user = localStorage.getItem("isLoggedIn");
        if (user) {
          let LoggedInUser = JSON.parse(user);

          if (LoggedInUser) {
            return navigate("/dashboard");
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Box>
      <Log />
    </Box>
  );
};

export default Login;
