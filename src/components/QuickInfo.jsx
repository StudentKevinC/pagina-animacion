import { business } from "../data/pageData"

function QuickInfo() {
  const items = [
    {
      icon: "📍",
      title: "Santiago y alrededores",
      text: "Atención en Santiago y regiones aledañas.",
    },
    {
      icon: "📲",
      title: "Cotizaciones",
      text: `Agenda tu evento al ${business.phone}.`,
    },
    {
      icon: "⭐",
      title: "Experiencia",
      text: "Más de 10 años animando celebraciones.",
    },
  ]

  return (
    <section className="relative z-20 mx-auto -mt-8 grid max-w-7xl gap-4 px-5 md:grid-cols-3 md:px-8">
      {items.map((item, index) => (
        <article
          key={index}
          className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-xl shadow-pink-100 transition hover:-translate-y-2"
        >
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-pink-100 text-3xl">
            {item.icon}
          </div>

          <div>
            <h3 className="text-lg font-black">{item.title}</h3>
            <p className="mt-1 leading-6 text-zinc-600">{item.text}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default QuickInfo