import Image from "next/image"
import Proyect from "@/components/Proyect"
import Link from "next/link"
export default function Proyectos(){
    return(
        <div className="">
            <div className="container mx-auto text-center p-5 md:p-8 lg:p-20 mt-16  text-[#1c1c1c]">
                <hr/>
                    <section className="flex flex-col lg:flex-row gap-2.5 p-5 items-center">

                        <div className="uppercase text-[19px] md:text-2xl lg:text-3xl">
                            Diseñando experiencias digitales para distintas industrias 
                        </div>

                        <div className="w-px h-0 lg:h-20 bg-[#1c1c1c] mx-4" />

                        <section className="flex flex-col gap-5">
                            <p className="text-base">Explorá una selección de proyectos que conectan diseño, estrategia y funcionalidad. Desde clínicas médicas hasta salones de belleza, cada sitio fue creado con precisión y propósito.
                            </p>
                            <p className="text-[19px] md:text-[21px]">"Me destaco por mi compromiso y gestión eficiente
                            del tiempo."
                            </p>
                        </section>

                    </section>
                <hr/>
            </div>
            <Proyect/>
        </div>
    )
}