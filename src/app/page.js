import Image from "next/image";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
export default function Home() {
  return (
    <div className="">
      
      <Hero/>
      <Intro/>
      <Projects/>
      <Experience/>
  </div>
  );
}
