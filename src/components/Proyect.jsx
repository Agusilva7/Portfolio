import Image from "next/image";
import Link from "next/link";
const info = [
  {
    id: 1,
    name: "JesLaser",
    category: "Clínica de Depilación Láser y Cuidado Facial",
    text: "JesLaser es un centro especializado en depilación láser y tratamientos faciales. En este proyecto desarrollé un sitio web moderno, minimalista y centrado en la experiencia del usuario. Mi objetivo fue facilitar la reserva de turnos, presentar los servicios de manera clara y generar confianza en nuevos visitantes.",
    img: "/captura-jeslaser.jpg",
    url: "https://www.jeslaser.com/",
    link:"Laser-Hair-Removal"
  },
  {
    id: 2,
    name: "USA Onasis Tile LLC",
    category: "Contratista General",
    text: "Trabajé en el diseño de una web profesional para una empresa de remodelaciones con más de 15 años de experiencia. Enfaticé el SEO local con términos como 'instalación de azulejos en Homestead' y 'contratista general en Miami-Dade', mostrando sus servicios de mármol, piedra volcánica y encimeras.",
    img: "/captura-usa-onasis.jpg",
    url: "https://www.usaonasistilellc.com/",
    link:"General-Contractor"
  },
  {
    id: 3,
    name: "AC Solutions Express",
    category: "Reparación e Instalación de Aire Acondicionado",
    text: "Desarrollé un sitio funcional y responsivo para una empresa de climatización. Me enfoqué en posicionarla localmente con palabras clave como 'reparación de aire acondicionado en Miami' y estructuré el contenido para facilitar el contacto y aumentar la conversión desde dispositivos móviles.",
    img: "/captura-ac-solutions.jpg",
    url: "https://www.acsolutionsexpress.com/",
    link:"Air-Conditioning-Repair"
  },
  {
    id: 4,
    name: "Airways Auto Tag",
    category: "Agencia de Trámites Vehiculares",
    text: "Realicé el sitio web para esta agencia de registro vehicular en Miami-Dade, enfocándome en una navegación rápida y directa. Trabajé el SEO con términos como 'renovación de placas' y 'registro de vehículos en Miami', buscando facilitar trámites desde cualquier dispositivo.",
    img: "/captura-airways-auto-tag.jpg",
    url: "https://www.airwaysautotag.com/",
    link:"Auto-Tag"
  },
  {
    id: 5,
    name: "Florida Medical and Imaging Services",
    category: "Clínica Médica",
    text: "Para esta clínica médica desarrollé un sitio claro y accesible, con foco en servicios primarios y estudios por imágenes. Apliqué estrategias de SEO local como 'atención primaria en Hialeah' para mejorar el posicionamiento en buscadores y facilitar la solicitud de turnos.",
    img: "/captura-florida-medical.jpg",
    url: "https://www.floridamedicalandimagingservices.com/",
    link:"Medical-Clinic"
  },
  {
    id: 6,
    name: "Fanny Hair Studio",
    category: "Salón de Belleza",
    text: "Trabajé en el diseño de un sitio visualmente atractivo para este salón de belleza. Optimizando su presencia en Google con términos como 'peluquería en Pembroke Pines', destaqué servicios clave como cortes, coloración y tratamientos capilares.",
    img: "/captura-fanny-hair-studio.jpg",
    url: "https://www.fannyhairstudio.com/",
    link:"#Beauty-Salon"
  },
  {
    id: 7,
    name: "Fort Training Academy",
    category: "Escuela de Fútbol",
    text: "Diseñé una web para una academia deportiva enfocada en el desarrollo integral de jóvenes futbolistas. Organicé los programas por nivel, destaqué sus valores formativos y posicioné la marca en búsquedas como 'academia de fútbol en Miami' para captar nuevos alumnos.",
    img: "/captura-fort-training.jpg",
    url: "http://forttrainingacademy.com/",
    link:"Sport-Club"
  },
  {
    id: 8,
    name: "Signature Cut",
    category: "Barbería y Peluquería",
    text: "Desarrollé un sitio con estética urbana y moderna para esta barbería. Incorporé reservas online, testimonios y enfoque SEO local con palabras clave como 'barbería en North Miami' y 'cortes profesionales', priorizando la experiencia del usuario.",
    img: "/captura-signaturecut.jpg",
    url: "https://www.signaturecut.net/",
    link:"#Hair-Salon"
  },
  {
    id: 9,
    name: "Hair & Body by Anair",
    category: "Centro Integral de Belleza",
    text: "Trabajé en una web elegante y clara para un salón que ofrece desde tratamientos capilares hasta spa. Organicé los servicios por secciones y enfoqué el SEO local en 'salón de belleza en Coral Springs' para fortalecer su presencia digital.",
    img: "/captura-hairbody.jpg",
    url: "https://coralsprings.hairandbodybyanair.com/",
    link:"#Skincare-Salon"
  },
  {
    id: 10,
    name: "Revitalize Beauty MedSpa",
    category: "Centro Médico Estético",
    text: "Desarrollé una web de estética profesional, destacando los tratamientos faciales y corporales no invasivos. Apliqué técnicas de posicionamiento para 'medspa en Pembroke Pines', integrando formularios de contacto directo y diseño intuitivo.",
    img: "/captura-revitalize.jpg",
    url: "https://www.revitalizebeautymedspa.com/",
    link:"Beauty-Medspa"
  },
  {
    id: 11,
    name: "Farak Nails",
    category: "Cuidado de Uñas",
    text: "Diseñé un sitio colorido y atractivo para este nail studio con enfoque en reservas rápidas y presentación visual de los diseños. Optimicé la web para posicionarse con términos como 'manicura en Hialeah' y 'uñas acrílicas artísticas'.",
    img: "/captura-farak-nails.jpg",
    url: "https://www.faraknails.com/",
    link:"Nail-care"
  }
];

