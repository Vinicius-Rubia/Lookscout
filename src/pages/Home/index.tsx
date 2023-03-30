import React from "react";
import Header from "../../components/Header";
import ChannelsReview from "../../components/Sections/ChannelsReview";
import Started from "../../components/Sections/Started";
import * as C from "./styles";

const Home: React.FC = () => {
  return (
    <C.Container>
      <Header />
      <Started />
      <ChannelsReview />
    </C.Container>
  );
};

export default Home;
