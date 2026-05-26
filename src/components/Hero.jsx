import { business } from "../data/pageData"

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-pink-200 via-yellow-100 to-sky-200 px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40"
    >
      <div className="absolute left-[8%] top-[18%] h-28 w-28 rounded-full bg-pink-400/30 blur-2xl md:h-36 md:w-36"></div>
      <div className="absolute bottom-[14%] right-[6%] h-32 w-32 rounded-full bg-sky-400/30 blur-2xl md:h-44 md:w-44"></div>
      <div className="absolute right-[34%] top-[17%] h-24 w-24 rounded-full bg-yellow-300/50 blur-2xl md:h-32 md:w-32"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="mb-6 inline-block rounded-full bg-white/75 px-5 py-3 font-black text-pink-700 shadow-xl shadow-pink-100">
            Entretención para eventos infantiles
          </p>

          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-zinc-950 sm:text-5xl md:text-6xl lg:text-7xl">
            Hacemos de cada celebración una experiencia{" "}
            <span className="relative inline-block text-pink-500">
              inolvidable
              <span className="absolute bottom-1 left-1 right-1 -z-10 h-3 rounded-full bg-yellow-300/80 md:h-4"></span>
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
            En {business.fullName} llevamos alegría, juegos, personajes, pinta
            caritas y entretención a cumpleaños, colegios, empresas y
            celebraciones familiares.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#servicios"
              className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 text-center font-black text-white shadow-xl shadow-pink-300/40 transition hover:-translate-y-1 hover:scale-105"
            >
              Ver servicios
            </a>

            <a
              href={business.whatsappUrl}
              target="_blank"
              className="rounded-full bg-white/90 px-8 py-4 text-center font-black text-pink-500 shadow-xl shadow-pink-100 transition hover:-translate-y-1 hover:scale-105"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-white/70 p-5 shadow-lg shadow-pink-100">
              <strong className="block text-3xl font-black text-pink-500">10+</strong>
              <span className="text-sm font-bold text-zinc-600">
                años de experiencia
              </span>
            </div>

            <div className="rounded-3xl bg-white/70 p-5 shadow-lg shadow-pink-100">
              <strong className="block text-3xl font-black text-pink-500">+1.600</strong>
              <span className="text-sm font-bold text-zinc-600">
                seguidores en Instagram
              </span>
            </div>

            <div className="rounded-3xl bg-white/70 p-5 shadow-lg shadow-pink-100">
              <strong className="block text-3xl font-black text-pink-500">100%</strong>
              <span className="text-sm font-bold text-zinc-600">
                diversión familiar
              </span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[500px] md:min-h-[540px]">
          <div className="absolute inset-x-0 bottom-16 top-20 flex flex-col items-center justify-center rounded-[2.5rem] border border-white/70 bg-white/80 p-8 text-center shadow-2xl shadow-pink-200/60 md:inset-x-8 md:top-10 md:rounded-[3rem]">
            <div className="mb-5 text-7xl drop-shadow-lg md:text-9xl">🥳</div>

            <h3 className="max-w-sm text-3xl font-black leading-tight md:text-4xl">
              Fiestas con magia, color y alegría
            </h3>

            <p className="mt-4 font-black text-pink-600">
              {business.location}
            </p>
          </div>

          <div className="absolute left-0 top-0 grid min-h-28 w-32 rotate-[-8deg] place-items-center rounded-3xl bg-white p-4 text-center shadow-xl shadow-pink-200/60 md:w-40">
            <span className="text-4xl md:text-5xl">🎨</span>
            <p className="mt-1 text-sm font-black text-pink-500 md:text-base">
              Pinta caritas
            </p>
          </div>

          <div className="absolute right-0 top-5 grid min-h-28 w-32 rotate-[7deg] place-items-center rounded-3xl bg-white p-4 text-center shadow-xl shadow-pink-200/60 md:w-40">
            <span className="text-4xl md:text-5xl">🎭</span>
            <p className="mt-1 text-sm font-black text-pink-500 md:text-base">
              Personajes
            </p>
          </div>

          <div className="absolute bottom-0 left-1/2 grid min-h-28 w-32 -translate-x-1/2 rotate-[-4deg] place-items-center rounded-3xl bg-white p-4 text-center shadow-xl shadow-pink-200/60 md:w-40">
            <span className="text-4xl md:text-5xl">🎈</span>
            <p className="mt-1 text-sm font-black text-pink-500 md:text-base">
              Juegos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero