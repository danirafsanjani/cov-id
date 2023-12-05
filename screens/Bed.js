import React, { Component } from "react";
import { Box, Center, Text, FlatList, Spinner } from "native-base";
import { TouchableOpacity } from "react-native";
import { Header } from "../components";

class BedScreen extends Component {
  state = {
    isBedLoading: true,
    bed: [],
  };

  fetchData = () => {
    fetch(`https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=35prop`)
      .then((response) => response.json())
      .then((json) => this.setState({ bed: json.cities }))
      .catch((error) => console.error(error))
      .finally(() => this.setState({ isBedLoading: false }));
  };

  componentDidMount = () => {
    this.fetchData();
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("BedDetail", {
            id: item.id,
          })
        }
      >
        <Box px="100px" mt={5}>
          <Box alignItems={"center"} borderWidth={3} borderColor="gray.300" rounded="lg" overflow="hidden">
            <Text>{item.name}</Text>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  render() {
    const { bed, isBedLoading } = this.state;

    return (
      <>
        <Header title="Bed Detail Jawa Timur" withLogo={true} />
        {isBedLoading ? (
          <Center flex={1}>
            <Spinner size="lg" color="#98b0ff" />
          </Center>
        ) : (
          <FlatList data={bed} renderItem={this.renderItem} refreshing={isBedLoading} />
        )}
      </>
    );
  }
}

export default BedScreen;
