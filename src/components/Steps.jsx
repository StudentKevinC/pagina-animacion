function Steps() {
  const steps = [
    {
      number: "1",
      title: "Escríbenos",
      text: "Indica fecha, comuna y tipo de celebración.",
    },
    {
      number: "2",
      title: "Elige el servicio",
      text: "Te ayudamos a escoger la mejor opción para tu evento.",
    },
    {
      number: "3",
      title: "Disfruta la fiesta",
      text: "Nos encargamos de llevar entretención, juegos y alegría.",
    },
  ]

  return (
    <section className="bg-[#fff7fb] px-5 py-24 md:px-8">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="font-black text-pink-500">¿Cómo cotizar?</p>

        <h3 className="mt-3 text-4xl font-black leading-tight tracking-tight md:text-5xl">
          Agenda tu animación en simples pasos
        </h3>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.number}
            className="rounded-[2rem] bg-white p-8 shadow-xl shadow-pink-100 transition hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-2xl font-black text-white">
              {step.number}
            </div>

            <h4 className="text-2xl font-black">{step.title}</h4>

            <p className="mt-4 leading-7 text-zinc-600">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Steps