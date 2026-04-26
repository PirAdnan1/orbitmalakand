// components
import Hero from "./Hero";
import Stats from "./Stats";
import About from "./About";
import LatestEvents from "./LatestEvents";
import PrincipalMessage from "./PrincipalMessage";
import PreSchool from "./PreSchool";
import Testimonials from "./Testimonials";
import Activities from "./Activities";
import CareSupport from "./CareSupport";

function HomeContents() {
  return (
    <div>
      <Hero />
      <Stats />
      <About />
      <LatestEvents />
      <PrincipalMessage />
      <PreSchool />
      <Activities />
      <Testimonials />
      <CareSupport />
    </div>
  );
}

export default HomeContents;
