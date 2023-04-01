import React from "react";
import Header from "../../components/Header";
import Started from "../../components/Sections/Started";
import ChannelsReview from "../../components/Sections/ChannelsReview";
import ProductFeatures from "../../components/Sections/ProductFeatures";
import LatestBlogPosts from "../../components/Sections/LatestBlogPosts";
import * as C from "./styles";

const Home: React.FC = () => {
  return (
    <C.Container>
      <Header />
      <Started />
      <ChannelsReview />
      <ProductFeatures />
      <LatestBlogPosts />
    </C.Container>
  );
};

export default Home;
