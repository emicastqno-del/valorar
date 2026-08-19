import Image from 'next/image'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { properties } from '@/lib/company'

export function Properties() {
  return (
    <section id="propiedades" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Propiedades
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-4xl">
            Encuentre oportunidades inmobiliarias.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, i) => (
            <Reveal
              key={property.location}
              delay={(i % 3) * 100}
              className="group relative flex flex-col overflow-hidden rounded-sm bg-navy"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image}
                  alt={`${property.type} en ${property.location}, ${property.region}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-sm bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold-foreground">
                  {property.type}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-1.5 text-gold">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-widest">
                    {property.region}
                  </span>
                </div>
                <h3 className="mt-2 font-serif text-xl text-white">
                  {property.location}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {property.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-sm border border-white/15 px-2.5 py-1 text-[11px] text-white/70"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-widest text-white transition-colors hover:text-gold"
                >
                  Ver propiedad
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Las propiedades mostradas son de referencia y su disponibilidad puede variar.
            Consulte con el equipo de Valorar Eficaz por la información actualizada de cada
            inmueble.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
