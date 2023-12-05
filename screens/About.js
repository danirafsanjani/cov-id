import React from "react";
import { Center, Heading, Text, Image, Box, Divider } from "native-base";
import { Header } from "../components";

const AboutScreen = () => {
  return (
    <>
      <Header title="About" withLogo={true} />
      <Box p={5} background="white" m={5} rounded="2xl">
        <Center>
          <Image source={require("../assets/logo.png")} alt="logo" width={180} height={180} />
          <Heading fontSize="3xl">Cov-ID</Heading>
          <Text mt={5} textAlign="center" fontSize="md">
            Aplikasi " Covid " sebagai media informasi seputar kesehatan, khususnya dibidang Covid19. Dimana aplikasi ini memberikan data Covid di Indonesia dan ketersediaan Rumah Sakit.
          </Text>
          <Divider my={3} />
          <Text mt={0} fontSize="md">
            Made with ❤️ by Team 6
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default AboutScreen;
