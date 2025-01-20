import { Button, Card, Chip, Image, Tooltip } from '@nextui-org/react';

export default function Projects() {
  return (
    <section className="section scroll-m-20 w-full mx-auto lg:max-w-4xl md:max-w-lg max-w-sm flex flex-col gap-4" id="projects">
      <div className="flex items-center gap-2 lg:gap-4 p-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 lg:size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
        <h2 className="text-[75%] lg:text-4xl font-bold">Proyectos</h2>
      </div>

      <div className="flex flex-col gap-6">
        <Card
          className="p-4 gap-3 bg-opacity-50"
          shadow='lg'
        >
          <div className='flex flex-col lg:flex-row gap-4'>
            <Image
              alt="Powerfuel"
              src="./powerfuel.webp"
              width="auto"
              height="auto"
              className='rounded-xl shadow-lg  z-0'
            />
            <div className='flex flex-col gap-2 h-full'>
              <div className='flex flex-col gap-2'>
                <h3 className="text-2xl font-bold">Powerfuel</h3>

                <div className="flex flex-wrap gap-2">
                  <Chip className='bg-black text-white dark:shadow-md dark:shadow-black' size='sm'
                    startContent={
                      <Image
                        alt='Next.js'
                        src="./nextjs.webp" width={18} height={18} className='rounded-full z-0' />
                    }
                  >
                    Next.js
                  </Chip>
                  <Chip className='bg-purple-600 text-white dark:shadow-md dark:shadow-purple-900' size='sm'
                    startContent={
                      <Image
                        alt='NextUI'
                        src="./nextui.webp" width={18} height={18} className='rounded-full z-0' />
                    }
                  >
                    NextUI
                  </Chip>
                  <Chip className='bg-blue-500 text-white dark:shadow-md dark:shadow-blue-900' size='sm'
                    startContent={
                      <Image
                        alt='Tailwind CSS'
                        src="./tailwindcss.webp" width={18} height={18} className='rounded-full z-0 p-[10%]' />
                    }
                  >
                    Tailwind CSS
                  </Chip>
                  <Chip className='bg-green-500 text-white dark:shadow-md dark:shadow-green-900' size='sm'
                    startContent={
                      <Image
                        alt='Node.js'
                        src="./nodejs.webp" width={18} height={18} className='rounded-full z-0' />
                    }
                  >
                    Node.js
                  </Chip>
                  <Chip className='bg-yellow-500 text-white dark:shadow-md dark:shadow-yellow-900' size='sm'
                    startContent={
                      <Image
                        alt='Express'
                        src="./expressjs.webp" width={18} height={18} className='rounded-full z-0' />
                    }
                  >
                    Express
                  </Chip>
                  <Chip className='bg-blue-700 text-white dark:shadow-md dark:shadow-blue-900' size='sm'
                    startContent={
                      <Image
                        alt='MySQL'
                        src="./mysql.webp"
                        width={18}
                        height={18}
                        className='rounded-full z-0 bg-opacity-100 bg-white dark:bg-none bg-opacity-100 dark:bg-opacity-0 p-[10%] dark:p-0'
                      />
                    }
                  >
                    MySQL
                  </Chip>
                </div>
                <div>
                  <p className="text-[75%] text-gray-600 dark:text-gray-300">

                    Plataforma de comercio electrónico para la venta de suplementos alimenticios. Completa funcionalidad para clientes y administradores.
                  </p>
                </div>
              </div>
              <div className='h-full justify-start items-center flex flex-row gap-2'>
                <Button
                  className="hover:scale-105 transition-transform bg-blue-500 text-white border-blue-500 hover:bg-blue-300 hover:text-black py-2 gap-1 text-[75%] lg:text-sm"
                  radius="full"
                  onPress={() => window.open("https://github.com/adrigar25/POWERFUEL")}
                  startContent={
                    <svg className="size-4 lg:size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  }
                >
                  Ver código
                </Button>

                <Tooltip
                  content="Descargar"
                  color='primary'
                >
                  <Button
                    radius='full'
                    as="a"
                    href="./docs/PowerFuel_Adrian_Garcia_Torrente__Adrian_Escribano_Perez.pdf"
                    download
                    className='hover:scale-105 transition-transform bg-blue-500 text-white border-blue-500 hover:bg-blue-300 hover:text-black py-2 gap-1 text-[75%] lg:text-sm'
                    color="primary"
                  >
                    Documentación
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </Card>
      </div >
    </section >
  );
}