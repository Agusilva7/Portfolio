export default function Experience(){
    return(
        <div className="bg-[#282828] w-full ">
            <section className="flex flex-col justify-center text-center container mx-auto gap-10 p-5 md:p-8 lg:p-20">

                <h2 className="text-3xl uppercase">Mi Experiencia en IT</h2>

                <div className=" flex flex-col-reverse lg:flex-row gap-5 items-center"> 
                    <section className="w-full lg:w-1/2 gap-2.5 flex justify-center  flex-col px-0 lg:px-5"> 
                        <h2 className="text-2xl uppercase">Dharma Marketing Agency</h2>
                        <h3>Wordpress Developer</h3>
                        <h4>01/02/2024 - 01/05/2025</h4>
                        <p>Desarrollo y personalización de sitios web
utilizando WordPress y Elementor.
Implementación de estrategias de SEO mediante
prácticas optimizadas y herramientas como
Rankmath SEO y esquemas locales.
Colaboración con el equipo en proyectos enfocados
en mejorar el posicionamiento y la presencia digital
de diversos clientes.
</p>
                    </section>
                    <div className="w-px h-0 lg:h-[350px] bg-white mx-4" />
                    <section className="w-full lg:w-1/2 h-[280px] md:h-[500px] lg:h-[300px] xl:h-[450px] bg-cover" style={{backgroundImage:("url('/Dharma.jpeg')")}}></section>
                </div>
                <hr/>

                <div className=" flex flex-col lg:flex-row gap-5 items-center"> 
                    <section className="w-full lg:w-1/2 h-[280px] md:h-[500px] lg:h-[300px] xl:h-[450px] bg-cover" style={{backgroundImage:("url('/pasantia.jpg')")}}></section>
                    <div className="w-px h-0 lg:h-[350px] bg-white mx-4" />
                        <section className="w-full lg:w-1/2 gap-2.5 flex justify-center  flex-col px-0 lg:px-5"> 
                        <h2 className="text-2xl uppercase">Pasantia en Calm es Simple</h2>
                        <h3>Frontend Developer</h3>
                        <h4>28/08/2023 - 22/09/2023</h4>
                        <p>Durante mi pasantía en Calm es Simple, colaboré con el equipo de desarrollo en la maquetación de páginas para su nuevo sitio web, el cual estaba siendo migrado de WordPress a Next.js. Mi tarea principal fue implementar componentes reutilizables y secciones siguiendo los diseños definidos por el equipo. Para los estilos utilicé styled-components, asegurando una estructura limpia, responsive y alineada con los lineamientos del proyecto.</p>
                    </section>
                </div>

            </section>
        </div>
    )
}