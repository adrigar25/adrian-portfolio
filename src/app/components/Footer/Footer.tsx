import Link from "next/link";

export default function Footer() {
  return (
    <footer className="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
      <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
        <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">© 2024 <a href="https://midu.dev/" className="hover:underline">midudev</a>.
          Casi todos los derechos reservados
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
          <li>
            <Link href="/#aboutme" className="hover:underline me-4 md:me-6">Sobre mí</Link>
          </li>
          <li>
            <Link id="contacto" href="mailto:adrigar250503@gmail.com" className="hover:underline">Contacto</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
