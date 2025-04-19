import Footer from "./components/Footer";
import Header from "./components/Header";
import Spotlight from "./components/Spotlight";
import Hero from "./components/Hero";
import DisplayComponents from "./components/DisplayComponents";
import Features from "./components/Features";
import GetStartedSection from "./components/GetStarted";
import { AnimationBalls } from "./components/AnimationBalls";
import Testimonials from "./components/Testimonials";
const HomePage = () => {
  return (
    <>
      <Header />
      {/* This is the Navbar */}
      <Spotlight />

      <main className="  mx-auto  h-screen ">
        <AnimationBalls />
        {/* hero  */}
        <Hero />

        {/* Features */}
        <Features />

        {/* Components Display */}
        <DisplayComponents />

        {/* Get Started */}
        <GetStartedSection />

        {/* Testimonials */}
        <Testimonials />

        <Footer />
      </main>

      {/* Footer section */}
    </>
  );
};
export default HomePage;
