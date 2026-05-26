import { services } from "../data/pageData"

function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="font-black text-pink-500">Lo que ofrecemos</p>

        <h3 className="mt-3 text-4xl font-black leading-tight tracking-tight md:text-5xl">
          Servicios para hacer especial cada evento
        </h3>

        <span className="mt-5 block leading-8 text-zinc-600">
          Actividades diseñadas para cumpleaños, colegios, empresas,
          celebraciones familiares y eventos con niños.
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <article
            key={index}
            className="group rounded-[2rem] bg-white p-8 shadow-xl shadow-pink-100 transition hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-pink-100 text-5xl transition group-hover:-rotate-6 group-hover:scale-110">
              {service.icon}
            </div>

            <h4 className="text-2xl font-black">{service.title}</h4>

            <p className="mt-4 leading-7 text-zinc-600">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services