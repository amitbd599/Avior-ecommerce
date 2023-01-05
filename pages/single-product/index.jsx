import React from "react";
import SingleProductSection from "../../Components/ChildComponents/SingleProductSection";
import Footer from "../../Components/Common/Footer";
import GetNotification from "../../Components/Common/GetNotification";
import Header from "../../Components/Common/Header";
import IntroSection from "../../Components/Common/IntroSection";
import SEO from "../../Components/Common/SEO";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Single Product"} />
      <Header />
      <IntroSection pageName={"Single Product"} />
      <SingleProductSection />
      <GetNotification />
      <Footer />
    </>
  );
};

export default index;
