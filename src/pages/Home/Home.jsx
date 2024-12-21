import Services from "../Service/Services";
import About from "./About/About";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
}
