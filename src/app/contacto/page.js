export default function Contacto(){
        <div className="h-[60vh] mx-auto flex justify-center items-center">
            <h1 className="text-black text-2xl">Contacto</h1>
        </div>
    return(
        <div className="container mx-auto text-center p-5 md:p-8 lg:p-20 mt-16  text-[#1c1c1c]">
                <hr/>
                    <section className="flex flex-col lg:flex-row gap-2.5 p-5 items-center">

                        <div className="uppercase text-[19px] md:text-2xl lg:text-3xl">
                            ¿ESTÁS BUSCANDO UNA PERSONA COMPROMETIDA?
                        </div>

                        <div className="w-px h-0 lg:h-20 bg-[#1c1c1c] mx-4" />

                        <section className="flex flex-col gap-5">
                            <p className="text-base">Estoy abierto a nuevas oportunidades laborales y colaboraciones. Si estás buscando a alguien con experiencia en desarrollo web, diseño responsive y enfoque en resultados, será un placer conversar con vos.
                            </p>
                            <p className="text-[19px] md:text-[21px]">"Me involucro en cada proyecto como si fuera propio, cuidando cada detalle desde el diseño hasta la entrega."
                            </p>
                        </section>

                    </section>
                <hr/>
            </div>
    )
}