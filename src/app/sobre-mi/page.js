import Experience from "@/components/Experience";
import Image from "next/image";
import Link from "next/link";

export default function SobreMi(){
    return(
        <div className=" flex flex-col w-full justify-center  bg-cover " style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)" }} >
            <div className="w-full flex flex-col xl:flex-row container mx-auto h-lvh items-center ">

                <div className="absolute inset-0 h-lvh bg-[#1c1c1c]/15 z-10" />

                <section className="w-full h-[450px] md:[750px] xl:h-auto xl:w-1/4 text-black flex flex-col px-5 md:px-8 lg:px-20 xl:px-0 gap-1 lg:gap-2 justify-end xl:justify-center items-center text-center xl:text-justify z-20">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl">Hola Soy Agustin Silva</h1>
                    <h2 className="text-[19px] md:text-2xl">Apasionado por el desarrollo web</h2>
                    <p>Soy <b>desarrollador frontend</b> con enfoque en diseño funcional, rendimiento y experiencia de usuario. Me especializo en crear interfaces modernas, limpias y eficientes que aporten valor real a cada proyecto. Actualmente vivo en <b>General Rodríguez, Buenos Aires</b>, y me apasiona construir soluciones digitales.</p>
                    
                    <Link href={"/Agustin-Silva-CV.pdf"} 
                        target="_blank"
                        rel="noopener noreferrer" >
                        <button className="border-1 px-2 py-1 rounded text-base uppercase hover:bg-[#1c1c1c] hover:text-white transition">Ver CV</button>
                    </Link>
                </section>

                <section className="w-full lg:w-3/6 z-11 h-[500px] md:h-[550px] lg:h-[950px] xl:h-full  relative"><Image src={"/foto-con-gorra.png"}  
                alt="Fondo-yo"
                fill
                className="object-contain lg:object-cover object-bottom " 
                priority/></section>

                <section className="w-full  h-[500px] md:[300px] xl:h-full  xl:w-1/4 text-black z-20  hidden md:flex flex-col px-5 md:px-8 lg:px-20 xl:px-0  gap-1 lg:gap-2 justify-center items-center text-center xl:text-justify">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">Mi Trayectoria Digital</h2>
                    <h3 className="text-[19px] md:text-2xl">Diseño y Posicionamiento digital</h3>
                    <p>En Dharma Marketing trabajé en la creación de sitios personalizados con <b>WordPress y Elementor</b>, aplicando buenas prácticas de <b>SEO con RankMath</b>. Mejoré continuamente la calidad del diseño y la optimización, cuidando siempre la coherencia digital y el posicionamiento de cada marca.</p>
                     <button className="border-1 px-2 py-1 rounded text-base uppercase hover:bg-[#1c1c1c] hover:text-white transition"><Link href={"/proyectos"}>Ver Proyectos</Link></button>
                </section>

            </div>
            <Experience/>
           
        </div>
    )
}