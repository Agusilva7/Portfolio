import Image from "next/image";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Form from "@/components/Form";
export default function Home() {
  return (
    <div className="">
      
      <Hero/>
      <Intro/>
      <Projects/>
      <Experience/>
      <Form/>
      <div className="bg-[#282828] mx-auto text-center p-5 text-[19px]">
        <h3>Copyright © 2025 Agustin Silva Todos los derechos reservados.</h3>
      </div>
  </div>
  );
}
