import { Image } from "@nextui-org/react";

export default function AboutMe() {
    return (
        <section className="section scroll-m-20 w-full mx-auto lg:max-w-4xl md:max-w-lg max-w-sm flex flex-col gap-4" id="aboutme">
            <div className="flex items-center gap-2 lg:gap-4 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 lg:size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <h2 className="text-[75%] lg:text-4xl font-bold">Sobre mi</h2>
            </div>

            <div className="flex lg:flex-row flex-col gap-4 justify-start items-center">
                <div className="lg:w-[75%] w-[100%]">
                    <p className="text-[75%] lg:text-lg text-gray-600 dark:text-gray-300 font-bold w-auto">
                        Me llamo <span className="text-blue-500">Adrián</span>. Estoy empezando en la programación con un interés profundo en el <span className="text-blue-500">desarrollo web</span>. Actualmente estoy buscando oportunidades para aprender y mejorar mis habilidades.
                    </p>
                    <p className="text-[75%] lg:text-lg text-gray-600 dark:text-gray-300 font-bold w-auto">
                        Algunos de mis logros incluyen <span className="text-blue-500">crear una tienda online completamente funcional</span> junto con un amigo como proyecto de fin de grado en el grado superior.
                    </p>
                    <p className="text-[75%] lg:text-lg text-gray-600 dark:text-gray-300 font-bold w-auto">
                        Mi objetivo es <span className="text-blue-500">aprender y crecer</span> en el campo del desarrollo web, contribuyendo con <span className="text-blue-500">soluciones eficientes y efectivas</span>.
                    </p>
                </div>
                <Image src="/profile.webp" alt="Profile picture" className="z-1 rounded-2xl h-64 w-64 shadow-sm shadow-default-500" />
            </div>
        </section>

    );
}
