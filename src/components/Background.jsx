import Image from "next/image"
export default function Background(){
    return(
        <section className="relative w-full h-[500px]">
            <Image
            src="/background-1.jpg"
            alt="Fondo"
            fill
            className="object-cover fixed"
            priority

            />   
            <div className="absolute inset-0 h-auto bg-[#282828]/65 z-10" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-[#1c1c1c] ">
                <h2 className=" text-4xl">Texto sobre fondo</h2>
                <p>Lorem inpust....</p>
            </div>

        </section>
         
    )
}