export default function Proyectos(){
    return(
        <div className="w-full p-5 md:p-8 lg:p-20 text-center flex flex-col gap-10 bg-[#1c1c1c] ">
            <h2 className="text-2xl uppercase">Estas son las categorias de mis proyectos</h2>
            {
                info.map((elemento)=>{
                    return(
                        elemento.id % 2 === 0 ?
                        
                        <section id={elemento.link} key={elemento.id} className="container mx-auto flex flex-col xl:flex-row-reverse gap-8">
                            <div className="w-full xl:w-1/2 bg-white p-6 rounded h-[300px] md:h-[400px] relative"> 
                                <Image 
                                src={elemento.img}
                                alt={elemento.name}
                                fill
                                className="object-cover rounded" 
                                priority
                                />
                            </div>
                            <div className="w-full xl:w-1/2 flex flex-col  items-center text-center xl:items-start  xl:text-start justify-center p-6 rounded">
                                <h2 className="text-2xl md:text-3xl">{elemento.name}</h2>
                                <h3 className="text-[19px] md:text-2xl">{elemento.category}</h3>
                                <p className="text-base leading-relaxed">{elemento.text}</p>
                                <button className="border-[1px] p-2 mt-2.5 uppercase px-4 py-2 w-fit hover:bg-white hover:text-black transition"><Link href={elemento.url} target="_blank">Visitar Sitio web</Link></button></div>
                                
                        </section>
                        :
                        <section id={elemento.link} key={elemento.id} className="container mx-auto flex flex-col xl:flex-row gap-8">
                            <div className="w-full xl:w-1/2 bg-white p-6 rounded h-[300px] md:h-[400px] relative"> 
                                <Image 
                                src={elemento.img}
                                alt={elemento.name}
                                fill
                                className="object-cover rounded" 
                                priority
                                />
                            </div>
                            <div className="w-full xl:w-1/2 flex flex-col  items-center text-center xl:items-start  xl:text-start justify-center p-6 rounded">
                                <h2 className="text-2xl md:text-3xl">{elemento.name}</h2>
                                <h3 className="text-[19px] md:text-2xl">{elemento.category}</h3>
                                <p className="text-base leading-relaxed">{elemento.text}</p>
                                <button className="border-[1px] p-2 mt-2.5 uppercase px-4 py-2 w-fit hover:bg-white hover:text-black transition"><Link href={elemento.url} target="_blank">Visitar Sitio web</Link></button></div>
                                
                        </section>
                    )
                })
            }
            
        </div>

       
    )
}