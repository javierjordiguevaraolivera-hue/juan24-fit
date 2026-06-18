import Image from "next/image";

const services = [
  {
    title: "Asesoria online de alimentacion",
    description:
      "Plan semanal con macros, porciones practicas y ajustes segun tus fotos, medidas y energia.",
    detail: "Ideal para personas con agenda ocupada que quieren comer mejor sin improvisar.",
  },
  {
    title: "Rutinas online guiadas",
    description:
      "Programacion por nivel, videos de referencia, progresiones y seguimiento para entrenar en casa o gimnasio.",
    detail: "Incluye fuerza, cardio inteligente, movilidad y control de cargas.",
  },
  {
    title: "Rutinas presenciales",
    description:
      "Sesiones tecnicas en Miami y Lima para aprender ejecucion, postura y ritmo de entrenamiento.",
    detail: "Perfecto si buscas correccion en vivo y una estructura clara desde el primer dia.",
  },
];

const goals = [
  "Aumento de masa muscular",
  "Reduccion de grasa",
  "Tonificacion y definicion",
  "Fuerza funcional",
  "Recomposicion corporal",
  "Movilidad y postura",
];

const routines = [
  {
    name: "Build 24",
    focus: "Hipertrofia y fuerza",
    schedule: "4 a 5 dias por semana",
    copy: "Bloques progresivos de tren superior, tren inferior y core con control de volumen.",
  },
  {
    name: "Burn 24",
    focus: "Perdida de grasa",
    schedule: "3 dias de fuerza + 2 dias metabolicos",
    copy: "Circuitos medidos, caminatas estrategicas y entrenamiento de resistencia sin castigar articulaciones.",
  },
  {
    name: "Shape 24",
    focus: "Tonificacion",
    schedule: "4 dias por semana",
    copy: "Gluteos, abdomen, espalda y hombros con repeticiones tecnicas y descanso calculado.",
  },
  {
    name: "Reset 24",
    focus: "Base, movilidad y retorno",
    schedule: "2 a 3 dias por semana",
    copy: "Secuencia para volver a entrenar, mejorar rangos y crear constancia sin sobrecarga.",
  },
];

