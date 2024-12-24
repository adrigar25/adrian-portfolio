import { Button } from "@nextui-org/react";
import Studies from "./Sections/Studies";
import Projects from "./Sections/Projects";
import AboutMe from "./Sections/AboutMe";
import Image from "next/image";

export default function Main() {
  return (
    <main className="row-start-2 items-start sm:items-start flex flex-col gap-20 py-32 mx-8">
      <section className="section scroll-m-20 w-full mx-auto lg:max-w-4xl md:max-w-lg max-w-sm flex flex-col gap-4" id="home">
        <section className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4 ">
            <Image src="/profile.webp" alt="Profile picture" className="rounded-full shadow-sm shadow-default-500" width={64} height={64} />
            <Button
              size="sm"
              radius="full"
              variant="shadow"
              color="success"
              className="hover:scale-105 transition-transform bg-green-600 text-white border-green-500 hover:bg-green-300 hover:text-black focus:bg-green-300 focus:text-black
              hover:scale-105
              focus:scale-105
              h-6 w-auto
              animate-pulse
              "
              onPress={() => window.open("https://www.linkedin.com/in/adrián-garcía-torrente-311040206/", "_blank")}
            >
              Disponible para trabajar
            </Button>
          </div>
          <div>
            <h1 className="text-[75%] lg:text-4xl font-bold">Hola, soy Adrián</h1>
            <p className="text-[75%] lg:text-2xl text-gray-600 dark:text-gray-300 font-bold lg:w-[75%] ">
              Graduado en <span className="text-blue-500">Desarrollo de Aplicaciones Web</span> de Madrid, España 🇪🇸. Apasionado por el <span className="text-blue-500">desarrollo de aplicaciones web únicas</span> y siempre dispuesto a aprender.
            </p>
          </div>
        </section>
        <section className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl flex flex-row gap-4">
          <Button
            className="hover:scale-105 transition-transform bg-blue-500 text-white border-blue-500 hover:bg-blue-300 hover:text-black py-2"
            radius="full"
            onPress={() => window.open("mailto:adrigar250503@gmail.com")}
            startContent={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">

                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            }
          >
            Contáctame
          </Button>

          <Button
            onPress={() => window.open("https://www.linkedin.com/in/adrián-garcía-torrente-311040206/", "_blank")}
            className="hover:scale-105 transition-transform bg-blue-500 text-white border-blue-500 hover:bg-blue-300 hover:text-black py-2"
            radius="full"
            startContent={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-4" >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            }
          >
            LinkedIn
          </Button>
        </section>
      </section>
      <Studies />
      <Projects />
      <AboutMe />
    </main>
  );
}
