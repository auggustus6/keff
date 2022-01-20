import React from "react";
import Layout from "components/Layout";
import MainSlider from "./MainSlider";

import SectionAbout from "./SectionAbout";
import SectionSteps from "./SectionSteps";
import SectionPartners from "./SectionPartners";
import SectionFeatures from "./SectionFeatures";
import SectionQuality from "./SectionQuality";
import SectionJourney from "./SectionJourney";

const Home = () => {
  return (
    <Layout>
      <MainSlider />

      <SectionAbout />
      <SectionSteps />
      <SectionFeatures />
      <SectionPartners />
      <SectionQuality />
      <SectionJourney />
    </Layout>
  );
};

export default Home;