const hours = [
  { day: "Lunes a viernes", time: "6:00 AM - 9:00 PM" },
  { day: "Sabados", time: "8:00 AM - 4:00 PM" },
  { day: "Domingos", time: "Asesorias online programadas" },
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://www.juan24.fit/#business",
  name: "JUAN24FIT, CORP.",
  alternateName: "JUAN24FIT",
  url: "https://www.juan24.fit",
  image: "https://www.juan24.fit/opengraph-image",
  description:
    "Asesoria online de alimentacion, rutinas personalizadas y entrenamiento presencial en Miami y Lima.",
  telephone: "+17865972641",
  email: "info@juan24.fit",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10030 Sw 145 Pl",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33186",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Miami" },
    { "@type": "City", name: "Lima" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Peru" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Asesoria online de alimentacion",
        serviceType: "Nutrition coaching",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Rutinas personalizadas online",
        serviceType: "Online fitness coaching",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Entrenamiento presencial en Miami y Lima",
        serviceType: "Personal training",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3ec] pb-48 pt-20 text-[#171512] md:pb-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f6f3ec]/95 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="JUAN24FIT inicio">
            <span className="grid size-11 place-items-center rounded bg-[#111111] text-lg font-black text-[#f9d84a]">
              24
            </span>
            <span>
              <strong className="block text-lg leading-none tracking-wide">JUAN24FIT</strong>
              <span className="block text-xs font-semibold uppercase text-[#766f63]">
                Miami + Lima
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold uppercase text-[#3b3832] md:flex">
            <a href="#servicios" className="hover:text-[#bb1f2a]">
              Servicios
            </a>
            <a href="#rutinas" className="hover:text-[#bb1f2a]">
              Rutinas
            </a>
            <a href="#sedes" className="hover:text-[#bb1f2a]">
              Sedes
            </a>
            <a href="#contacto" className="hover:text-[#bb1f2a]">
              Contacto
            </a>
          </div>
          <a
            href="tel:+17865972641"
            className="rounded bg-[#bb1f2a] px-4 py-3 text-sm font-black uppercase text-white shadow-sm transition hover:bg-[#941923]"
          >
            Llamar
          </a>
        </nav>
      </header>

      <section id="inicio" className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85"
          alt="Gimnasio moderno con pesas y zona de entrenamiento funcional"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/55 to-black/15" />
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-16 sm:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-5 inline-flex border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold uppercase backdrop-blur">
              Asesoria fitness online y presencial
            </p>
            <h1 className="text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
              Entrena con estructura. Come con estrategia. Cambia con Juan24Fit.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88">
              Planes de alimentacion, rutinas personalizadas y entrenamiento presencial en Miami y Lima para construir masa, bajar grasa y verte mas fuerte sin perder el rumbo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/17865972641"
                className="bg-[#f9d84a] px-6 py-4 text-center text-sm font-black uppercase text-black transition hover:bg-white"
              >
                Reservar evaluacion
              </a>
              <a
                href="#servicios"
                className="border border-white/50 px-6 py-4 text-center text-sm font-black uppercase text-white transition hover:bg-white hover:text-black"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase text-[#bb1f2a]">Servicios</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Coaching claro para cada etapa de tu transformacion.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#5f594f]">
            Juan24Fit combina seguimiento humano, nutricion aplicable y rutinas medibles. Puedes empezar online, entrenar presencial o mezclar ambos formatos segun tu ciudad, horario y objetivo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="border border-black/10 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-black">{service.title}</h3>
              <p className="mt-4 leading-7 text-[#5f594f]">{service.description}</p>
              <p className="mt-6 border-l-4 border-[#f9d84a] pl-4 text-sm font-bold text-[#3b3832]">
                {service.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#171512] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative h-[420px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1300&q=85"
              alt="Persona entrenando fuerza con barra en gimnasio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase text-[#f9d84a]">Objetivos</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              El plan se adapta a tu cuerpo, no al reves.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {goals.map((goal) => (
                <div key={goal} className="border border-white/15 bg-white/6 px-4 py-4 font-bold">
                  {goal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="rutinas" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-[#bb1f2a]">Rutinas</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Secuencias de entrenamiento</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#5f594f]">
            Cada rutina se ajusta por experiencia, lesiones, equipo disponible y disponibilidad semanal.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {routines.map((routine) => (
            <article key={routine.name} className="border-t-4 border-[#bb1f2a] bg-white p-7 shadow-sm">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-3xl font-black">{routine.name}</h3>
                <span className="bg-[#f9d84a] px-3 py-2 text-xs font-black uppercase text-black">
                  {routine.focus}
                </span>
              </div>
              <p className="mt-5 text-sm font-black uppercase text-[#766f63]">{routine.schedule}</p>
              <p className="mt-3 leading-7 text-[#5f594f]">{routine.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="sedes" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase text-[#bb1f2a]">Sedes y horarios</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Miami presencial. Lima con sucursal. Online desde cualquier lugar.
            </h2>
            <div className="mt-8 grid gap-4">
              {hours.map((item) => (
                <div key={item.day} className="flex justify-between gap-5 border-b border-black/10 pb-4">
                  <span className="font-black">{item.day}</span>
                  <span className="text-right font-bold text-[#5f594f]">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="bg-[#171512] p-7 text-white">
              <h3 className="text-2xl font-black">Miami</h3>
              <p className="mt-4 leading-7 text-white/78">
                Entrenamiento presencial, evaluacion tecnica y seguimiento de rutina.
              </p>
              <address className="mt-6 not-italic font-bold">
                10030 Sw 145 Pl<br />
                MIAMI, FL 33186
              </address>
            </div>
            <div className="bg-[#f6f3ec] p-7">
              <h3 className="text-2xl font-black">Lima</h3>
              <p className="mt-4 leading-7 text-[#5f594f]">
                Sucursal para asesorias, rutinas presenciales programadas y evaluaciones por cita.
              </p>
              <p className="mt-6 font-bold">Atencion previa reserva</p>
            </div>
            <div className="relative h-64 overflow-hidden sm:col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1100&q=85"
                alt="Entrenador asistiendo una rutina personalizada"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-8 bg-[#bb1f2a] p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/75">Empieza esta semana</p>
            <h2 className="mt-3 text-4xl font-black leading-tight">
              Agenda tu evaluacion y recibe una ruta de entrenamiento clara.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href="tel:+17865972641" className="bg-white px-6 py-4 text-center font-black uppercase text-[#bb1f2a]">
              +1 786 597 2641
            </a>
            <a href="mailto:info@juan24.fit" className="border border-white/50 px-6 py-4 text-center font-black uppercase text-white">
              info@juan24.fit
            </a>
          </div>
        </div>
      </section>

      <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-[#111111] text-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-4 text-sm sm:px-8 md:grid-cols-[1fr_auto_auto_auto] md:items-center">
          <div>
            <strong className="block text-base">JUAN24FIT, CORP.</strong>
            <span className="text-white/72">Servicios fitness online y presencial</span>
          </div>
          <address className="not-italic font-semibold text-white/86">
            10030 Sw 145 Pl, MIAMI, FL 33186
          </address>
          <a href="tel:+17865972641" className="font-black text-[#f9d84a]">
            +17865972641
          </a>
          <a href="mailto:info@juan24.fit" className="font-black text-[#f9d84a]">
            info@juan24.fit
          </a>
        </div>
      </footer>
    </main>
  );
}
