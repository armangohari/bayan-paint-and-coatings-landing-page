import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoShowcase from "@/components/LogoShowcase";
import Features from "@/components/Features";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <LogoShowcase />
      <Products />
      <LogoShowcase />
      <About />
      <LogoShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
