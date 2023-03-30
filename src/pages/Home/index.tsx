import React from "react";
import Header from "../../components/Header";
import ChannelsReview from "../../components/Sections/ChannelsReview";
import ProductFeatures from "../../components/Sections/ProductFeatures";
import Started from "../../components/Sections/Started";
import * as C from "./styles";

const Home: React.FC = () => {
  return (
    <C.Container>
      <Header />
      <Started />
      <ChannelsReview />
      <ProductFeatures />
    </C.Container>
  );
};

export default Home;
