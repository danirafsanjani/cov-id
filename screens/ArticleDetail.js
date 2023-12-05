import React from "react";
import { WebView } from "react-native-webview";
import { Header } from "../components";

const ArticleDetailScreen = ({ route }) => {
  const url = `${route.params.url}`;
  return (
    <>
      <Header title="Article Detail" withBackBtn={true} />
      <WebView source={{ uri: url }} startInLoadingState />
    </>
  );
};

export default ArticleDetailScreen;
