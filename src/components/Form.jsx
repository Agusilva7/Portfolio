export default function Form(){
    return(
        <section className="flex flex-col lg:flex-row gap-8 container mx-auto justify-center p-5 md:p-8 lg:p-20">
            <div className="w-full lg:w-1/2 flex flex-col gap-2.5 text-[#1c1c1c] ">
                <h2 className="text-2xl text-center lg:text-start uppercase">Trabajemos juntos</h2>
                <p>Estoy disponible para sumarme a nuevos desafíos profesionales. Si sos reclutador o representás a una empresa que busca un desarrollador frontend comprometido y con experiencia, será un gusto conocernos.

Trabajo con tecnologías como JavaScript, React.js, Next.js, Node.js, Redux y Tailwind CSS, además de especializarme en desarrollo web con WordPress y Elementor, integrando soluciones modernas, escalables y orientadas a resultados.

<br/>📩 Completá el formulario a continuación para que podamos coordinar una entrevista o intercambiar más información sobre mi perfil.</p>
                <h3>📞 ¿Preferís contactarme directamente?</h3>
                <button className="text-start">📱 +54 9 11 3591-2665</button>
                <button className="text-start">👉 Enviame un mensaje por WhatsApp</button>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <form
                action="https://formsubmit.co/niupi7374@gmail.com"
                method="POST"
                className="flex flex-col gap-4 w-full max-w-md"
                >
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nombre"
                    className="p-2 border border-[#1c1c1c] rounded text-[#1c1c1c]"
                />
                <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Número de Teléfono"
                    className="p-2 border border-[#1c1c1c] rounded text-[#1c1c1c]"
                />
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Correo Electrónico"
                    className="p-2 border border-[#1c1c1c] rounded text-[#1c1c1c]"
                />
                <textarea
                    name="message"
                    required
                    placeholder="Mensaje"
                    className="p-2 border border-[#1c1c1c] rounded h-32 text-[#1c1c1c]"
                ></textarea>

                {/* Protecciones de FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://tusitio.com/gracias" />

                <button
                    type="submit"
                    className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                >
                    Enviar
                </button>
                </form>
            </div>

    </section>
    )

}