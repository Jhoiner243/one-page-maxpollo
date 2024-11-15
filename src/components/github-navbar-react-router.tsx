import * as React from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Bell } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { ModeToggle } from './ui/modo-toogle'

export function GithubNavbarReactRouter() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white fixed top-0 left-0 w-full z-10 shadow-inherit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 fixed left-10">
              <Link to="/" className="flex ml-0 items-center left-5 ">
                <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="fill-current text-black dark:text-white">
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-black dark:text-white hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
                <Link to="/blog" className="text-black dark:text-white hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                <Link to="/productos" className="text-black dark:text-white hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Productos</Link>
                <Link to="/contactos" className="text-black dark:text-white hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contactos</Link>
                <Link to="/servicio" className="text-black dark:text-white hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Servicio</Link>
                <Link to="/sobre-nosotros" className="text-black dark:text-white hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Sobre Nosotros</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Input 
                type="search" 
                placeholder="Buscar..." 
                className="text-slate-400 dark:text-slate-300 placeholder-gray-400 dark:placeholder-gray-500 border-gray-700 dark:border-gray-600 w-64"
              />
              <div className='ml-5'>
                <ModeToggle />
              </div>
              <div className='flex justify-between fixed right-20 gap-2'>
                <Button variant='secondary' className='bg-transparent hover:bg-opacity-5 hover:text-opacity-5 hover:border-blue-50'>
                  <span>Login</span>
                </Button>
                <Button variant='outline' className='bg-transparent items-center hover:bg-opacity-5 hover:text-opacity-5 hover:border-slate-400 rounded-full'>
                  <span>Register</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Input 
              type="search" 
              placeholder="Buscar..." 
              className="bg-gray-800 dark:bg-gray-900 text-white dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border-gray-700 dark:border-gray-600 w-full mb-2"
            />
            <Link to="/" className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
            <Link to="/blog" className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            <Link to="/productos" className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Productos</Link>
            <Link to="/contactos" className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contactos</Link>
            <Link to="/servicio" className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Servicio</Link>
            <Link to="/sobre-nosotros" className="text-gray-300 dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sobre Nosotros</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700 dark:border-gray-600">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Bell className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link to="/perfil" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800">Tu perfil</Link>
              <Link to="/configuracion" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800">Configuración</Link>
              <Link to="/cerrar-sesion" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800">Cerrar sesión</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
