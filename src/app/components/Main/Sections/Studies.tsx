import { Chip } from '@nextui-org/react';

export default function Studies() {
  return (
    <section className="section scroll-m-20 w-full mx-auto lg:max-w-4xl md:max-w-lg max-w-sm flex flex-col gap-4" id="studies">
        <div className="flex items-center gap-2 lg:gap-4 p-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 lg:size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
        <h2 className="text-[75%] lg:text-4xl font-bold">Estudios</h2>
      </div>

      <section className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
        <ol className="relative">
          <li className="">
            <div className="relative mx-12 pb-6 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4] gap-3">
              <div className="relative md:col-span-2">
                <div >
                  <span className="text-blue-500 -left-[42px] absolute rounded-full text-5xl">•</span>
                  <h3 className="text-[75%] lg:text-xl font-bold text-blue-500">Ciclo Formativo de Grado Superior</h3>
                  <h4 className="font-semibold text-[75%] lg:text-xl text-gray-600 dark:text-white">IES Luis Braille</h4>
                  <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">Sept. 2022 - Jun. 2024</time>
                </div>
                <Chip color="success" variant="flat" className='mt-2'>Nota: 8.0</Chip>
              </div>
              <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                <p className="font-bold text-[75%] lg:text-xl">Desarrollo de aplicaciones web.</p>
                <p className='max-w-md text-[75%] lg:text-lg'>Adquirí conocimientos avanzados en HTML, CSS, JavaScript, y frameworks como React y Angular. También aprendí sobre bases de datos SQL y NoSQL, y cómo integrarlas en aplicaciones web. Trabajé en proyectos prácticos aplicando estos conocimientos en situaciones reales.</p>
              </div>
            </div>
          </li>
          <li className="">
            <div className="relative mx-12 pb-6 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4] gap-3">
              <div className="relative md:col-span-2">
                <div>
                  <span className="text-blue-500 -left-[42px] absolute rounded-full text-5xl">•</span>
                  <h3 className="text-[75%] lg:text-xl font-bold text-blue-500">Ciclo Formativo de Grado Medio</h3>
                  <h4 className="font-semibold text-[75%] lg:text-xl text-gray-600 dark:text-white">IES Luis Braille</h4>
                  <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">Sept. 2020 - Jun. 2022</time>
                </div>
                <Chip color="success" variant="flat" className='mt-2'>Nota: 7.5</Chip>
              </div>
              <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                <p className="font-bold text-[75%] lg:text-xl">Sistemas microinformáticos y redes.</p>
                <p className='max-w-md text-[75%] lg:text-lg'>Me especialicé en la instalación y mantenimiento de sistemas microinformáticos y redes. Aprendí a configurar y gestionar redes locales, solucionar problemas de hardware y software, administrar sistemas operativos y aplicar medidas de seguridad informática.</p>
              </div>
            </div>
          </li>
        </ol>
      </section>
    </section>
  );
}