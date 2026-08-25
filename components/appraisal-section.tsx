import Image from 'next/image'
import { ArrowRight, Cog, Plane, Briefcase, Copyright, Landmark, Scale } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { appraisalTypes } from '@/lib/company'

const specializedIcons = [Cog, Plane, Briefcase, Copyright, Landmark, Scale]

export function AppraisalSection() {
  const [urban, rural, ...specialized] = appraisalTypes

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
        <div className="mt-20 lg:mt-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
              Qué avaluamos
            </p>
            <h3 className="mt-4 font-serif text-2xl font-medium text-balance text-foreground lg:text-3xl">
              Todo tipo de avalúos, a nivel nacional
            </h3>
          </Reveal>

          {/* Categorías principales — foto grande */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              { ...urban, image: '/images/about.png' },
              { ...rural, image: '/images/prop-laceja.png' },
            ].map((cat) => (
              <Reveal
                key={cat.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 lg:p-8">
                  <h4 className="font-serif text-2xl text-white lg:text-3xl">
                    {cat.title}
                  </h4>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
                    {cat.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Avalúos especializados — lista editorial */}
          <Reveal delay={100} className="mt-6 divide-y divide-border rounded-sm border border-border">
            {specialized.map((item, i) => {
              const Icon = specializedIcons[i % specializedIcons.length]
              return (
                <div
                  key={item.title}
                  className="group flex flex-col gap-4 p-6 transition-colors duration-300 hover:bg-secondary sm:flex-row sm:items-center sm:gap-6 lg:p-7"
                >
                  <span className="font-serif text-2xl text-gold/50 sm:w-10 sm:flex-none">
                    {String(i + 3).padStart(2, '0')}
                  </span>
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-navy text-navy-foreground transition-colors duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
