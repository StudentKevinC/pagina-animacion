import { business } from "../data/pageData"

function Footer() {
  return (
    <footer className="bg-zinc-950 px-5 py-10 text-center text-white md:px-8">
      <div>
        <h3 className="text-2xl font-black text-pink-500">
          {business.fullName}
        </h3>

        <p className="mt-2 text-zinc-300">{business.description}</p>
      </div>

      <div className="my-8 flex flex-col justify-center gap-4 font-bold text-zinc-300 sm:flex-row sm:gap-8">
        <a className="transition hover:text-pink-500" href="#inicio">
          Inicio
        </a>
        <a className="transition hover:text-pink-500" href="#servicios">
          Servicios
        </a>
        <a className="transition hover:text-pink-500" href="#paquetes">
          Paquetes
        </a>
        <a className="transition hover:text-pink-500" href="#contacto">
          Contacto
        </a>
      </div>

      <p className="text-sm text-zinc-400">
        © 2026 {business.fullName}. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer