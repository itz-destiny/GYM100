import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/about"
import Whyus from "./components/Whyus"
import Faq from "./components/Faq"
import Footer from "./components/footer"
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Whyus />
      <Faq />
      <Footer />
    </main>
  );
}
