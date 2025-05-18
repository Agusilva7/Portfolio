export default function Header(){
    return(
        <nav className="absolute w-full text-black ">
          <section className="container flex mx-auto justify-between p-5 md:p-8 lg:p-20">
          <h2 className="text-2xl">SilvaVision</h2>
          <div className="hidden md:flex">
            <ul className="flex gap-5 text-2xl">
              <ul>Mis Proyectos</ul>
              <ul>Sobre Mi</ul>
              <li>Contactame</li>
            </ul>
          </div>

          </section>
        </nav>
    )
}