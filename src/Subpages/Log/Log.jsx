import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Log = () => {
  const toast = useToast();

  const [input, setInput] = useState({
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = (Event) => {
    Event.preventDefault();

    if (input.email && input.password !== "") {
      let storageUsers = localStorage.getItem("userData");
      if (storageUsers) {
        const users = JSON.parse(storageUsers);
        const finduser = users?.find((item) => {
          return item.email === input.email;
        });

        console.log(finduser);
        console.log(input);

        if (finduser) {
          if (finduser.password === input.password) {
            toast({
              description: "Welcome To Kuda Bank",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            localStorage.setItem("isLoggedIn", JSON.stringify(finduser));
            return navigate("/dashboard");
          } else {
            toast({
              description: "Incorrect Credentials",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            return;
          }
        } else {
          toast({
            description: "Incorrect Credentials",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
          return;
        }
      } else {
        toast({
          description: "No Data Found",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return;
      }
    } else {
      alert("Input Field Is Empty");
      return;
    }

    // if (input.email && input.password !== "") {
    //   let storageUsers = localStorage.getItem("useData");
    //   if (storageUsers) {
    //     const arrayOfUsers = JSON.parse(storageUsers);

    //     console.log(6);
    //     if (arrayOfUsers) {
    //       const findemail = arrayOfUsers?.find((item) => {
    //         return item.email === input.email;
    //       });

    //       console.log(7);
    //       if (findemail) {
    //         toast({
    //           description: "email or password is wrong",
    //           status: "error",
    //           duration: 2000,
    //           isClosable: true,
    //         });
    //         return;
    //       }
    //       console.log(8);
    //       const findpassword = arrayOfUsers?.find((item) => {
    //         return item.password === input.password;
    //       });

    //       if (findpassword) {
    //         toast({
    //           description: "Password does't match",
    //           status: "error",
    //           duration: 2000,
    //           isClosable: true,
    //         });
    //         return;
    //       }
    //       console.log(9);
    //       arrayOfUsers.push(input);
    //       localStorage.setItem("userData", JSON.stringify(arrayOfUsers));
    //       return navigate("");
    //     }
    //   }
    //   localStorage.setItem("userData", JSON.stringify([input]));
    //   navigate("");
    // } else {

    // }
  };

  return (
    <Box bgColor={"yellow.100"} w="100%" h={"100vh"} mt={"100px"}>
      <Box
        w={"27%"}
        margin="auto"
        bgColor={"white"}
        h={"70%"}
        bg={"white"}
        mt="6"
        boxShadow="inner"
        rounded="md"
      >
        <Text
          textAlign={"center"}
          textColor="white"
          fontSize={"2xl"}
          bgColor={"blue"}
          h="12"
        >
          Login
        </Text>

        <Box
          w="75%"
          margin={"auto"}
          mt="9"
          boxShadow="inner"
          rounded="md"
          bg={"white"}
        >
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel> EMAil address</FormLabel>
              <Input
                type={"text"}
                name="email"
                placeholder="enter email"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl>
              <FormLabel> password </FormLabel>
              <Input
                type={"password"}
                name="password"
                placeholder="enter password"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>

            <Button
              size="lg"
              bgColor="blue"
              h="8"
              w="30%"
              justifyContent="center"
              display={"flex"}
              textColor="white"
              alignItems="center"
              margin={"auto"}
              mt="7"
              cursor={"pointer"}
              type="submit"
            >
              Login
            </Button>
          </form>
          <Link to={"/join"}>register </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Log;
