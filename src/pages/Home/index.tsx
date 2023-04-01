import React from "react";
import Header from "../../components/Header";
import Started from "../../components/Sections/Started";
import ChannelsReview from "../../components/Sections/ChannelsReview";
import ProductFeatures from "../../components/Sections/ProductFeatures";
import LatestBlogPosts from "../../components/Sections/LatestBlogPosts";
import FeedbackCustomers from "../../components/Sections/FeedbackCustomers";
import * as C from "./styles";
import CTA from "../../components/Sections/CTA";

const Home: React.FC = () => {
  return (
    <C.Container>
      <Header />
      <Started />
      <ChannelsReview />
      <ProductFeatures />
      <LatestBlogPosts />
      <FeedbackCustomers />
      <CTA />
    </C.Container>
  );
};

export default Home;
