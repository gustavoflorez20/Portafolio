import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import yoImage from "../images/yo2.jpg";
import Code from "../images/s-l1200.webp";


const navigation = [
  { name: 'Proyectos', href: 'https://www.linkedin.com/in/gustavo-adolfo-fl%C3%B3rez-mier-y-ter%C3%A1n-016856169/' },
  { name: 'Experiencias', href: 'https://www.linkedin.com/in/gustavo-adolfo-fl%C3%B3rez-mier-y-ter%C3%A1n-016856169/' },
  { name: 'Estudios', href: 'https://www.linkedin.com/in/gustavo-adolfo-fl%C3%B3rez-mier-y-ter%C3%A1n-016856169/details/education/' },
  { name: 'Curiosidades', href: 'https://www.linkedin.com/in/gustavo-adolfo-fl%C3%B3rez-mier-y-ter%C3%A1n-016856169/recent-activity/all/' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white mb-1">
  <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">@Elalbinoo</span>
          <img
            src={Code}
            alt="Imagen"
            className=" w-20"
            style={{ borderRadius: "60%" }}
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-gray-900 transition-colors duration-200 hover:text-blue-500"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  </header>



      <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
  className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  aria-hidden="true">
  <div
    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4285F4] to-[#90CAF9] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    style={{
      clipPath:
        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    }}
  />
</div>
        <div className="mx-auto max-w-2xl py-12 sm:py-28 lg:py-32">

      
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <img
            src={yoImage}
            alt="Imagen"
            className=" w-20"
            style={{ borderRadius: "50%" }}
          />
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"><br />
            &nbsp;&nbsp;&nbsp; Gustavo Florez   {' '}
              <a href="https://www.instagram.com/elalbinoo/" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Sobre Mi <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Jr Web Developer
                        </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Soy un entusiasta junior en programación, apasionado por el
            desarrollo de software. Me siento atraído por el mundo de la
            tecnología y estoy emocionado por explorar nuevas oportunidades y
            desafíos en este campo. Tengo un gran interés en trabajar con código
            y desarrollar habilidades en el área de la programación.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://www.linkedin.com/in/gustavo-adolfo-fl%C3%B3rez-mier-y-ter%C3%A1n-016856169/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contacto
              </a>
              <a href="https://www.linkedin.com/in/gustavo-adolfo-fl%C3%B3rez-mier-y-ter%C3%A1n-016856169/" className="text-sm font-semibold leading-6 text-gray-900">
                Saber Mas <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
  className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
  aria-hidden="true"
>
  <div
    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-blue-700 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
    style={{
      clipPath:
        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    }}
  />
</div>
      </div>
    </div>
  )
}