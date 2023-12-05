import { ArrowBackIcon, Box, HStack, Image, Pressable, SearchIcon, Text } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const Header = ({ title, withLogo, withBackBtn, withSearch }) => {
  const navigation = useNavigation();

  return (
    <Box bg="#7c8cfc" paddingX={15} paddingY={2}>
      <HStack textAlign="center" justifyContent="space-between">
        <HStack textAlign="center">
          {withLogo && <Image source={require("../assets/logo1.png")} size="xs" alt="icon" marginRight="2.5" />}
          {withBackBtn && (
            <Pressable onPress={() => navigation.goBack()}>
              <ArrowBackIcon color="white" size="md" marginRight="3" />
            </Pressable>
          )}
          <Text color="white" fontWeight="semibold" fontSize="2xl" textAlign="center" alignItems="center">
            {title}
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};
export default Header;
