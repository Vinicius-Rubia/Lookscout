import React from "react";
import Started from "../../components/Sections/Started";
import ChannelsReview from "../../components/Sections/ChannelsReview";
import ProductFeatures from "../../components/Sections/ProductFeatures";
import LatestBlogPosts from "../../components/Sections/LatestBlogPosts";
import FeedbackCustomers from "../../components/Sections/FeedbackCustomers";
import CTA from "../../components/Sections/CTA";
import Footer from "../../components/Footer";
import * as C from "./styles";

const Home: React.FC = () => {
  return (
    <C.Container>
      <Started />
      <ChannelsReview />
      <ProductFeatures />
      <LatestBlogPosts />
      <FeedbackCustomers />
      <CTA />
      <Footer />
    </C.Container>
  );
};

export default Home;
