import ContactSection from "@/components/home/ContactSection";
import DoctorsSection from "@/components/home/DoctorsSection";
import FaqSection from "@/components/home/FaqSection";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import StatsBand from "@/components/home/StatsBand";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustStrip from "@/components/home/Truststrip";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
      <Hero/>
      <TrustStrip/>
      <DoctorsSection/>
      <ServicesSection/>
      <StatsBand/>
      <TestimonialsSection/>
      <FaqSection/>
      <ContactSection/>
    </>
  );
}
