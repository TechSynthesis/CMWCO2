import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
  FeatureSection,
  ProductFeatures,
} from "../sections";

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <FeatureSection />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    {/* <div className="relative">
      <Insights />
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
      <ProductFeatures />
    </div>
    <div className="relative">
      <div className="gradient-06 z-0" />
      <World />
    </div> */}

    <Footer />
  </div>
);

export default Home;
