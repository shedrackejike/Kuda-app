import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Reg = () => {
  const toast = useToast();

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      input.fullname &&
      input.address &&
      input.email &&
      input.password &&
      input.phone !== ""
    ) {
      let storageUsers = localStorage.getItem("userData");
      if (storageUsers) {
        const arrayOfUsers = JSON.parse(storageUsers);

        if (arrayOfUsers) {
          const findemail = arrayOfUsers?.find((item) => {
            return item.email === input.email;
          });

          if (findemail) {
            toast({
              description: "User Already Registered",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            return;
          }

          const findPhone = arrayOfUsers?.find((item) => {
            return item.phone === input.phone;
          });

          if (findPhone) {
            toast({
              description: "Phone Number Already Registered",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
            return;
          }

          arrayOfUsers.push(input);
          localStorage.setItem("userData", JSON.stringify(arrayOfUsers));
          return navigate("/signin");
        }
      }
      localStorage.setItem("userData", JSON.stringify([input]));
      navigate("/signin");
    } else {
      alert("Input Field Is Empty");
      return;
    }
  };

  return (
    <Flex
      bgColor={"yellow.100"}
      w="100%"
      align="center"
      justify="center"
      minH={"100vh"}
      mt={"100px"}
    >
      <Box
        w={"40%"}
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
          Register
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
              <FormLabel> fullname</FormLabel>
              <Input
                type={"text"}
                name="fullname"
                placeholder="enter name"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel> Email</FormLabel>
              <Input
                type={"text"}
                name="email"
                placeholder="enter email"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel> address </FormLabel>
              <Input
                type={"text"}
                name="address"
                placeholder="enter address"
                onChange={(e) => handleChange(e)}
                // value={input.address}
              />
            </FormControl>

            <FormControl>
              <FormLabel> Phone Number</FormLabel>
              <Input
                type={"text"}
                name="phone"
                placeholder="enter phone-number"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel> Password</FormLabel>
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
              Register
            </Button>
          </form>

          <p>
            Already registered? click <Link to="/signin">here to login</Link>
          </p>
        </Box>
      </Box>
    </Flex>
  );
};

export default Reg;
