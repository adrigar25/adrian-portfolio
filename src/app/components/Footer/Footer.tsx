import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
      <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between  py-4 ">
        <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90 ">© 2025 Adrián.
          Casi todos los derechos reservados
        </span>
        <div
          className="flex gap-4 md:gap-6"
        >
          <div
            className="flex gap-4 md:gap-6 "
          >

            <Tooltip
              content="LinkedIn"
              color="default"
            >
              <Link href="https://www.linkedin.com/in/adrián-garcía-torrente-311040206/" target="_blank" className="flex justify-center items-center" aria-label="LinkedIn">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="size-6 w-auto">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </Link>
            </Tooltip>
            <Tooltip
              content="Github"
              color="default"
            >
              <Link href="https://github.com/adrigar25" target="_blank" className="flex justify-center items-center" aria-label="LinkedIn">
                <svg className="size-4 lg:size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </Link>
            </Tooltip>
          </div>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
            <li>
              <Link href="/#aboutme" className="hover:underline me-4 md:me-6">Sobre mí</Link>
            </li>
            <li>
              <Link id="contacto" href="mailto:adrigar250503@gmail.com" className="hover:underline">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
