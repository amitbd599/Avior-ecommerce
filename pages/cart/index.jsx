import React from "react";
import CartSection from "../../Components/ChildComponents/CartSection";
import RelatedProduct from "../../Components/ChildComponents/RelatedProduct";
import Footer from "../../Components/Common/Footer";
import GetNotification from "../../Components/Common/GetNotification";
import Header from "../../Components/Common/Header";
import IntroSection from "../../Components/Common/IntroSection";
import SEO from "../../Components/Common/SEO";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Cart"} />
      <Header />
      <IntroSection pageName={"Cart"} />
      <CartSection />
      <RelatedProduct />
      <GetNotification />
      <Footer />
    </>
  );
};

export default index;
