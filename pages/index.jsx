import Header from "../Components/Common/Header";
import SEO from "../Components/Common/SEO";
import HeroSection from "../Components/Layout/HeroSection";

export default function Home() {
  return (
    <>
      <SEO pageTitle={"Home One"} />
      <Header />
      <HeroSection />
    </>
  );
}
