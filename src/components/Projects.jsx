import Link from "next/link"

const project=[{
    id:1,
    name:"Usa Onasis Tile LLC",
    category:"Contratista General",
    image:"url('/general-contractor.jpg')",
    link:"#General-Contractor"

},{
    id:2,
    name:"Farak Nails",
    category:"Salon de Uñas",
    image:"url('/nail-care.jpg')",
    link:"#Nail-care"
},{
    id:3,
    name:"JesLaser",
    category:"Clínica de Depilación Láser",
    image:"url('/laser-hair-removal.jpg')",
    link:"#Laser-Hair-Removal"
}
]
export default function Projects(){
    return(
        <section className="text-[#1c1c1c] container mx-auto text-center px-5 pb-5 md:px-8 md:pb-8 lg:px-20 lg:pb-20">
            <h2 className="text-2xl lg:text-3xl uppercase pb-5">Categorias de mis Proyectos</h2>
            <section className="flex flex-col lg:flex-row gap-5">
            {
                project.map((elemento)=>{
               
                    return(
                        <Link key={elemento.id} href={`/proyectos${elemento.link}`}  className="w-full lg:w-1/3 ">
                            <div  style={{backgroundImage:elemento.image}} className=" bg-cover h-[450px] flex items-end justify-center  text-2xl text-white">
                            
                                <section className="bg-gradient-to-b from-transparent to-[#1c1c1c] w-full p-5">
                                    <h3 className="">{elemento.category}</h3>

                                </section>
                            
                            </div>
                        </Link>

                    )
                })
            }

            </section>
           <button className="text-base m-5 uppercase border-[1px] p-2.5"><Link href={"/proyectos"}>Ver todas las Categorias</Link></button>
           
           <hr/>
      </section>
    )
}