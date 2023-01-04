import React from "react";
import ShopSection from "../../Components/ChildComponents/ShopSection";
import Footer from "../../Components/Common/Footer";
import Header from "../../Components/Common/Header";
import IntroSection from "../../Components/Common/IntroSection";
import SEO from "../../Components/Common/SEO";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Shop"} />
      <Header />
      <IntroSection pageName={"Shop"} />
      <ShopSection />
      <Footer />
    </>
  );
};

export default index;
