import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { appraisalTypes } from '@/lib/company'

export function AppraisalSection() {
  return (
    <section id="avaluos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
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

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {appraisalTypes.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gold/15">
                  <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2.5} />
                </span>
                <span className="text-sm leading-snug text-foreground">{point}</span>
              </li>
            ))}
          </ul>

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
    </section>
  )
}
