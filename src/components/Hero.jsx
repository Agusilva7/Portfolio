import Image from "next/image";
import Link from "next/link";

export default function Hero(){
    return(
    <div className=" flex flex-col pt-16  md:flex-row h-[70vh] lg:h-dvh w-full gap-0">

        <div className="absolute inset-0 h-[70vh] lg:h-dvh bg-[#1c1c1c]/15 z-10" />

        <section className="w-full lg:w-1/2 z-15 text-black flex flex-col justify-end  pb-0 md:pb-20 lg:pb-0 lg:justify-center text-center lg:text-end items-center lg:items-end gap- 0 md:gap-2.5"  
        style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)" }}>
            <h1 className="text-4xl lg:text-5xl">Agustin Silva</h1>
            <h2 className="text-3xl lg:text-4xl">Frontend Developer</h2>
            <h3 className="text-2xl w-3xs lg:w-full lg:text-3xl"> Javascript | React | Next.js | Tailwind.css<br/>WordPress & Elementor </h3>
            <div className="text-2xl pt-2.5 ">
                <Link href={"/proyectos"}><button className="hover:text-gray-500">Ver Proyectos</button></Link>
                <Link href={"/Agustin-Silva-CV.pdf"} 
                target="_blank"
                rel="noopener noreferrer" >
                    <button className="hover:text-gray-500 w-24"  
                    style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)" }}>Ver CV</button>
                </Link>
            </div>
        </section>

        <section className="w-full h-[400px] md:h-[650px] lg:h-full lg:w-1/2 relative z-15 flex justify-end">
             <Image
                src="/foto-yo.png"
                alt="Fondo"
                fill
                className="object-contain object-center lg:object-right " 
                priority
            />
        </section>

    </div>)
}