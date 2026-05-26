import { business, galleryItems } from "../data/pageData"

function Gallery() {
  return (
    <section id="galeria" className="bg-white px-5 py-24 text-center md:px-8">
      <div className="mx-auto mb-14 max-w-3xl">
        <p className="font-black text-pink-500">Momentos Very Funny</p>

        <h3 className="mt-3 text-4xl font-black leading-tight tracking-tight md:text-5xl">
          Celebraciones llenas de color
        </h3>

        <span className="mt-5 block leading-8 text-zinc-600">
          Una muestra del tipo de actividades que se pueden vivir en cada
          evento.
        </span>
      </div>

      <div className="mx-auto grid max-w-7xl auto-rows-[210px] gap-5 md:grid-cols-2 xl:grid-cols-6 xl:auto-rows-[190px]">
        {galleryItems.map((item, index) => (
          <article
            key={index}
            className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br shadow-xl shadow-pink-100 transition hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${item.className}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.65),transparent_18%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.45),transparent_15%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.35),transparent_18%)]"></div>

            <div className="relative z-10 flex h-full flex-col justify-between p-6 text-left">
              <span className="text-6xl drop-shadow-lg">{item.icon}</span>

              <h4 className="text-2xl font-black text-white drop-shadow-lg">
                {item.title}
              </h4>
            </div>
          </article>
        ))}
      </div>

      <a
        href={business.instagramUrl}
        target="_blank"
        className="mt-10 inline-flex rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 font-black text-white shadow-xl shadow-pink-300/40 transition hover:-translate-y-1 hover:scale-105"
      >
        Ver Instagram {business.instagram}
      </a>
    </section>
  )
}

export default Gallery