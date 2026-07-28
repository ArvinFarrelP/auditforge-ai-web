import AmbientBackground from "./components/AmbientBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ExampleResponse from "./components/ExampleResponse";
import TechStack from "./components/TechStack";
import WhyAuditForge from "./components/WhyAuditForge";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <ExampleResponse />
        <TechStack />
        <WhyAuditForge />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
