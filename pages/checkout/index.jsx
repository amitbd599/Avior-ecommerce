import React from "react";
import CheckoutSection from "../../Components/ChildComponents/CheckoutSection";
import Footer from "../../Components/Common/Footer";
import GetNotification from "../../Components/Common/GetNotification";
import Header from "../../Components/Common/Header";
import IntroSection from "../../Components/Common/IntroSection";
import SEO from "../../Components/Common/SEO";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Checkout"} />
      <Header />
      <IntroSection pageName={"Checkout"} />
      <CheckoutSection />
      <div className='mt--80'>
        <GetNotification />
      </div>
      <Footer />
    </>
  );
};

export default index;
