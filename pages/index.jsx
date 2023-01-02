import Header from "../Components/Common/Header";
import SEO from "../Components/Common/SEO";
import AboutUsSection from "../Components/ChildComponents/AboutUsSection";
import ExploreProducts from "../Components/ChildComponents/ExploreProducts";
import FeaturedProduct from "../Components/ChildComponents/FeaturedProduct";
import HeroSection from "../Components/ChildComponents/HeroSection";
import Accessories from "../Components/ChildComponents/Accessories";
import TestimonialSection from "../Components/ChildComponents/TestimonialSection";

export default function Home() {
  return (
    <>
      <SEO pageTitle={"Home One"} />
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ExploreProducts />
      <FeaturedProduct />
      <Accessories />
      <TestimonialSection />
    </>
  );
}
