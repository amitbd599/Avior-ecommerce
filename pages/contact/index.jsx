import React from "react";
import ContactSection from "../../Components/ChildComponents/ContactSection";
import Footer from "../../Components/Common/Footer";
import GetNotification from "../../Components/Common/GetNotification";
import Header from "../../Components/Common/Header";
import IntroSection from "../../Components/Common/IntroSection";
import SEO from "../../Components/Common/SEO";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Contact"} />
      <Header />
      <IntroSection pageName={"Contact"} />
      <ContactSection />
      <div className='mt--80'>
        <GetNotification />
      </div>
      <Footer />
    </>
  );
};

export default index;
