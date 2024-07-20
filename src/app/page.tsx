import Navigation from "@/components/Navigation";

import AboutUsSection from "./components/AboutUsSection";
import Footer from "./components/Footer";
import GetInvolvedSection from "./components/getInvolved/GetInvolvedSection";
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import OurSupportersSection from "./components/OurSupportersSection";
import PreFooterCTA from "./components/PreFooterCTA";
import UpcomingEventsSection from "./components/upcomingEvents/UpcomingEventsSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <Marquee />
        <AboutUsSection />
        <GetInvolvedSection />
        <OurSupportersSection />
        <UpcomingEventsSection />
        <PreFooterCTA />
        <Footer />
      </main>
    </>
  );
}
