const project=[{
    id:1,
    name:"Usa Onasis Tile LLC",
    category:"General Contractor",
    image:"url('/general-contractor.jpg')"

},{
    id:2,
    name:"Airways Auto Tag",
    category:"Auto Tag Agency",
    image:"url('/auto-tag.jpg')"
},{
    id:3,
    name:"JesLaser",
    category:"Laser Hair Removal & Skin Care Clinic",
    image:"url('/laser-hair-removal.jpg')"
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
                        <div key={elemento.id} style={{backgroundImage:elemento.image}} className="w-full lg:w-1/3 h-[450px] bg-cover flex items-end justify-center  text-2xl text-white">
                            <section className="bg-gradient-to-b from-transparent to-[#1c1c1c] w-full p-5">
                                <h3 className="">{elemento.category}</h3>

                            </section>
                        </div>

                    )
                })
            }

            </section>
           <button className="text-base m-5 uppercase border-2 p-2.5">Ver todas las Categorias</button>
           <hr/>
      </section>
    )
}