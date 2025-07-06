import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Prices from "@/components/Prices/Prices";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Prices />
      <FAQ />
      <Contacts />
    </>
  );
}
