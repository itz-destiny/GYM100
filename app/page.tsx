import Image from "next/image";
import "./globals.css";
import Hero from "../components/Hero";
import About from "@/components/about";
import WhyChooseUs from "@/components/Whyus";
import Faq from "@/components/Faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <WhyChooseUs />
      <Faq />
      <Footer />
    </main>
  );
}
