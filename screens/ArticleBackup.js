import React, { Component } from "react";
import { Box, Center, HStack, Text, Image, FlatList, Spinner, AspectRatio, Heading, Button } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

class ArticleScreen extends Component {
  state = {
    isArticlesLoading: true,
    isCategoriesLoading: true,
    isFetching: false,
    articles: [],
  };

  fetchData = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=3906bbc1a23c436fb6a625240cd92884`)
      .then((response) => response.json())
      .then((json) => this.setState({ articles: json.articles }))
      .catch((error) => console.error(error))
      .finally(() => this.setState({ isArticlesLoading: false, isFetching: false }));
  };

  componentDidMount = () => {
    this.fetchData();
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <Button
        onPress={() =>
          navigation.navigate("ArticleDetail", {
            url: item.url,
          })
        }
      >
        <Box px="20px" my={5}>
          <Box borderWidth={1} borderColor="gray.300" rounded="lg" overflow="hidden">
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image source={{ uri: item.urlToImage }} alt="article thumbnail" />
              </AspectRatio>
              <Box position="absolute" bottom={0} right={0} bg="#7c8cfc" px={5} py={2} roundedTopLeft="lg">
                <HStack alightItems="center">
                  <Text color="white" mr={2}>
                    {item.author}
                  </Text>
                  <Ionicons name="person-circle-outline" color="white" size={18} />
                </HStack>
              </Box>
            </Box>
            <Box p={5} bg="white">
              <Heading size="md">{item.title}</Heading>
            </Box>
          </Box>
        </Box>
      </Button>
    );
  };

  onRefresh = () => {
    this.setState({ isFetching: true }, () => {
      this.fetchData(this.state.activeCategory);
    });
  };

  render() {
    const { articles, isArticlesLoading, isFetching } = this.state;

    return (
      <>
        {isArticlesLoading ? (
          <Center flex={1}>
            <Spinner size="lg" color="#98b0ff" />
          </Center>
        ) : (
          <FlatList data={articles} keyExtractor={(item) => item.key} renderItem={this.renderItem} onRefresh={this.onRefresh} refreshing={isFetching} />
        )}
      </>
    );
  }
}

export default ArticleScreen;
