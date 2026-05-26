import { business } from "../data/pageData"

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-pink-200/50 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#inicio" className="flex items-center gap-3 text-zinc-900">
          <div className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-yellow-300 text-2xl shadow-lg shadow-pink-300/40 md:h-14 md:w-14 md:text-3xl">
            🎪
          </div>

          <div>
            <h1 className="text-xl font-black leading-none text-pink-500 md:text-2xl">
              {business.name}
            </h1>
            <span className="text-xs font-extrabold text-zinc-500 md:text-sm">
              {business.subtitle}
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 font-extrabold text-zinc-600 lg:flex">
          <a className="transition hover:-translate-y-0.5 hover:text-pink-500" href="#inicio">
            Inicio
          </a>
          <a className="transition hover:-translate-y-0.5 hover:text-pink-500" href="#servicios">
            Servicios
          </a>
          <a className="transition hover:-translate-y-0.5 hover:text-pink-500" href="#paquetes">
            Paquetes
          </a>
          <a className="transition hover:-translate-y-0.5 hover:text-pink-500" href="#galeria">
            Galería
          </a>
          <a className="transition hover:-translate-y-0.5 hover:text-pink-500" href="#contacto">
            Contacto
          </a>
        </div>

        <a
          href={business.whatsappUrl}
          target="_blank"
          className="hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 font-black text-white shadow-lg shadow-pink-300/40 transition hover:-translate-y-1 hover:scale-105 lg:inline-flex"
        >
          Cotizar
        </a>
      </div>
    </nav>
  )
}

export default Navbar