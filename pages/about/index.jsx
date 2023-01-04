import React from "react";
import AboutIntroSection from "../../Components/ChildComponents/AboutIntroSection";
import AboutUsSection from "../../Components/ChildComponents/AboutUsSection";
import HistorySection from "../../Components/ChildComponents/HistorySection";
import ProductBrand from "../../Components/ChildComponents/ProductBrand";
import TestimonialSection from "../../Components/ChildComponents/TestimonialSection";
import Footer from "../../Components/Common/Footer";
import GetNotification from "../../Components/Common/GetNotification";
import Header from "../../Components/Common/Header";
import SEO from "../../Components/Common/SEO";

const index = () => {
  return (
    <>
      <SEO pageTitle={"About Us"} />
      <Header />
      <AboutIntroSection />
      <AboutUsSection />
      <ProductBrand />
      <HistorySection />
      <TestimonialSection />
      <GetNotification />
      <Footer />
    </>
  );
};

export default index;
