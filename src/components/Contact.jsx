import { business } from "../data/pageData"

function Contact() {
  return (
    <section
      id="contacto"
      className="bg-gradient-to-br from-pink-500 to-purple-800 px-5 py-24 md:px-8"
    >
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/20 bg-white/10 px-6 py-12 text-center text-white shadow-2xl shadow-purple-900/30 backdrop-blur-xl md:px-12 md:py-16">
        <p className="font-black text-pink-100">
          Cotizaciones al {business.phone}
        </p>

        <h3 className="mx-auto mt-3 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          Agenda tu evento con {business.fullName}
        </h3>

        <span className="mx-auto mt-6 block max-w-2xl leading-8 text-pink-100">
          Escríbenos indicando la fecha, comuna, cantidad de niños y tipo de
          evento. Atendemos en Santiago y regiones aledañas.
        </span>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={business.whatsappUrl}
            target="_blank"
            className="rounded-full bg-white px-8 py-4 font-black text-pink-500 transition hover:-translate-y-1 hover:scale-105"
          >
            Contactar por WhatsApp
          </a>

          <a
            href={business.instagramUrl}
            target="_blank"
            className="rounded-full border-2 border-white/70 px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:scale-105"
          >
            Ver Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact