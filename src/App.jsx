import "./App.css"

function App() {
  const servicios = [
    {
      icono: "🎨",
      titulo: "Pinta caritas",
      descripcion:
        "Diseños coloridos, seguros y entretenidos para cumpleaños, colegios y eventos familiares.",
    },
    {
      icono: "🦸‍♀️",
      titulo: "Disfraces",
      descripcion:
        "Animadores caracterizados con personajes, trajes temáticos y mucha energía.",
    },
    {
      icono: "🎈",
      titulo: "Animación infantil",
      descripcion:
        "Juegos, bailes, concursos y actividades para que todos los niños participen.",
    },
    {
      icono: "🎉",
      titulo: "Fiestas temáticas",
      descripcion:
        "Creamos celebraciones con temáticas de princesas, superhéroes, fantasía y más.",
    },
  ]

  const paquetes = [
    {
      nombre: "Pack Básico",
      detalle: "Animación, juegos y música",
      tiempo: "1 hora",
      icono: "🌟",
    },
    {
      nombre: "Pack Colorido",
      detalle: "Animación + pinta caritas",
      tiempo: "2 horas",
      icono: "🎨",
    },
    {
      nombre: "Pack Fiesta Total",
      detalle: "Animación, disfraces, juegos y pinta caritas",
      tiempo: "3 horas",
      icono: "👑",
    },
  ]

  return (
    <div className="page">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <div className="logo-icon">🎪</div>
            <h1>Mundo Animado</h1>
          </div>

          <div className="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#paquetes">Paquetes</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a href="#contacto" className="nav-button">
            Cotizar
          </a>
        </div>
      </nav>

      <section id="inicio" className="hero">
        <div className="circle circle-one"></div>
        <div className="circle circle-two"></div>
        <div className="circle circle-three"></div>

        <div className="hero-content">
          <div className="hero-text">
            <p className="tag">Animación para cumpleaños y eventos infantiles</p>

            <h2>Creamos fiestas llenas de magia, juegos y color</h2>

            <p className="hero-description">
              Llevamos pinta caritas, disfraces, música, juegos y animación para
              transformar cada celebración en una experiencia inolvidable.
            </p>

            <div className="hero-buttons">
              <a href="#servicios" className="primary-button">
                Ver servicios
              </a>

              <a href="#contacto" className="secondary-button">
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="mini-card card-left">
              <span>🎨</span>
              <p>Pinta caritas</p>
            </div>

            <div className="mini-card card-right">
              <span>🎈</span>
              <p>Globos y juegos</p>
            </div>

            <div className="mini-card card-right">
              <span>🦸</span>
              <p>Disfraces</p>
            </div>

            <div className="mini-card card-left">
              <span>🥳</span>
              <p>Diversión</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="section-header">
          <p>Lo que ofrecemos</p>
          <h3>Servicios para hacer especial cada evento</h3>
          <span>
            Nos adaptamos a la edad de los niños, el lugar, la cantidad de
            invitados y la temática de la celebración.
          </span>
        </div>

        <div className="services-grid">
          {servicios.map((servicio, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{servicio.icono}</div>
              <h4>{servicio.titulo}</h4>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section">
        <div className="info-card">
          <div className="big-icon">🎊</div>
          <h3>Momentos que los niños recuerdan</h3>
          <p>
            Actividades pensadas para reír, jugar, participar y compartir en
            familia.
          </p>
        </div>

        <div className="info-text">
          <p className="section-label">¿Por qué elegirnos?</p>
          <h3>Una experiencia entretenida, cercana y organizada</h3>

          <p>
            Cada evento se prepara según el tipo de celebración. Podemos incluir
            dinámicas, música, juegos, personajes y actividades especiales para
            distintas edades.
          </p>

          <div className="benefits">
            <div>✅ Actividades adaptadas a la edad de los niños</div>
            <div>✅ Animadores con energía y buena llegada</div>
            <div>✅ Opciones para cumpleaños, colegios y eventos familiares</div>
          </div>
        </div>
      </section>

      <section id="paquetes" className="section packages-section">
        <div className="section-header">
          <p>Opciones disponibles</p>
          <h3>Paquetes de animación</h3>
        </div>

        <div className="packages-grid">
          {paquetes.map((paquete, index) => (
            <div className="package-card" key={index}>
              <div className="package-icon">{paquete.icono}</div>
              <h4>{paquete.nombre}</h4>
              <p>{paquete.detalle}</p>
              <span>{paquete.tiempo}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <p>Cotiza tu celebración</p>
        <h3>Hagamos que tu fiesta sea inolvidable</h3>

        <span>
          Escríbenos con la fecha, comuna, cantidad de niños y tipo de evento.
          Te ayudamos a elegir la mejor opción.
        </span>

        <a
          href="https://wa.me/56912345678"
          target="_blank"
          className="whatsapp-button"
        >
          Contactar por WhatsApp
        </a>
      </section>

      <footer className="footer">
        <p>© 2026 Mundo Animado. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App