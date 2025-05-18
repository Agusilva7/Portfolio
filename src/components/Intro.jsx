export default function Intro(){
    return(
        <div className="container mx-auto text-center p-5 md:p-8 lg:p-20  text-[#1c1c1c]">
        <hr/>
        <section className="flex flex-col lg:flex-row gap-2.5 p-5 items-center">
          <div className="uppercase text-2xl lg:text-3xl">
            Desarrollador con Wordpress & Elementor 
          </div>
           <div className="w-px h-0 lg:h-20 bg-[#1c1c1c] mx-4" />
           <section className="flex flex-col gap-5">
            <p>Desarrollo y personalización de sitios web
              utilizando WordPress y Elementor.
              Implementación de estrategias de SEO mediante
              prácticas optimizadas y herramientas como
              Rankmath SEO y esquemas locales.
            </p>
            <p className="text-[21px]">"Me destaco por mi compromiso y gestión eficiente
              del tiempo."
            </p>
           </section>
        </section>
        <hr/>
      </div>
    )
}