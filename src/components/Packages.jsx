import { packages } from "../data/pageData"

function Packages() {
  return (
    <section
      id="paquetes"
      className="bg-[#fff7fb] px-5 py-24 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="font-black text-pink-500">Opciones disponibles</p>

          <h3 className="mt-3 text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Paquetes de animación
          </h3>

          <span className="mt-5 block leading-8 text-zinc-600">
            Puedes elegir un servicio específico o combinar actividades para
            crear una celebración más completa.
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pack, index) => (
            <article
              key={index}
              className="rounded-[2rem] border border-pink-100 bg-white p-8 shadow-xl shadow-pink-100 transition hover:-translate-y-3 hover:rotate-[-1deg] hover:shadow-2xl"
            >
              <div className="mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-pink-100 to-yellow-100 text-5xl">
                {pack.icon}
              </div>

              <h4 className="text-2xl font-black text-pink-500">
                {pack.name}
              </h4>

              <p className="mt-4 leading-7 text-zinc-600">{pack.detail}</p>

              <div className="mt-6 inline-block rounded-full bg-pink-100 px-5 py-3 font-black text-pink-700">
                {pack.ideal}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages