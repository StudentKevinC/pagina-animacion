import { reasons } from "../data/pageData"

function Experience() {
  return (
    <section className="bg-white px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-pink-400 via-yellow-300 to-sky-400 p-4 shadow-2xl shadow-pink-200/70">
          <div className="grid min-h-[330px] place-items-center rounded-[2rem] bg-white/90 p-8 text-center md:min-h-[430px]">
            <div>
              <div className="mb-6 text-8xl md:text-9xl">🎊</div>

              <h3 className="mx-auto max-w-sm text-3xl font-black leading-tight md:text-5xl">
                La fiesta comienza aquí
              </h3>
            </div>
          </div>
        </div>

        <div>
          <p className="font-black text-pink-500">¿Por qué elegirnos?</p>

          <h3 className="mt-3 text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Una experiencia entretenida, cercana y organizada
          </h3>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Cada celebración se prepara según la edad de los niños, la cantidad
            de invitados, el espacio disponible y el tipo de evento. El objetivo
            es que todos participen, se rían y vivan un momento especial.
          </p>

          <div className="mt-8 grid gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl bg-pink-50 p-5 font-bold transition hover:translate-x-2 hover:bg-pink-100"
              >
                <span>✅</span>
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience