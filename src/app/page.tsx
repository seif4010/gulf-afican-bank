// import Navbar from "@/components/Navbar"
// import Hero from "@/components/Hero"
// import QuickServices from "@/components/QuickServices"
// import Products from "@/components/Products"
// import Segments from "@/components/Segments"
// import Footer from "@/components/Footer"

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <QuickServices />
//       <Products />
//       <Segments />
//       <Footer />
//     </>
//   )
// }

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import StatsSection from "@/sections/StatsSection";
import CalculatorSection from "@/sections/CalculatorSection";
import ContactSection from "@/sections/ContactSection";

import StructuredData from "@/seo/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData />

      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <CalculatorSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
