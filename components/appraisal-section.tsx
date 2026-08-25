import Image from 'next/image'
import {
  ArrowRight,
  Building2,
  Trees,
  Cog,
  Plane,
  Briefcase,
  Copyright,
  Landmark,
  Scale,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { appraisalTypes } from '@/lib/company'

const typeIcons = [Building2, Trees, Cog, Plane, Briefcase, Copyright, Landmark, Scale]

export function AppraisalSection() {
  return (
    <section id="avaluos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Avalúos
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-4xl xl:text-5xl">
              ¿Cuánto vale realmente su inmueble?
            </h2>

            <div className="mt-7 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Conocer el valor de una propiedad es una parte fundamental de muchas
                decisiones inmobiliarias. Una valoración profesional permite contar con
                información que puede servir como referencia para diferentes procesos
                relacionados con un inmueble.
              </p>
              <p>
                Estamos en la capacidad de realizar encargos valuatorios{' '}
                <strong className="font-semibold text-foreground">
                  a nivel nacional
                </strong>
                . Solicite información sobre el proceso de valoración y conozca cómo
                podemos ayudarle.
              </p>
            </div>

            <a
              href="#contacto"
              className="group mt-10 inline-flex items-center gap-2 rounded-sm bg-navy px-7 py-4 text-[13px] font-semibold uppercase tracking-widest text-navy-foreground transition-all duration-300 hover:shadow-xl hover:shadow-navy/20"
            >
              Solicitar avalúo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-square">
              <Image
                src="/images/appraisal.png"
                alt="Sala de apartamento moderno con luz natural"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
        </div>

        {/* Tipos de avalúos */}
        <Reveal delay={80} className="mt-20 lg:mt-24">
          <p className="text-center text-[12px] font-semibold uppercase tracking-[0.28em] text-gold">
            Todo tipo de avalúos, a nivel nacional
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {appraisalTypes.map((point, i) => {
              const Icon = typeIcons[i % typeIcons.length]
              return (
                <div
                  key={point}
                  className="group flex flex-col items-start gap-4 rounded-sm border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5"
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-navy text-navy-foreground transition-colors duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium leading-snug text-foreground">
                    {point}
                  </span>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
