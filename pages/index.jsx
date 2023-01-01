import Header from "../Components/Common/Header";
import SEO from "../Components/Common/SEO";
import AboutUsSection from "../Components/Layout/AboutUsSection";
import ExploreProducts from "../Components/Layout/ExploreProducts";
import FeaturedProduct from "../Components/Layout/featuredProduct";
import HeroSection from "../Components/Layout/HeroSection";

export default function Home() {
  return (
    <>
      <SEO pageTitle={"Home One"} />
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ExploreProducts />
      <FeaturedProduct />
    </>
  );
}
