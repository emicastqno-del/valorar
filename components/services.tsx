import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/company'

export function Services() {
  return (
    <section id="servicios" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Servicios
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-4xl">
            Soluciones inmobiliarias para diferentes necesidades.
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Conozca las soluciones que Valorar Eficaz pone a disposición de sus clientes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 100}
              className="shine-card interactive-lift group flex flex-col overflow-hidden rounded-sm border border-border bg-background hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/5"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-serif text-xl text-foreground">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-navy transition-colors hover:text-gold"
                >
                  Solicitar información
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
